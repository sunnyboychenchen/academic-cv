const { chromium } = require('playwright');
const fs = require('node:fs/promises');
const assert = require('node:assert/strict');
const path = require('node:path');
const base = (process.env.SITE_URL || 'http://127.0.0.1:1313').replace(/\/$/, '');
const out = path.resolve(__dirname, '../qa/revision2');
const routes = [
  '/', '/research/', '/research/proactive-safety/', '/research/crash-injury/',
  '/research/emerging-technologies/', '/research/multimodal-scenes/', '/projects/',
  '/project/fhwa-roadway-adas/', '/project/speed-management-context/', '/publication/',
  '/publication/vlm-traffic-video/', '/publication/submitted-alarm/', '/about/'
];
const failures = [];
const checks = [];
(async () => {
  await fs.mkdir(out, { recursive: true });
  const browser = await chromium.launch({headless: true, channel: process.platform === 'win32' ? 'msedge' : undefined});
  try {
    const page = await browser.newPage();
    page.on('pageerror', e => failures.push(e.message));
    const internal = new Set();
    for (const viewport of [{width:1440,height:1000},{width:390,height:844},{width:320,height:740},{width:768,height:1024},{width:1920,height:1080}]) {
      await page.setViewportSize(viewport);
      for (const route of routes) {
        const response = await page.goto(base + route, {waitUntil:'networkidle'});
        assert.equal(response.status(),200,route);
        await page.evaluate(() => document.fonts.ready);
        // Trigger lazy images throughout the long pages before checking their load state.
        for (const img of await page.locator('main img').all()) await img.scrollIntoViewIfNeeded();
        await page.evaluate(() => window.scrollTo(0,0));
        await page.waitForTimeout(150);
        const metrics = await page.evaluate(() => ({
          h1: [...document.querySelectorAll('main h1')].map(x=>x.textContent),
          overflow: document.documentElement.scrollWidth > innerWidth + 1,
          clippedSelects: [...document.querySelectorAll('select')].filter(select => {
            const ctx = document.createElement('canvas').getContext('2d');
            ctx.font = getComputedStyle(select).font;
            return [...select.options].some(option => ctx.measureText(option.text).width + 44 > select.clientWidth);
          }).map(select => select.id),
          images: [...document.querySelectorAll('main img')].map(img=>({src:img.currentSrc,loaded:img.complete&&img.naturalWidth>0})),
          text: document.querySelector('main').innerText,
          links:[...document.querySelectorAll('a[href]')].map(a=>a.href),
          navFits: [...document.querySelectorAll('.site-nav a')].every(a=>a.scrollWidth <= a.clientWidth+1)
        }));
        assert.equal(metrics.h1.length,1,'One H1: '+route);
        assert.equal(metrics.overflow,false,'Horizontal overflow: '+viewport.width+route);
        assert.equal(metrics.navFits,true,'Clipped navigation: '+viewport.width+route);
        assert.equal(metrics.clippedSelects.length,0,'Clipped select options: '+viewport.width+route+' '+metrics.clippedSelects);
        assert(metrics.images.every(i=>i.loaded),'Broken image: '+route);
        assert(!/September 2008|September 2015|1 min read|Download CV|Research Snapshot/.test(metrics.text),'Legacy UI: '+route);
        for(const href of metrics.links) if(href.startsWith(base)) internal.add(href);
        checks.push({viewport:viewport.width,route,h1:metrics.h1[0],images:metrics.images.length});
        if([1440,390].includes(viewport.width)) await page.screenshot({path:path.join(out,(route==='/'?'home':route.split('/').filter(Boolean).join('-'))+'-'+viewport.width+'.png'),fullPage:true});
      }
    }
    await page.goto(base+'/');
    assert.equal(await page.locator('.research-card').count(),4);
    assert.equal(await page.locator('[data-paper]').count(),4);
    assert.equal(await page.locator('[data-paper]:not([data-status="published"])').count(),0);
    assert.match(await page.locator('.featured-project').innerText(),/Principal Investigator/);
    assert.match(await page.locator('.featured-project').innerText(),/\$246,950/);
    assert.doesNotMatch(await page.locator('.featured-project').innerText(),/240,000|487/);
    await page.goto(base+'/projects/');
    assert.equal(await page.locator('.project-row').count(),10);
    assert.match(await page.locator('.project-group').nth(1).innerText(),/Pending approval/);
    assert.match(await page.locator('.project-group').nth(1).innerText(),/\$240,000 proposed/);
    assert.doesNotMatch(await page.locator('.project-group').nth(3).innerText(),/\$/);
    await page.goto(base+'/about/');
    const profile = await page.locator('main').innerText();
    assert.match(profile,/Project Leader/);
    assert.match(profile,/Ph\.D\. awarded 2023/i);
    assert.match(profile,/School of Transportation, Southeast University/);
    assert.match(profile,/Ph\.D\. committee member/);
    assert.match(profile,/exam completion is distinct from professional engineer licensure/);
    await page.goto(base+'/publication/');
    const papers = page.locator('[data-paper]');
    assert.equal(await papers.count(),25);
    for(const [status, count] of Object.entries({published:15,preprint:1,submitted:9})) {
      await page.locator('#paper-status').selectOption(status);
      assert.equal(await page.locator('[data-paper]:visible').count(),count);
      assert.equal(await page.locator('[data-paper]:visible:not([data-status="'+status+'"])').count(),0);
    }
    await page.locator('#paper-strand').selectOption('multimodal');
    assert.equal(await page.locator('[data-paper]:visible').count(),2);
    await page.getByRole('button',{name:'Reset filters'}).click();
    await page.waitForTimeout(100);
    await page.locator('#paper-strand').selectOption('technology');
    const technologyCount = await page.locator('[data-paper][data-strands~="technology"]').count();
    assert.equal(await page.locator('[data-paper]:visible').count(),technologyCount);
    await page.locator('#paper-year').selectOption('2024');
    assert.equal(await page.locator('[data-paper]:visible').count(),0);
    assert.equal(await page.locator('.empty-state').isVisible(),true);
    await page.getByRole('button',{name:'Reset filters'}).click();
    await page.waitForTimeout(100);
    assert.equal(await page.locator('[data-paper]:visible').count(),25);
    await page.locator('#paper-search').fill('SAVeD');
    assert.equal(await page.locator('[data-paper]:visible').count(),2);
    await page.locator('#paper-search').fill('a nonexistent paper title');
    assert.equal(await page.locator('[data-paper]:visible').count(),0);
    await page.getByRole('button',{name:'Reset filters'}).click();
    await page.waitForTimeout(100);
    assert.equal(await page.locator('#paper-status').inputValue(),'');
    assert.equal(await page.locator('[data-paper]:visible').count(),25);
    for(const href of internal) {
      const response = await page.request.get(href);
      assert.equal(response.status(),200,'Broken internal link: '+href);
    }
    // Check every new publication/project page, not only the representative viewports.
    for(const href of [...internal].filter(href=>/\/(publication|project)\/[^/#]+\/$/.test(href))) {
      await page.goto(href,{waitUntil:'networkidle'});
      assert.equal(await page.locator('main h1').count(),1,href);
      assert.equal(await page.locator('.paper-authors:empty,.paper-venue:empty').count(),0,href);
    }
    for(const [route,target] of Object.entries({
      '/project/':'/projects/', '/experience/':'/about/',
      '/project/proactive-crash-prediction/':'/research/proactive-safety/',
      '/project/causal-spatial-safety/':'/research/crash-injury/',
      '/project/multimodal-adas-video/':'/research/emerging-technologies/',
      '/project/speed-management-moes/':'/research/proactive-safety/'
    })) {
      await page.goto(base+route,{waitUntil:'networkidle'});
      assert.equal(new URL(page.url()).pathname,target,'Redirect: '+route);
    }
    for(const route of ['/post/','/event/','/teaching/']) {
      const response = await page.request.get(base+route);
      assert.equal(response.status(),404,'Empty legacy section still published: '+route);
    }
    const nojs = await browser.newContext({javaScriptEnabled:false});
    const fallback = await nojs.newPage();
    await fallback.goto(base+'/publication/');
    assert.equal(await fallback.locator('[data-paper]:visible').count(),25);
    assert.equal(await fallback.locator('.publication-filters').isVisible(),false);
    await nojs.close();
    assert.equal(failures.length,0,'Browser errors: '+failures.join('; '));
    await fs.writeFile(path.join(out,'checks.json'),JSON.stringify({checks,internalLinks:internal.size,statusCounts:{published:15,preprint:1,submitted:9},filterTests:'passed',noJsFallback:'passed',browserErrors:failures},null,2));
    console.log(JSON.stringify({pagesAndViewports:checks.length,internalLinks:internal.size,filters:'passed',redirects:'passed',contentChecks:'passed',noJsFallback:'passed',browserErrors:failures,screenshots:out}));
  } finally { await browser.close(); }
})().catch(e=>{console.error(e);process.exit(1);});

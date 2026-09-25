const { chromium } = require('playwright');
const fs = require('node:fs/promises');
const assert = require('node:assert/strict');
const path = require('node:path');
const base = process.env.SITE_URL || 'http://127.0.0.1:1313';
const out = path.resolve(__dirname, '../qa/redesign');
const routes = ['/', '/research/', '/research/proactive-safety/', '/research/crash-injury/', '/research/emerging-technologies/', '/publication/', '/about/'];
const failures = [];
const checks = [];
(async () => {
  await fs.mkdir(out, { recursive: true });
  const browser = await chromium.launch({headless: true, channel: process.platform === 'win32' ? 'msedge' : undefined});
  const page = await browser.newPage();
  page.on('pageerror', e => failures.push(e.message));
  const internal = new Set();
  for (const viewport of [{width:1440,height:1000},{width:390,height:844},{width:320,height:740},{width:768,height:1024},{width:1920,height:1080}]) {
    await page.setViewportSize(viewport);
    for (const route of routes) {
      const response = await page.goto(base + route, {waitUntil:'networkidle'});
      assert.equal(response.status(),200,route);
      await page.evaluate(() => document.fonts.ready);
      // Trigger native lazy loading before image assertions and full-page captures.
      await page.locator('footer').scrollIntoViewIfNeeded();
      await page.evaluate(() => window.scrollTo(0,0));
      await page.waitForTimeout(150);
      const metrics = await page.evaluate(() => ({
        h1: [...document.querySelectorAll('main h1')].map(x=>x.textContent),
        overflow: document.documentElement.scrollWidth > innerWidth + 1,
        images: [...document.querySelectorAll('main img')].map(img=>({src:img.currentSrc,loaded:img.complete&&img.naturalWidth>0})),
        text: document.querySelector('main').innerText,
        links:[...document.querySelectorAll('a[href]')].map(a=>a.href)
      }));
      assert.equal(metrics.h1.length,1,'One H1: '+route);
      assert.equal(metrics.overflow,false,'Horizontal overflow: '+viewport.width+route);
      assert(metrics.images.every(i=>i.loaded),'Broken image: '+route);
      assert(!metrics.text.includes('Project Leader'),'Removed experience returned');
      assert(!/September 2008|September 2015|1 min read|Download CV|Research Snapshot/.test(metrics.text),'Legacy UI: '+route);
      for(const href of metrics.links) if(href.startsWith(base)) internal.add(href);
      checks.push({viewport:viewport.width,route,h1:metrics.h1[0],images:metrics.images.length});
      if([1440,390].includes(viewport.width)) await page.screenshot({path:path.join(out,(route==='/'?'home':route.split('/').filter(Boolean).join('-'))+'-'+viewport.width+'.png'),fullPage:true});
    }
  }
  await page.goto(base+'/publication/');
  assert.equal(await page.locator('[data-paper]').count(),9);
  await page.locator('#paper-strand').selectOption('technology');
  assert.equal(await page.locator('[data-paper]:visible').count(),2);
  await page.locator('#paper-year').selectOption('2024');
  assert.equal(await page.locator('[data-paper]:visible').count(),0);
  assert.equal(await page.locator('.empty-state').isVisible(),true);
  await page.getByRole('button',{name:'Reset filters'}).click();
  await page.waitForTimeout(100);
  assert.equal(await page.locator('[data-paper]:visible').count(),9);
  await page.locator('#paper-search').fill('Rongjie');
  assert.equal(await page.locator('[data-paper]:visible').count(),1);
  await page.locator('#paper-search').fill('a nonexistent paper title');
  assert.equal(await page.locator('[data-paper]:visible').count(),0);
  await page.getByRole('button',{name:'Reset filters'}).click();
  await page.waitForTimeout(100);
  await page.locator('#paper-year').selectOption('2026');
  assert.equal(await page.locator('[data-paper]:visible').count(),1);
  for(const href of internal) {
    const url = new URL(href);
    const response = await page.request.get(url.href);
    assert.equal(response.status(),200,'Broken internal link: '+href);
  }
  for(const route of ['/projects/','/experience/','/project/proactive-crash-prediction/','/project/causal-spatial-safety/','/project/multimodal-adas-video/','/project/speed-management-moes/']) {
    await page.goto(base+route,{waitUntil:'networkidle'});
    assert(!page.url().includes('/project/'),'Missing redirect: '+route);
    assert.equal(await page.locator('main h1').count(),1);
  }
  for(const route of ['/post/','/event/','/teaching/']) {
    const response = await page.request.get(base+route);
    assert.equal(response.status(),404,'Empty legacy section still published: '+route);
  }
  const nojs = await browser.newContext({javaScriptEnabled:false});
  const fallback = await nojs.newPage();
  await fallback.goto(base+'/publication/');
  assert.equal(await fallback.locator('[data-paper]:visible').count(),9);
  assert.equal(await fallback.locator('.publication-filters').isVisible(),false);
  await nojs.close();
  assert.equal(failures.length,0,'Browser errors: '+failures.join('; '));
  await fs.writeFile(path.join(out,'checks.json'),JSON.stringify({checks,internalLinks:internal.size,filterTests:'passed',noJsFallback:'passed',browserErrors:failures},null,2));
  console.log(JSON.stringify({pagesAndViewports:checks.length,internalLinks:internal.size,filters:'passed',redirects:'passed',noJsFallback:'passed',browserErrors:failures,screenshots:out}));
  await browser.close();
})().catch(e=>{console.error(e);process.exit(1);});

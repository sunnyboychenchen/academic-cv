const publications = document.querySelector('[data-publications]');
if (publications) {
  const form = publications.querySelector('form');
  const search = form.querySelector('#paper-search');
  const strand = form.querySelector('#paper-strand');
  const year = form.querySelector('#paper-year');
  const status = form.querySelector('#paper-status');
  const papers = [...publications.querySelectorAll('[data-paper]')];
  const count = publications.querySelector('.filter-count');
  const empty = publications.querySelector('.empty-state');
  const normalize = text => text.toLocaleLowerCase().normalize('NFKD');
  const index = new Map(papers.map(paper => [paper, normalize(paper.textContent)]));

  function filter() {
    const terms = normalize(search.value.trim()).split(/\s+/).filter(Boolean);
    let visible = 0;
    for (const paper of papers) {
      const matches = terms.every(term => index.get(paper).includes(term))
        && (!strand.value || paper.dataset.strands.split(' ').includes(strand.value))
        && (!year.value || paper.dataset.year === year.value)
        && (!status.value || paper.dataset.status === status.value);
      paper.hidden = !matches;
      if (matches) visible++;
    }
    for (const section of publications.querySelectorAll('[data-paper-section]')) {
      section.hidden = !section.querySelector('[data-paper]:not([hidden])');
    }
    count.textContent = visible + (visible === 1 ? ' research record' : ' research records');
    empty.hidden = visible !== 0;
  }

  form.hidden = false;
  count.hidden = false;
  form.addEventListener('submit', event => event.preventDefault());
  form.addEventListener('input', filter);
  form.addEventListener('change', filter);
  // Reset fires before native controls receive their default values.
  form.addEventListener('reset', () => requestAnimationFrame(filter));
  filter();
}

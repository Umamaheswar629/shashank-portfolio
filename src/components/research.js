export const renderResearchPipeline = (stages) => {
  const pipeline = document.querySelector('#research-pipeline');
  if (!pipeline) return;

  pipeline.innerHTML = stages
    .map(
      (stage) => `
        <article class="research-stage reveal" data-index="${stage.number}">
          <div class="stage-header">
            <span class="stage-number">${stage.number}</span>
            <span class="stage-tag">${stage.tags[0]}</span>
          </div>
          <h3>${stage.title}</h3>
          <p>${stage.description}</p>
          <div class="stage-tags">
            ${stage.tags.map((tag) => `<span>${tag}</span>`).join('')}
          </div>
        </article>
      `,
    )
    .join('');

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 1200 360');
  svg.setAttribute('preserveAspectRatio', 'none');
  svg.classList.add('pipeline-line');

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M 40 180 C 170 100, 260 100, 380 180 S 620 260, 800 180 S 1030 90, 1160 180');
  path.setAttribute('stroke', 'var(--teal)');
  path.setAttribute('stroke-width', '2');
  path.setAttribute('fill', 'none');
  path.setAttribute('stroke-linecap', 'round');
  path.setAttribute('stroke-dasharray', '8 14');

  svg.appendChild(path);
  pipeline.appendChild(svg);
};

const generateProjectVisual = (project) => {
  const labels = project.technologies.slice(0, 4);
  const width = 360;
  const height = 200;

  return `
    <svg viewBox="0 0 ${width} ${height}" class="project-visual-svg" role="img" aria-label="${project.title} system visualization">
      <defs>
        <linearGradient id="grad-${project.id}" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="var(--teal)" stop-opacity="0.75" />
          <stop offset="100%" stop-color="var(--amber)" stop-opacity="0.9" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="${width}" height="${height}" fill="rgba(18, 28, 47, 0.8)" stroke="rgba(95, 211, 196, 0.2)" />
      <g opacity="0.9">
        <path d="M 20 140 C 80 80, 120 80, 170 140 S 290 200, 340 125" stroke="url(#grad-${project.id})" stroke-width="2.8" fill="none" />
        <circle cx="62" cy="104" r="4" fill="var(--amber)" />
        <circle cx="154" cy="112" r="4" fill="var(--teal)" />
        <circle cx="240" cy="140" r="4" fill="var(--amber)" />
        <circle cx="304" cy="120" r="4" fill="var(--teal)" />
      </g>
      <g opacity="0.8">
        <path d="M 30 60 H 170" stroke="rgba(237, 231, 218, 0.2)" />
        <path d="M 235 50 H 330" stroke="rgba(237, 231, 218, 0.18)" />
        <path d="M 40 175 H 120" stroke="rgba(237, 231, 218, 0.18)" />
      </g>
      <g class="project-labels">
        ${labels
          .map(
            (tag, idx) => `
              <text x="${24 + idx * 72}" y="30" fill="rgba(237, 231, 218, 0.7)" font-size="10" font-family="IBM Plex Mono, monospace">${tag}</text>
            `,
          )
          .join('')}
      </g>
    </svg>
  `;
};

export const renderProjectList = (projects) => {
  const container = document.querySelector('#project-list');
  if (!container) return;

  container.innerHTML = projects
    .map(
      (project, index) => `
        <article class="project-card reveal" data-index="${String(index + 1).padStart(2, '0')}" tabindex="0">
          <div class="project-head">
            <span class="project-index">PROJECT ${String(index + 1).padStart(2, '0')}</span>
            <span class="project-meta">${project.year} · ${project.domain}</span>
          </div>
          <div class="project-card-content">
            <div class="project-copy">
              <h3>${project.title}</h3>
              <p class="project-summary">${project.description}</p>
              <div class="project-meta-stack">
                <div><span>Problem</span><p>${project.problem}</p></div>
                <div><span>Approach</span><p>${project.approach}</p></div>
                <div><span>Result</span><p>${project.result}</p></div>
              </div>
            </div>
            <div class="project-visual">
              ${generateProjectVisual(project)}
            </div>
          </div>
          <div class="project-techs">
            ${project.technologies.map((tech) => `<span>${tech}</span>`).join('')}
          </div>
          <div class="project-links">
            ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer">GitHub</a>` : ''}
            ${project.paper ? `<a href="${project.paper}" target="_blank" rel="noopener noreferrer">Research</a>` : ''}
            ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer">Demo</a>` : ''}
          </div>
        </article>
      `,
    )
    .join('');

  container.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('mouseenter', () => card.classList.add('is-active'));
    card.addEventListener('mouseleave', () => card.classList.remove('is-active'));
    card.addEventListener('focus', () => card.classList.add('is-active'));
    card.addEventListener('blur', () => card.classList.remove('is-active'));
  });
};

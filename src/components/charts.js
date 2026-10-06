export const renderInterests = (interests) => {
  const container = document.querySelector('#interests-grid');
  if (!container) return;

  container.innerHTML = interests
    .map(
      (interest, index) => `
        <article class="interest-card reveal">
          <span class="interest-index">0${index + 1}</span>
          <h3>${interest.title}</h3>
          <p>${interest.description}</p>
          <div class="stage-tags">
            ${interest.tags.map((tag) => `<span>${tag}</span>`).join('')}
          </div>
        </article>
      `,
    )
    .join('');
};

export const renderOverlapChart = () => {
  const chart = document.querySelector('#overlap-chart');
  if (!chart) return;

  const pointsA = [12, 18, 32, 52, 75, 66];
  const pointsB = [18, 28, 50, 70, 55, 34];
  const pointsC = [30, 42, 68, 80, 60, 48];
  const labels = ['Theory', 'Systems', 'ML', 'Data', 'Models', 'Application'];

  const width = 760;
  const height = 220;
  const pad = 26;
  const xStep = (width - pad * 2) / (labels.length - 1);

  const toY = (value) => height - pad - (value / 92) * (height - pad * 2);
  const toPath = (values) =>
    values
      .map((value, index) => {
        const x = pad + index * xStep;
        const y = toY(value);
        return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
      })
      .join(' ');

  const overlapPath = labels
    .map((_, index) => {
      const x = pad + index * xStep;
      const y = Math.min(toY(pointsA[index]), toY(pointsB[index]), toY(pointsC[index])) + 8;
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    })
    .join(' ');

  chart.innerHTML = `
    <div class="chart-caption">
      <span class="eyebrow">Overlap</span>
      <h3>The intersection I want to explore.</h3>
    </div>
    <svg viewBox="0 0 ${width} ${height}" class="overlap-svg" aria-label="Research overlap chart">
      <g>
        <path d="${toPath(pointsA)}" fill="none" stroke="var(--teal)" stroke-width="2.5" stroke-linecap="round" />
        <path d="${toPath(pointsB)}" fill="none" stroke="var(--amber)" stroke-width="2.5" stroke-linecap="round" />
        <path d="${toPath(pointsC)}" fill="none" stroke="var(--bone)" stroke-width="2.5" stroke-linecap="round" />
        <path d="${overlapPath} L ${pad + (labels.length - 1) * xStep} ${height - pad} L ${pad} ${height - pad} Z" fill="rgba(201, 80, 60, 0.12)" />
      </g>
      <g class="chart-axis">
        ${labels
          .map((label, index) => {
            const x = pad + index * xStep;
            return `<text x="${x}" y="${height - 6}" text-anchor="middle" fill="rgba(237, 231, 218, 0.7)">${label}</text>`;
          })
          .join('')}
      </g>
      <g>
        <circle cx="${pad + 3 * xStep}" cy="${toY(Math.min(pointsA[3], pointsB[3], pointsC[3]))}" r="6" fill="var(--red)" />
        <text x="${pad + 3 * xStep + 14}" y="${toY(Math.min(pointsA[3], pointsB[3], pointsC[3])) - 10}" fill="var(--bone)" font-size="12">The intersection I want to explore.</text>
      </g>
    </svg>
  `;
};

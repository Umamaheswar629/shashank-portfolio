export const renderAudioLab = (tracks) => {
  const root = document.querySelector('#audio-lab-grid');
  if (!root) return;

  root.innerHTML = tracks
    .map(
      (track, index) => {
        const label = track.title.toLowerCase().includes('before') ? 'Before' : track.title.toLowerCase().includes('after') ? 'After' : 'Studio';
        return `
          <article class="audio-track-card reveal ${label === 'Before' ? 'is-before' : label === 'After' ? 'is-after' : 'is-studio'}">
            <div class="track-topline">
              <span class="track-index">0${index + 1}</span>
              <span class="track-tag">${label}</span>
            </div>
            <div class="track-player-head">
              <span class="player-label">${label} mix</span>
              <span class="player-dot"></span>
            </div>
            <h3>${track.title}</h3>
            <div class="wave-visual" aria-hidden="true">
              ${Array.from({ length: 44 }, (_, i) => `<span style="height:${12 + ((i * 11) % 32)}px"></span>`).join('')}
            </div>
            <p>${track.description}</p>
            <audio controls preload="metadata" src="${track.src}"></audio>
            <div class="stage-tags">
              ${track.tags.map((tag) => `<span>${tag}</span>`).join('')}
            </div>
          </article>
        `;
      },
    )
    .join('');
};

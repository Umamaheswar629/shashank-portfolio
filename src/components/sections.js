export const renderAchievementList = (items) => {
  const root = document.querySelector('#achievement-list');
  if (!root) return;

  root.innerHTML = items
    .map(
      (item) => `
        <article class="achievement-item reveal">
          <span class="achievement-year">${item.year}</span>
          <div>
            <h3>${item.title}</h3>
            <p>${item.detail}</p>
          </div>
        </article>
      `,
    )
    .join('');
};

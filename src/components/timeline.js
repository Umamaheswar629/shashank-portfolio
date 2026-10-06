export const renderTimelines = (items, context) => {
  const target = context === 'experience' ? '#experience-timeline' : '#education-timeline';
  const root = document.querySelector(target);
  if (!root) return;

  root.innerHTML = items
    .map(
      (item) => {
        if (context === 'experience') {
          return `
            <article class="timeline-item reveal">
              <div class="timeline-dot" aria-hidden="true"></div>
              <div class="timeline-content">
                <div class="timeline-head">
                  <div>
                    <p class="meta-line">${item.dates}</p>
                    <h3>${item.role}</h3>
                  </div>
                  <span>${item.organization}</span>
                </div>
                <p>${item.description}</p>
                <ul>
                  ${item.contributions.map((entry) => `<li>${entry}</li>`).join('')}
                </ul>
              </div>
            </article>
          `;
        }

        return `
          <article class="timeline-item reveal">
            <div class="timeline-dot" aria-hidden="true"></div>
            <div class="timeline-content education-card">
              <div class="timeline-head">
                <div>
                  <p class="meta-line">${item.dates}</p>
                  <h3>${item.degree}</h3>
                </div>
                <span>${item.gpa || 'GPA / CGPA'}</span>
              </div>
              <p class="institution">${item.university} · ${item.location}</p>
              <div class="course-tags">
                ${item.coursework.map((course) => `<span>${course}</span>`).join('')}
              </div>
              <ul>
                ${item.achievements.map((note) => `<li>${note}</li>`).join('')}
              </ul>
            </div>
          </article>
        `;
      },
    )
    .join('');
};

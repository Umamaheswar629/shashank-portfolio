export const renderStatusDock = () => {
  const dock = document.querySelector('#status-dock');
  if (!dock) return;

  const reveal = () => dock.classList.add('is-visible');

  window.addEventListener('pointerdown', reveal, { once: true });
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Tab' || event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      reveal();
    }
  }, { once: true });

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (!visible) return;
      const sectionId = visible.target.id;
      const labelMap = {
        about: 'About',
        research: 'Research',
        projects: 'Projects',
        experience: 'Experience',
        education: 'Education',
        statement: 'Statement',
        contact: 'Contact'
      };

      const currentSection = document.querySelector('#dock-section');
      if (currentSection) currentSection.textContent = labelMap[sectionId] || 'About';
    },
    { rootMargin: '0px 0px -60% 0px' },
  );

  document.querySelectorAll('main section[id]').forEach((section) => sectionObserver.observe(section));
};

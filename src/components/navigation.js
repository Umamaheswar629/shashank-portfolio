export const createNavigation = () => {
  const navItems = document.querySelectorAll('.nav-item');
  const sections = [...document.querySelectorAll('main section[id]')];
  const statusLabel = document.querySelector('.status-label');
  const led = document.querySelector('.led');

  const setActive = (id) => {
    navItems.forEach((item) => {
      const isActive = item.getAttribute('href') === `#${id}`;
      item.classList.toggle('is-active', isActive);
    });

    const dockSection = document.querySelector('#dock-section');
    if (dockSection) {
      const labelMap = {
        about: 'About',
        research: 'Research',
        projects: 'Projects',
        experience: 'Experience',
        education: 'Education',
        statement: 'Statement',
        contact: 'Contact'
      };
      dockSection.textContent = labelMap[id] || 'About';
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible) {
        setActive(visible.target.id);
      }
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );

  sections.forEach((section) => observer.observe(section));

  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      const targetId = item.getAttribute('href')?.replace('#', '');
      setActive(targetId);

      if (led) {
        led.classList.add('is-active');
        if (statusLabel) statusLabel.textContent = 'active';
      }
      setTimeout(() => {
        if (led) led.classList.remove('is-active');
        if (statusLabel) statusLabel.textContent = 'idle';
      }, 1200);
    });
  });
};

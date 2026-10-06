import './styles/tokens.css';
import './styles/base.css';
import './styles/sections.css';
import './styles/components.css';
import './styles/responsive.css';
import { site } from './content/site.js';
import { createNavigation } from './components/navigation.js';
import { renderResearchPipeline } from './components/research.js';
import { renderProjectList } from './components/project-list.js';
import { renderInterests, renderOverlapChart } from './components/charts.js';
import { renderTimelines } from './components/timeline.js';
import { renderAchievementList } from './components/sections.js';
import { renderStatusDock } from './components/status-dock.js';
import { renderAudioLab } from './components/audio-lab.js';
import { initHeroScene } from './scenes/hero-scene.js';

const setHeroContent = () => {
  const eyebrow = document.querySelector('.eyebrow');
  if (eyebrow) {
    eyebrow.textContent = `Master's application — ${site.person.field}`;
  }

  const tagline = document.querySelector('.tagline');
  if (tagline) tagline.textContent = site.person.tagline;

  const intro = document.querySelector('.intro-copy');
  if (intro) intro.textContent = site.person.introduction;

  const nameLines = document.querySelectorAll('.name-line');
  const displayName = site.person.name.toUpperCase();
  if (displayName.length >= 6) {
    nameLines[0].textContent = displayName.slice(0, 3);
    nameLines[1].textContent = displayName.slice(3);
  } else {
    nameLines[0].textContent = displayName;
    nameLines[1].textContent = '';
  }

  const heroFacts = document.querySelector('.hero-facts');
  if (heroFacts) {
    heroFacts.innerHTML = site.facts
      .map(
        (fact) => `
          <div class="fact-item">
            <span>${fact.label}</span>
            <strong>${fact.value}</strong>
          </div>
        `,
      )
      .join('');
  }

  const contactLinks = document.querySelector('#contact-links');
  if (contactLinks) {
    const availableLinks = [
      site.links.email ? `<a href="${site.links.email}" rel="noopener noreferrer">Email</a>` : '',
      site.links.cv ? `<a href="${site.links.cv}" download>CV</a>` : ''
    ].filter(Boolean).join('');

    contactLinks.innerHTML = availableLinks;
  }

  const bioCopy = document.querySelector('#bio-copy');
  if (bioCopy) {
    bioCopy.innerHTML = `<p>${site.bio.text}</p>`;
  }

  const statementGrid = document.querySelector('#statement-grid');
  if (statementGrid) {
    statementGrid.innerHTML = site.statement.sections
      .map(
        (section, idx) => `
          <article class="statement-card">
            <div class="statement-index">0${idx + 1}</div>
            <h3>${section.title}</h3>
            <p>${section.text}</p>
          </article>
        `,
      )
      .join('');
  }

  const fitSection = document.querySelector('#program-fit');
  if (fitSection) {
    fitSection.innerHTML = `
      <div class="section-heading">
        <p class="eyebrow">Why this program</p>
        <h2>Research fit and academic direction.</h2>
      </div>
      <div class="fit-grid">
        <div class="fit-card fit-card--primary">
          <p class="tiny-label">University</p>
          <h3>${site.application.university}</h3>
          <p>${site.application.country}</p>
          <div class="focus-list">
            ${site.application.focus.map((focus) => `<span>${focus}</span>`).join('')}
          </div>
        </div>
        <div class="fit-card">
          <p class="tiny-label">Program</p>
          <h3>${site.application.program}</h3>
          <p>${site.application.fitStatement}</p>
        </div>
      </div>
    `;
  }

  const dockApplication = document.querySelector('#dock-application');
  const dockFocus = document.querySelector('#dock-focus');
  const dockSection = document.querySelector('#dock-section');
  if (dockApplication) dockApplication.textContent = site.application.program;
  if (dockFocus) dockFocus.textContent = site.person.field;
  if (dockSection) dockSection.textContent = 'About';
};

const initCursor = () => {
  if (document.querySelector('.cursor')) return;

  const cursor = document.createElement('div');
  cursor.className = 'cursor';
  document.body.appendChild(cursor);

  const updatePosition = (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  };

  window.addEventListener('pointermove', updatePosition);

  document.addEventListener('pointerover', (event) => {
    const target = event.target.closest('a, button, .project-card, .audio-track-card, .nav-item, audio');
    if (target) cursor.classList.add('is-hover');
  });

  document.addEventListener('pointerout', (event) => {
    const target = event.target.closest('a, button, .project-card, .audio-track-card, .nav-item, audio');
    if (target) cursor.classList.remove('is-hover');
  });
};

const revealContent = () => {
  const items = document.querySelectorAll('.reveal');
  items.forEach((item, index) => {
    requestAnimationFrame(() => {
      setTimeout(() => item.classList.add('is-visible'), index * 30);
    });
  });
};

const renderPage = () => {
  initCursor();
  setHeroContent();
  createNavigation();
  renderAudioLab(site.audioTracks);
  renderResearchPipeline(site.researchStages);
  renderProjectList(site.projects);
  renderInterests(site.interests);
  renderOverlapChart();
  renderTimelines(site.experience, 'experience');
  renderTimelines(site.education, 'education');
  renderAchievementList(site.achievements);
  renderStatusDock();
  initHeroScene();
  revealContent();

  const pubs = document.querySelector('#research-pubs');
  if (pubs) {
    if (site.research.length) {
      pubs.innerHTML = `
        <div class="section-heading">
          <p class="eyebrow">Research & publications</p>
          <h2>Contributions and inquiry.</h2>
        </div>
        <div class="pub-list">
          ${site.research
            .map(
              (item) => `
                <article class="pub-item">
                  <div>
                    <p class="meta-line">${item.year} · ${item.venue}</p>
                    <h3>${item.title}</h3>
                    <p>${item.abstract}</p>
                  </div>
                  <div class="pub-links">
                    ${item.paper ? `<a href="${item.paper}" target="_blank" rel="noopener noreferrer">Paper</a>` : ''}
                    ${item.code ? `<a href="${item.code}" target="_blank" rel="noopener noreferrer">Code</a>` : ''}
                  </div>
                </article>
              `,
            )
            .join('')}
        </div>
      `;
    } else {
      pubs.innerHTML = `
        <div class="section-heading">
          <p class="eyebrow">Research interests</p>
          <h2>The questions I want to investigate.</h2>
        </div>
        <div class="research-empty-state">
          <p>No publications are listed yet. Add real research entries to this section when they are available.</p>
        </div>
      `;
    }
  }

  const photoCard = document.querySelector('#photo-card');
  if (photoCard) {
    const fallback = `
      <div class="photo-placeholder" aria-label="Portrait placeholder">
        <div class="portrait-frame">
          <span>PHOTO</span>
          <small>4:5</small>
        </div>
      </div>
    `;

    if (site.person.photo && site.person.photo.src) {
      const img = document.createElement('img');
      img.src = site.person.photo.src;
      img.alt = site.person.photo.alt || site.person.name;
      img.style.objectPosition = `${site.person.photo.focus[0] * 100}% ${site.person.photo.focus[1] * 100}%`;
      img.onerror = () => {
        photoCard.innerHTML = fallback;
      };
      photoCard.appendChild(img);
    } else {
      photoCard.innerHTML = fallback;
    }
  }
};

renderPage();

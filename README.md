# Master's Application Portfolio

This project is a production-ready single-page portfolio designed for a Master's application, research interest alignment, and academic storytelling. It is built with Vite and vanilla JavaScript, following the content model architecture specified in the brief.

## Quick start

1. Install dependencies:
   npm install
2. Start the development server:
   npm run dev
3. Build for production:
   npm run build

## Project structure

- `index.html` — app shell and page structure
- `src/main.js` — application entry point
- `src/content/site.js` — source of truth for all personal and project content
- `src/components/` — UI modules for navigation, research flow, projects, charts, and timeline data
- `src/scenes/hero-scene.js` — animated hero visualization
- `src/styles/` — design tokens and page styling
- `public/` — static assets such as CV or visual files if needed

## Where to edit personal information

All personal information is centralized in `src/content/site.js`.

Update:
- `person.name`
- `person.field`
- `person.degree`
- `person.university`
- `person.tagline`
- `person.introduction`
- `links`
- `projects`
- `education`
- `experience`
- `achievements`
- `statement`
- `application`

## How to add a CV and real media

1. Place your CV in a folder such as `public/cv/`
2. Update the `links.cv` path in `site.js`
3. Add a real portrait to `person.photo.src`
4. Replace placeholder project images or let the system generate technical visuals automatically

## University-specific versions

The site includes an application object that can be adjusted without rewriting the entire page:

```js
application: {
  university: '[UNIVERSITY]',
  program: '[PROGRAM]',
  country: '[COUNTRY]',
  focus: ['[FOCUS 1]', '[FOCUS 2]', '[FOCUS 3]'],
  faculty: [],
  fitStatement: '[WHY THIS PROGRAM FITS MY GOALS]'
}
```

This allows you to create multiple versions for different programs by editing this object and reusing the same portfolio structure.

## Production checklist

Before deployment:

1. Replace all placeholders with real information.
2. Verify all links are valid.
3. Confirm the CV path works.
4. Add real photographs and research details if present.
5. Run `npm run build` to verify the production build.
6. Test the site on desktop and mobile viewports.

## Accessibility and UX notes

- Skip link is included for keyboard navigation.
- Reduced-motion support is respected.
- All major sections are semantic.
- Focus states are visible on interactive elements.
- Visualizations remain subtle and do not overwhelm content.

## Making it real

1. Replace personal information in `src/content/site.js`.
2. Add a real photo and CV.
3. Add real project details.
4. Add real experience and education information.
5. Add research or publications if available.
6. Update the program fit section for each application.
7. Verify links, build, and deploy.

## License

This project is provided as a template and can be adapted for personal academic use.

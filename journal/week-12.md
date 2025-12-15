# Week 12 Progress Journal

## Overview
In Week 12, I focused on setting up and refining the **Projects subsystem** within my Angular portfolio application. This included the creation of new components, services, and UI layouts, as well as improvements to **i18n translation files** and the **Figma-to-code workflow**.  
The main goal was to ensure a consistent and responsive design implementation that accurately reflects the Figma mockups while maintaining Angular Material and Bootstrap integration.

## Completed Tasks
- Created and configured the project model, service, `project-detail` guard, projects page, `project-detail` page, and `project-card` component.
- Identified and added new boundary objects to the RAD (Requirements Analysis Document).
- Updated the `project-card` UI, adjusted the layout, and made design refinements in Figma to match the real implementation.
- Translated the finalized Figma design into Angular components with iterative feedback and visual validation until the design matched perfectly.
- Implemented **Bootstrap’s grid system** (only grid SCSS imported) to handle responsive layouts across different screen sizes.
- Integrated Bootstrap with Angular Material to achieve a consistent, maintainable, and flexible design system.
- Organized and standardized translation file structure for easier scalability and readability.

## Challenges
- While the Figma Auto Layout was well structured, replicating it directly in HTML/CSS revealed that responsiveness didn’t behave as expected. To overcome this, I integrated Bootstrap Grid to handle breakpoints and automatic stacking for images and text.
- Had to manually map Figma’s schema color variables to Angular Material’s system (`--mat-sys-*`) for theme compatibility.
- Balancing **Angular Material components** with **Bootstrap grid classes** and custom **Flexbox CSS** required careful handling. Some Material components use their own internal flex layouts, while Bootstrap columns and rows rely on Flexbox. I had to ensure these systems didn’t conflict, maintaining consistent spacing, alignment, and responsive behavior across different screen sizes.

## Lessons Learned
- I learned how to include only the grid system (without the rest of Bootstrap’s CSS) to maintain Angular Material’s visual integrity. This approach gives access to responsive grid classes (`.container`, `.row`, `.col-*`) without importing unnecessary Bootstrap components.
```bash
npm install bootstrap
```
```scss
// styles.scss
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/utilities";
@import "bootstrap/scss/grid";
```
- I learned why **Bootstrap Grid** was the best fit for this project: it automatically adjusts layouts across breakpoints, which saved me from writing many custom flex rules and media queries.
- I realized that Angular Material’s `mat-grid-list` is less flexible for mixed content layouts, so using Bootstrap allowed me to implement a cleaner and more scalable solution.
- I refined a clear guide for converting Figma designs into HTML/CSS using **Bootstrap** and **Angular Material**. I made sure Bootstrap handled the structure and responsiveness, Angular Material provided consistent UI components, and my custom CSS preserved the visual fidelity of the Figma designs.
- I used the Bootstrap Grid Structure `.container`, `.row`, and `.col-*` classes to structure layouts responsively.
```html
<div class="container">
  <div class="row">
    <div class="col-12 col-lg-6">
      Content here
    </div>
  </div>
</div>
```
- I wrapped Material components inside Bootstrap grids to maintain alignment and spacing:
```html
<div class="container">
  <div class="row align-items-start">
    <div class="col-12 col-lg-6">
      <mat-card class="project-card">
        <img src="assets/project.jpg" class="img-fluid" alt="Project image" />
        <mat-card-content>
          <h3>Project Title</h3>
          <p>Short project description goes here.</p>
        </mat-card-content>
      </mat-card>
    </div>
  </div>
</div>
```
- I also learned important **responsive design practices**: using `.img-fluid` with  custom CSS like `object-fit: cover` ensures a consistent card layout.
```css
.img-fluid {
  max-width: 100%;
  height: auto;
}

img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  object-position: top;
  border-radius: inherit;
}
```
- I learned to avoid duplicating `display: flex` on Bootstrap rows; the `.row` class already handles it.
- Overall, I learned how to **combine Bootstrap, Angular Material, and custom CSS** to convert Figma designs into fully responsive and maintainable Angular layouts, while keeping fidelity to the original design.
- I standardized the **translation file structure**. I learned that keeping a consistent JSON layout makes it easier to add or update languages, the `"app"` namespace works well for global or reusable strings like titles and greetings, and separating sections like `shared`, `route`, and `projects` helps organise content by responsibility.
```json
  {
    "app": {
      "title": "Luis's Portfolio",
      "hello": "Hi there! 👋🏻"
    },
    "shared": {
      "download-resume-button": "Download Resume",
      "theme": {
        "light": "Light",
        "hc-light": "Light High Contrast",
        "dark": "Dark",
        "hc-dark": "Dark High Contrast"
      },
      "project-card": {
        "learn-more": "Learn More"
      }
    },
    "route": {
      "home": "Home",
      "projects": "Projects",
      "blog": "Blog",
      "docs": "Docs"
    },
    "projects": {
      "angularPortfolio": {
        "name": "Angular Portfolio",
        "description": "Lorem ipsum...",
        "summary": "Lorem ipsum..."
      },
      "reactDashboard": {
        "name": "React Dashboard",
        "description": "Lorem ipsum...",
        "summary": "Lorem ipsum..."
      }
    }
  }
```
- I learned how to use **component variants in Figma**, which allows me to create multiple states or versions of a component efficiently and maintain consistency across designs. [Figma Variants Guide](https://help.figma.com/hc/en-us/articles/360056440594-Create-and-use-variants)

## Next Steps
- Continue refining the **Projects** and **Project Detail** UI pages.
- Implement **pagination** to show the project cards in projects page.
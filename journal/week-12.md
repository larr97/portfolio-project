# Week 12 Progress Journal

## Overview
In Week 12, I focused on setting up and refining the **Projects subsystem** within my Angular portfolio application. This included the creation of new components, services, and UI layouts, as well as improvements to **i18n translation files** and the **Figma-to-code workflow**.
The main goal was to ensure a consistent and responsive design implementation that accurately reflects the Figma mockups while maintaining Angular Material and Bootstrap integration.

## Completed Tasks
- Created and configured the project model, service, `project-detail` guard, Projects page, `project-detail` page, and `project-card` component.
- Identified and added new boundary objects to the RAD (Requirements Analysis Document).
- Updated the `project-card` UI, adjusted the layout, and made design refinements in Figma to match the real implementation.
- Translated the finalized Figma design into Angular components with iterative feedback and visual validation until the implementation closely matched the design.
- Implemented **Bootstrap's grid system** to handle responsive layouts across different screen sizes.
- Integrated Bootstrap with Angular Material and custom CSS to achieve a consistent, maintainable, and flexible design system.
- Organized and standardized the translation file structure for easier scalability and readability.

## Challenges
- While the Figma Auto Layout was well structured, translating it directly into HTML/CSS revealed that responsiveness did not always behave as expected. To address this, I integrated Bootstrap Grid to handle responsive structural sizing, breakpoints, and automatic stacking for images and text while keeping custom Flexbox CSS for the Figma-specific layout and styling.
- I had to manually map Figma's color variables to Angular Material's system variables (`--mat-sys-*`) for theme compatibility.
- Balancing **Angular Material components**, **Bootstrap grid classes**, and custom **Flexbox CSS** required careful handling. Bootstrap rows and columns rely on Flexbox internally, while Figma Auto Layout can also generate flex-related CSS properties. I had to ensure that custom Figma-derived CSS did not conflict with Bootstrap's responsive sizing while maintaining consistent spacing, alignment, and responsive behavior across different screen sizes.

## Lessons Learned
- I learned how to include only the Bootstrap functionality needed by the project instead of importing all of Bootstrap's component styling. This approach provides access to responsive grid classes such as `.container`, `.row`, and `.col-*` without unnecessarily introducing Bootstrap component styles that could interfere with Angular Material.
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
- I learned why **Bootstrap Grid** was a good fit for this project. It provides responsive containers, columns, and breakpoints without requiring me to manually define the structural width of each element at every screen size. Custom Flexbox CSS can still be used to reproduce Figma Auto Layout and visual behavior inside those responsive structures.
- I realized that Angular Material's `mat-grid-list` is less flexible for the mixed content layouts required by the project, so using Bootstrap Grid allowed me to create a cleaner and more adaptable responsive structure.
- I refined a clear workflow for converting Figma designs into HTML/CSS using **Bootstrap**, **Angular Material**, and **custom CSS**. In this workflow, Figma defines the design, Bootstrap handles the responsive structure, Angular Material provides standardized UI components, and custom CSS preserves the Figma-specific layout and visual styling.
- I learned how to translate Figma's container hierarchy into Bootstrap. A common Figma structure consists of an outer container that fills the available space and an inner container with a fixed desktop design width.
```text
FIGMA

Outer Container
Width: Fill
│
└── Inner Container
    Fixed desktop width
```
In the implementation, the outer container can remain a custom section wrapper, while the inner fixed-width Figma container can be translated into Bootstrap's responsive `.container`.
```html
<div class="projects-section">
  <div class="container projects-container">
    ...
  </div>
</div>
```
This allows Bootstrap to control the responsive content width instead of copying the fixed desktop width directly from Figma.
- I used the Bootstrap Grid structure `.container`, `.row`, and `.col-*` classes to structure layouts responsively.
```html
<div class="container">
  <div class="row">
    <div class="col-12 col-lg-6">
      Content here
    </div>
  </div>
</div>
```
The responsive column classes replace fixed structural widths from the Figma design. For example, `col-12 col-lg-6` allows an element to occupy the full row on smaller screens and half of the row on larger screens.
- I learned that **Bootstrap structural sizing and custom Flexbox CSS can work together**. Bootstrap can control the responsive width of an element while custom CSS controls the layout of its children.
For example:
```html
<div class="col-12 col-lg-6 description-column">
  ...
</div>
```
can still use:
```scss
.description-column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
```
Bootstrap controls how much space the column occupies, while the custom Flexbox properties reproduce the internal Auto Layout behavior defined in Figma.
- I learned that Figma Dev Mode CSS should be treated as an **implementation reference rather than CSS that must always be copied directly**. Some properties describe how an element behaves specifically inside Figma's Auto Layout system and may overlap or conflict with the responsive behavior already provided by Bootstrap.
For example, Figma may generate:
```scss
flex: 1 0 0;
```
This property controls how the element itself behaves as a flex item inside its parent. If the same element uses Bootstrap `col-*` classes for responsive sizing, the property should be evaluated carefully rather than copied automatically.
If it conflicts with Bootstrap's responsive column behavior, Bootstrap should remain responsible for the structural sizing.
However, `flex: 1 0 0` can still be appropriate for nested custom elements when it is needed to reproduce Figma's intended Fill behavior.
- I learned the difference between:
```scss
display: flex;
```
and:
```scss
flex: 1 0 0;
```
`display: flex` makes an element a flex container and controls the layout of its **children**.
`flex: 1 0 0` controls how the **element itself** behaves as a flex item inside its parent.
This distinction is important when combining Bootstrap Grid with Figma Auto Layout.
- I learned that CSS does not need to be removed simply because Bootstrap already provides the same behavior. For example, Bootstrap `.row` already uses Flexbox, so explicitly declaring:
```scss
display: flex;
```
on a custom row class may be redundant, but it is generally harmless.
Keeping a Figma-derived property can also make the relationship between the Figma Auto Layout and the custom CSS easier to understand.
The more important consideration is whether the custom property **conflicts with Bootstrap's responsive behavior**, rather than whether it duplicates an existing Bootstrap property.
- I learned to distinguish between **structural dimensions** and **intentional visual dimensions** when translating Figma.
Fixed dimensions used by Figma for page containers, rows, or responsive columns do not always need to be copied because Bootstrap can take responsibility for that structural sizing.
For example, instead of copying a fixed Figma container width:
```scss
.projects-container {
    width: 1152px;
}
```
I can use:
```html
<div class="container projects-container">
```
and allow Bootstrap to manage the responsive width.
However, intentional visual dimensions can still remain in custom CSS. For example, a fixed image height can be used to maintain consistent cropping and card appearance.
- I learned how to use Bootstrap Grid for the responsive structure of custom Angular components while using Angular Material for individual UI controls such as buttons and icons.
For example, the Project Card can use Bootstrap for its responsive structure:
```html
<div class="container project-card-container">
  <div class="row">
    <div class="col-12 col-lg-6 image-column">
      <div class="image">
        <img
          src="assets/project.jpg"
          class="img-fluid"
          alt="Project image">
      </div>
    </div>
    <div class="col-12 col-lg-6 description-column">
      <p>Project Title</p>
      <p>Short project description goes here.</p>
      <button mat-button>
        Learn More
      </button>
    </div>
  </div>
</div>
```
This creates a clear separation of responsibilities:
```text
Bootstrap
    ↓
Responsive container, rows, columns,
and structural sizing

Angular Material
    ↓
Buttons, icons, and other
standardized UI controls

Custom CSS
    ↓
Figma Auto Layout, spacing,
alignment, shadows, border radius,
typography, and image behavior
```
- I also learned important **responsive image practices**. Using `.img-fluid` together with custom CSS such as `object-fit: cover` allows images to remain responsive while maintaining a consistent visual layout.
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
The responsive image behavior and the intentional visual height serve different purposes. Bootstrap helps the image remain responsive within its container, while custom CSS controls its crop and appearance.
- Overall, I learned how to **combine Bootstrap, Angular Material, and custom CSS** to convert Figma designs into responsive and maintainable Angular layouts while keeping fidelity to the original design.
The main responsibility model is:
```text
Figma
    ↓
Defines the design and layout intent

Bootstrap
    ↓
Handles responsive structure and sizing

Angular Material
    ↓
Provides standardized UI components

Custom CSS
    ↓
Translates Figma-specific layout and visual styling
```
- I standardized the **translation file structure**. I learned that keeping a consistent JSON layout makes it easier to add or update languages. The `"app"` namespace works well for global or reusable strings such as titles and greetings, while separating sections such as `shared`, `route`, and `projects` helps organize content by responsibility.
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
- I learned how to use **component variants in Figma**, which allows me to create multiple states or versions of a component efficiently while maintaining consistency across designs. [Figma Variants Guide](https://help.figma.com/hc/en-us/articles/360056440594-Create-and-use-variants)

## Next Steps
- Continue refining the **Projects** and **Project Detail** UI pages.
- Implement **pagination** to show a limited number of project cards on the Projects page.
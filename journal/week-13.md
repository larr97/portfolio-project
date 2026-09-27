# Week 13 Progress Journal

## Overview
In Week 13, I focused on completing the **Projects page**, implementing [**Angular Material pagination**](https://material.angular.dev/components/paginator/overview), and improving reusable UI components. I also updated the Figma design to accurately reflect the final implementation.

## Completed Tasks
- Learned how to use [**Angular Material Paginator**](https://material.angular.dev/components/paginator/overview), documented its implementation in a guide, and integrated pagination into the Projects page.
- Made the paginator control [**sticky**](https://www.w3schools.com/css/css_positioning_sticky.asp) and styled it using Angular Material component overrides and Material system color tokens.
- Updated the **Figma Projects page** and created a custom Paginator component in Figma to accurately match the Angular Material implementation.
- Created a reusable **Section Title component** and integrated it into the Projects page for consistent section headings.
- Translated the complete **Projects page from Figma into Angular code**, refining the layout and styling to match the design across mobile and desktop views.

## Challenges
- I could not find an Angular Material Figma UI kit containing a paginator that accurately matched the actual Angular Material component. Because of this, I had to recreate the paginator in Figma.
- Translating the complete Projects page from Figma into Angular required comparing the implementation against the design and refining the layout, spacing, responsiveness, and component styling.
- I had to identify reusable UI elements while implementing the Projects page, which led to the creation of the **Section Title component**.

## Lessons Learned
- I learned how to import [**Angular Material Paginator**](https://material.angular.dev/components/paginator/overview) and `PageEvent` into the Projects component.

```ts id="d11nbh"
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
```

I then added `MatPaginatorModule` to the standalone component's `imports` array:

```ts id="0zj72m"
@Component({
  selector: 'app-projects',
  imports: [
    ProjectCard,
    TranslatePipe,
    MatPaginatorModule,
    SectionTitle
  ],
  templateUrl: './projects.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './projects.scss'
})
export class Projects {}
```

`MatPaginatorModule` makes the `<mat-paginator>` component available in the template, while `PageEvent` provides the event type used when the active page changes.

- I learned that the component needs to maintain its own **pagination state**.

```ts id="jky9f4"
public pageIndex = 0;
public pageSize = 3;
```

`pageIndex` represents the currently selected page. Angular Material uses a **zero-based page index**, meaning that the first page has an index of `0`.

`pageSize` determines how many projects are displayed on each page. In my implementation, the Projects page displays **three projects at a time**.

- I learned how to use `slice()` to calculate which projects belong to the currently selected page.

```ts id="78suw5"
public getPaginatedProjects(): Project[] {
  const startIndex = this.pageIndex * this.pageSize;
  const endIndex = startIndex + this.pageSize;

  return this.getProjectsList().slice(startIndex, endIndex);
}
```

For a page size of `3`, the indexes work as follows:

| Page   | `pageIndex` | `startIndex` | `endIndex` |
| ------ | ----------: | -----------: | ---------: |
| Page 1 |           0 |            0 |          3 |
| Page 2 |           1 |            3 |          6 |
| Page 3 |           2 |            6 |          9 |

For example, when `pageIndex` is `1` and `pageSize` is `3`:

```ts id="bn92z5"
startIndex = 1 * 3; // 3
endIndex = 3 + 3;   // 6
```

The displayed projects are therefore:

```ts id="ugsgpa"
projects.slice(3, 6)
```

This helped me understand that `<mat-paginator>` does **not automatically slice a regular array**. It provides the pagination controls, while the component determines which projects should actually be rendered.

- I learned how to respond to page changes using `PageEvent`.

```ts id="skgpn6"
public onPageChange(event: PageEvent): void {
  this.pageIndex = event.pageIndex;
  this.pageSize = event.pageSize;
}
```

When the user changes pages, Angular Material emits a `PageEvent`. The component updates `pageIndex` and `pageSize`, allowing `getPaginatedProjects()` to calculate the projects for the newly selected page.

The pagination flow can be represented as:

```text id="7p8gu8"
User selects a page
        ↓
<mat-paginator>
        ↓
PageEvent
        ↓
onPageChange()
        ↓
pageIndex / pageSize
        ↓
getPaginatedProjects()
        ↓
Displayed projects
```

- I learned how to configure the Angular Material Paginator in the Projects template.

```html id="9j3eqc"
<mat-paginator
  [length]="getProjectsList().length"
  [pageIndex]="pageIndex"
  [pageSize]="pageSize"
  [pageSizeOptions]="[3]"
  [hidePageSize]="true"
  (page)="onPageChange($event)"
  showFirstLastButtons
  aria-label="Select project page"
  class="paginator-control">
</mat-paginator>
```

The main paginator properties are:

* `[length]` — total number of projects.
* `[pageIndex]` — currently selected page.
* `[pageSize]` — number of projects displayed per page.
* `[pageSizeOptions]` — available page-size options.
* `[hidePageSize]` — hides the page-size selector.
* `(page)` — emits a `PageEvent` when pagination changes.
* `showFirstLastButtons` — provides first and last page navigation.
* `aria-label` — provides an accessible description for the paginator.

Because the Projects page always displays three projects at a time, I used:

```html id="iz4aqa"
[pageSizeOptions]="[3]"
[hidePageSize]="true"
```

This keeps the page size fixed while removing the unnecessary page-size selector.

- I learned that the Projects template must iterate over the **paginated list** rather than the complete project list.

```html id="pjibhu"
@for (project of getPaginatedProjects(); track project.getId()) {
  <app-project-card
    [project]="project"
    [reverseLayout]="$odd">
  </app-project-card>
}
```

Using `getPaginatedProjects()` ensures that only the projects belonging to the active page are rendered.

* I learned how to customize Angular Material Paginator using the [**Material Sass API and Material system color tokens**](https://material.angular.dev/guide/theming-your-components).

```scss id="uz8nxk"
@use '@angular/material' as mat;

.paginator-control {
    position: sticky;
    top: 1rem;
    z-index: 10;

    @include mat.paginator-overrides((
        container-background-color: var(--mat-sys-surface-container-high),
        container-text-color: var(--mat-sys-on-surface),
        enabled-icon-color: var(--mat-sys-on-surface),
    ));

    border-radius: 12px;

    /* Drop Shadow/md */
    box-shadow:
        0 4px 3px 0 rgba(0, 0, 0, 0.07),
        0 2px 2px 0 rgba(0, 0, 0, 0.06);
}
```

This reinforced the importance of using [**Angular Material theme tokens and component overrides**](https://material.angular.dev/guide/theming-your-components) instead of directly modifying Angular Material's internal CSS classes.

- I learned how to make the paginator [**sticky**](https://www.w3schools.com/css/css_positioning_sticky.asp) while scrolling.

```scss id="dmjshd"
position: sticky;
top: 1rem;
z-index: 10;
```

This keeps the paginator visible near the top of the viewport while scrolling through the project cards.

* I learned how all the pagination logic fits together inside the Projects component.

```ts id="06jyn4"
export class Projects {

  public pageIndex = 0;

  public pageSize = 3;

  constructor(private projectsService: ProjectsService) {}

  public getProjectsList(): Project[] {
    return this.projectsService.getProjects();
  }

  public getPaginatedProjects(): Project[] {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;

    return this.getProjectsList().slice(startIndex, endIndex);
  }

  public onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }

}
```

This helped me understand the separation between the **full project collection**, which comes from `ProjectsService`, and the **pagination state**, which belongs to the component displaying the projects.

- I learned that when working with a design system such as [**Angular Material**](https://material.angular.dev/), the Figma design sometimes needs to be adjusted to reflect the components actually provided by the framework.

Since I could not find an existing Figma component that accurately represented Angular Material Paginator, I recreated the paginator in Figma based on the real Angular component.

This reinforced an important part of my Figma-to-code workflow:

```text id="dd2vr7"
Figma Design
     ↓
Angular Implementation
     ↓
Compare Design vs. Implementation
     ↓
Identify Framework Constraints
     ↓
Update Figma When Necessary
     ↓
Keep Design and Implementation Synchronized
```

- I learned how creating **reusable shared components** can reduce duplicated UI code and maintain visual consistency throughout the application. This led me to create the **Section Title component**, which can be reused by different pages instead of recreating the same section-heading design each time.

- I also learned that in [**Figma**](https://www.figma.com/best-practices/components-styles-and-shared-libraries/), it is a good practice to organize reusable components on their own dedicated page instead of mixing them with the application screens. This keeps the design file more organized, makes components easier to find and maintain, and provides a central place for managing components that are reused across multiple pages.

This creates a similar separation between the Figma design and the Angular application:

```text id="14hsvq"
Figma
Components Page
      ↓
Reusable Components
      ↓
Application Screens

Angular
Shared UI Components
      ↓
Reusable Components
      ↓
Application Pages
```

This helped me understand that reusable components should be organized consistently in both **Figma and Angular**, making it easier to maintain synchronization between the design and the implementation.

- I gained more experience translating a complete **Figma page into Angular code** and validating the implementation against the original design.

The workflow involved moving between Figma and the implementation rather than treating them as completely separate stages:

```text id="dk2hfe"
Figma
  ↓
Angular HTML
  ↓
Angular Material / Shared Components
  ↓
Bootstrap Grid / Responsive Layout
  ↓
SCSS
  ↓
Visual Comparison
  ↓
Adjust Figma or Code
```

This helped me maintain the intended design while ensuring that the Projects page remained responsive and compatible with the application's existing Angular Material and Bootstrap structure.

- Overall, I learned how to **combine Angular Material Paginator, reusable Angular components, Material theming, responsive layouts, and Figma** to complete the Projects page while keeping the implementation maintainable and consistent with the application's design system.

## Next Steps
- Work on the **Project Detail page** and translate the finalized Figma design into Angular code.
- Add actual project data to the **Projects** and **Project Detail** pages, then work on the **Language subsystem** to provide translations for the project information.
- Monitor progress on [GitHub Issue #31392](https://github.com/angular/components/issues/31392#event-18258603669) and contribute if possible.
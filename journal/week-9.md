# Week 9 Progress Journal

## Overview  
This week, I implemented the theme subsystem with multiple themes. I also worked on aligning the Figma design with actual Angular Material components, allowing the Figma design to receive feedback grounded in real framework behavior.

## Completed Tasks  
- I implemented the theme switching logic, focusing on dynamic class manipulation at the root level of the DOM.   
- I reviewed and compared the Figma design with real Angular Material components to ensure accurate alignment and provided feedback based on implementation constraints.
- I also made some transformations and refactorings to the language and theme subsubsystems to support a cleaner and more maintainable model.

## Challenges  
- One of the main challenges I faced was using [Renderer2](https://angular.dev/api/core/Renderer2) inside a service. Since it’s primarily intended for use within components or directives, I encountered injector limitations that made it difficult to manage DOM state from a service. This led me to explore native alternatives using the `DOCUMENT` token. 
- Another challenge I addressed was reviewing and comparing the Figma design with real Angular Material components to ensure accurate alignment. In some cases, I had to provide feedback based on implementation constraints where the Figma design did not fully match the available component features.
Additionally, I clarified that the style and customization of the `language-switcher` and `theme-switcher` components—such as through the [`--mat-sys-`](https://material.angular.dev/guide/system-variables) system variables defined in the Figma design—are the responsibility of the parent component where they are used. These switchers focus purely on functionality and, for now, only include a default style.

## Lessons Learned  
- I learned that the [`DOCUMENT`](https://angular.dev/api/common/DOCUMENT) token provides direct access to the root DOM and works well with native methods like [`classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) for toggling themes in services.  
  - I used [`classList.add()`](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/add) and [`classList.remove()`](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove) to control theme-related classes directly on the `body` element, based on the [Document.body](https://developer.mozilla.org/en-US/docs/Web/API/Document/body) API.  
- I explored the [Angular Material theming system](https://material.angular.dev/guide/theming) and studied the available [high contrast override mixins](https://github.com/angular/components/blob/main/src/material/schematics/ng-generate/theme-color/README.md#high-contrast-override-mixins), which will be useful when I extend support for accessibility themes.  
- I used [Chrome DevTools rendering emulation](https://developer.chrome.com/docs/devtools/rendering/emulate-css) to test forced color modes and high contrast settings, which helped validate my theme switching logic.  
- I reviewed Angular Material components like [Toolbar](https://material.angular.dev/components/toolbar/overview) and [Grid List](https://material.angular.dev/components/grid-list/overview) to match Figma elements to real components and guide design alignment decisions.

## Next Steps  
- I will start development on the **Resume subsystem**.
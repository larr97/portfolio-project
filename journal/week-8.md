# Week 8 Progress Journal

## Overview

This week, I focused on implementing multi-language support in my Angular application using the `ngx-translate` library. My goal was to build a scalable and maintainable translation system with persistent language preferences and full compatibility with server-side rendering (SSR). With this work completed, I finalized the core Language Subsystem.

## Completed Tasks

- Installed and configured `ngx-translate` and `http-loader`.
- Created `en.json` and `es.json` translation files.
- Added translation support using `TranslateService`.
- Implemented `localStorage` language persistence with SSR-safe checks.
- Created a `Language` model to represent languages as domain objects.
- Built a `LanguageService` to encapsulate translation logic.
- Created a reusable standalone `LanguageSwitcher` component using Angular Material.
- Integrated language switching into the root app layout.

## Challenges

- Refreshing core Angular concepts such as **dependency injection** and the new **standalone API patterns** to better understand component and service architecture, while following best practices outlined in the Angular coding style guide.
  - [Dependency Injection Essentials](https://angular.dev/essentials/dependency-injection)
  - [In-depth Guide to Dependency Injection](https://angular.dev/guide/di)
  - [Components Essentials](https://angular.dev/essentials/components)
  - [In-depth Guide to Components](https://angular.dev/guide/components)
  - [Angular Coding Style Guide](https://angular.dev/style-guide)
- Translating all the concepts from the RAD, SDD, and ODD documents into actual source code was challenging, especially when trying to maintain consistency across layers. As I progressed, I also had to revise some models—primarily the class diagram—to better align with the implementation.

## Lessons Learned

- [`ngx-translate`](https://ngx-translate.org/) is a powerful and flexible library for adding internationalization (i18n) to Angular applications. It supports dynamic language switching, structured JSON translations, and integration with Angular’s standalone API.
- [Installation guide](https://ngx-translate.org/getting-started/installation/)
  ```bash
  npm install @ngx-translate/core @ngx-translate/http-loader
  ```
- I used a nested translation structure (`en.json`):
  ```json
  {
    "app": {
      "title": "Luis's Portfolio",
      "hello": "Hi there!"
    }
  }
  ```
- To provide a seamless and personalized experience, the selected language is saved in [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) so users don't need to reselect their language on future visits.
- Always ensure your code is running in the browser before accessing `localStorage`, especially in applications that support server-side rendering (SSR). Attempting to use browser-specific APIs like `localStorage` during SSR can lead to runtime errors. For best practices, refer to Angular’s guide on [authoring server-compatible components](https://angular.dev/guide/ssr#authoring-server-compatible-components).
  ```ts
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedLang = localStorage.getItem('lang');
  }

  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem('lang', lang);
  }
  ```
- As the app grows, it's important to encapsulate all language logic in a centralized service. This ensures reusability and separation of concerns across components. To build a clean, scalable system, I applied a domain-driven design approach:
  - **Entity**: `Language` model representing each language
  - **Control**: `LanguageService` handling logic and state
  - **Boundary**: `LanguageSwitcher` standalone component using Angular Material
- I incorporated Google Fonts icons using Angular Material’s Icon component:
  - [Angular Material Icon Component](https://material.angular.dev/components/icon/overview)
  - [Google Fonts Icons](https://fonts.google.com/icons)
- I learned how to use [`ngx-translate` in code](https://ngx-translate.org/getting-started/translating-your-components/#using-translations-in-code) to dynamically apply localized titles using `TranslateService` and Angular's [`Title`](https://angular.dev/api/platform-browser/Title) service.


## Next Steps
- Integrate the `LanguageSwitcher` component into a shared header layout for better accessibility across the app.
- Begin development on the Theme subsystem to manage application appearance.
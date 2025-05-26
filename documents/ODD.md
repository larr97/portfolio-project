## Object Design Document for Software Engineer Portfolio

### 1. Introduction

#### 1.1 Object design trade-offs

- **Framework Choice (Build vs. Buy):** The project uses Angular, a well-established framework, rather than building a custom frontend from scratch. This choice leverages existing tools and community support to accelerate development, at the cost of learning curve and some framework-imposed constraints.
- **Application Architecture (SPA vs. Multi-Page):** The portfolio is implemented as a Single-Page Application (SPA), which loads a single HTML page and dynamically updates the UI as the user interacts. This enhances user experience with faster navigation and smoother transitions without full page reloads.  
- **Rendering Strategy (Client-side vs. Server-side):** The portfolio uses client-side rendering to simplify deployment and hosting on static servers. This improves scalability and reduces server costs but increases the initial page load time and relies on the client device's processing power.
- **Hosting Approach (Static vs. Dynamic):** By opting for static hosting, the project prioritizes security, ease of maintenance, and performance. However, this limits the ability to implement dynamic server-side logic or personalized backend services.
- **Persistence Mechanism (In-browser Storage vs. Backend Storage):** User preferences (e.g., theme, language) are stored locally using browser storage. This approach offers fast access and reduces server dependencies but limits cross-device synchronization and persistence reliability.
- **UI Design (Component-based Reusability vs. Custom Styling):** Using Angular Material and Tailwind CSS supports rapid UI development and ensures consistency, balancing between customization flexibility and development efficiency.

#### 1.2 Interface documentation guidelines

- **Component Naming:** Angular components are named using PascalCase (e.g., `ProjectListComponent`) following the Angular Style Guide for consistency and readability.
- **Methods:** Functions and methods are named with verb phrases that clearly indicate the action performed (e.g., `loadProjects()`, `toggleTheme()`), improving code clarity.
- **Properties:** Variables and properties use camelCase notation (e.g., `isDarkMode`, `currentLanguage`), adhering to TypeScript and JavaScript conventions.
- **Events:** Event emitters use the `on` prefix (e.g., `onLanguageChange`) to clearly indicate event handling points.
- **Error Handling:** Angular’s `HttpInterceptor` is employed to centralize HTTP error handling, ensuring consistent and maintainable error management across the application.
- **Comments:** TypeScript JSDoc-style comments document classes, methods, and interfaces. This facilitates automatic documentation generation with tools like Compodoc and improves maintainability.

#### 1.3 Definitions, acronyms, and abbreviations

- **HTML:** HyperText Markup Language 
- **CSS:** Cascading Style Sheets  
- **SPA:** Single-Page Application  
- **RAD:** Requirements Analysis Document 
- **SDD:** System Design Document  
- **ODD:** Object Design Document  
 
#### 1.4 References

- Web development frameworks and libraries documentation:
  - [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) — Comprehensive documentation on HTML elements and best practices.
  - [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) — Detailed CSS reference and guides on styling web pages.
  - [Angular](https://angular.dev/overview) — Official Angular framework overview and documentation.
  - [Angular Material](https://material.angular.io/) — Documentation for Angular’s Material Design component library.
  - [Tailwind CSS](https://tailwindcss.com/docs/installation) — Utility-first CSS framework guide for rapid UI development.
  - [TypeScript](https://www.typescriptlang.org/docs) — Language documentation covering TypeScript syntax and features.
  - [Compodoc](https://compodoc.app/) — Documentation tool for Angular applications generating static documentation from code comments.
- Project documents and design prototypes:  
  - [Web Design Figma Prototype](https://www.figma.com/proto/BckiGF230fNRprznGKNyZi/Website?node-id=21-101&t=z6c1uPhNA7Ls2fbo-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=21%3A101&show-proto-sidebar=1) — Interactive UI/UX prototype showcasing the intended look and behavior of the portfolio website.
  - [Requirements Analysis Document (RAD)](https://github.com/larr97/portfolio-project/blob/main/documents/RAD.md) — Contains the nonfunctional requirements, functional requirements, analysis object model, and dynamic model used to guide system design.
  - [System Design Document (SDD)](https://github.com/larr97/portfolio-project/blob/main/documents/SDD.md) — Contains architectural design, subsystem decomposition, and service descriptions for the portfolio project.
- Academic References:
  - Bruegge, B., & Dutoit, A. H. (2009). [*Object-oriented software engineering: Using UML, patterns, and Java™*](https://www.pearson.com/en-us/subject-catalog/p/object-oriented-software-engineering-using-uml-patterns-and-java/P200000003319/9780136061250) (3rd ed.). Prentice Hall. — Served as the primary reference for software engineering methodology, UML modeling, and design process throughout the project.

### 2. Packages

This section outlines the decomposition of the application into packages and their corresponding roles within the codebase. Each package aligns with a functional subsystem or shared utility in the Angular project. The structure follows Angular’s recommended modular organization to improve scalability and maintainability.

- **core:** Provides application-wide services and logic, organized into functional subsystems:
  - **resume:** Handles resume display logic and download functionality.
  - **theme:** Manages light/dark mode switching and persistence.
  - **language:** Manages internationalization and language switching.
  - **core.module.ts:** Aggregates the above core services into a reusable module.

- **shared:** Contains reusable UI components and styling shared across multiple features:
  - **header, footer:** Layout components used throughout the application.
  - **buttons:** Reusable interactive elements including:
    - **theme-toggle**
    - **language-switcher**
    - **download-resume**
  - **shared.module.ts:** Exports all shared UI elements for easy import into feature modules.

- **pages:** Contains routed feature modules representing distinct sections of the application:
  - **home:**
    - `home.component.ts`: The main landing view of the site.
    - `home.component.html`: Template for the home view layout.
    - `home.component.css`: Styles for the home page.
    - `education.model.ts`: Type definition for education items.
    - `certification.model.ts`: Type definition for certifications.
    - `job.model.ts`: Type definition for professional experience.
    - `home.module.ts`: Declares and exports the Home feature module.
  - **project:** 
    - `project.component.ts`: Displays the project list.
    - `project-detail.component.ts`: Displays detail for a specific project.
    - `project.model.ts`: Type definition for a project entity.
    - `projects.service.ts`: Handles project data retrieval.
  - **blog:** 
    - `blog.component.ts`: Blog list and summaries.
    - `blog-post.component.ts`: Displays full blog post content.
    - `blog-post.model.ts`: Type definition for blog entries.
    - `blog.service.ts`: Fetches blog post data.
  - **docs:**
    - `docs.component.ts`: Documentation index or content view.
    - `document.model.ts`: Type definition for documentation entries.
  - **pages.module.ts:** Aggregates all routed page modules into one importable module.

- **routing:** Defined in `app-routing.module.ts`, centralizes application route configuration, enabling navigation within the Single-Page Application (SPA) context.

- **assets:** Stores static resources including downloadable resumes and translation files used for i18n:
  - **resume:** PDF files in English and Spanish.
  - **i18n:** Translation key-value pairs (`en.json`, `es.json`).

- **root (`app.component.ts`, `app.module.ts`):** Bootstraps the application. `app.component.html` serves as the main layout, embedding routing and global components like the header and footer.

### 3. Class Interfaces

This section outlines the public interfaces of the classes and services used in the application. Each class exposes operations, attributes, and interactions with other classes or packages. Interface details include method signatures, input/output parameters, return values, and exceptions.

Given the modular nature of the application and the frequency of interface revisions, detailed specifications are automatically generated and maintained using [Compodoc](https://compodoc.app/). This ensures synchronization between the design documentation and the source code.

For complete interface specifications, refer to the [Interface Documentation](./compodoc/index.html).

These generated pages include:
- Class and interface descriptions
- Method and property declarations
- Module relationships
- Component hierarchies
- Cross-references between related services and components

> **Note:** All relevant classes and methods are documented in the code using JSDoc-style TypeScript comments. These are updated regularly to reflect design evolution.

### 4. Glossary

#### A  
- **Angular**: A TypeScript-based web application framework used to develop the front end of the portfolio as a modular single-page application (SPA).  
- **App Module**: The root module in the Angular application, responsible for bootstrapping the main components and importing feature modules.  
- **Asset Folder**: A directory used to store static files such as images, PDFs, and localization files.

#### B  
- **Blog Subsystem**: A routed page module that presents blog entries or reflections authored by the developer.  

#### C  
- **Component**: A self-contained building block in Angular consisting of a TypeScript class, HTML template, and SCSS/CSS styles.  
- **Core Module**: A shared service layer that provides singleton logic for resume download, theme control, and language switching.  
- **CSS (Cascading Style Sheets)**: A styling language used to define the look and layout of HTML components.

#### D  
- **Docs Subsystem**: A routed page module that provides structured documentation or technical guides related to the portfolio.  
- **Download Resume Service**: A core service that manages the download functionality of resume files in different languages.

#### F  
- **Footer Component**: A shared UI element at the bottom of every page that provides additional navigation or branding information.

#### H  
- **Header Component**: A shared top-level UI element containing the main navigation and global actions (e.g., theme and language toggles).  
- **Home Subsystem**: The landing page of the application, showcasing an overview of the portfolio owner.  

#### HTML  
- **HTML (HyperText Markup Language)**: The standard language used to structure content for display in web browsers.  

#### I  
- **Internationalization (i18n)**: A system feature that enables support for multiple languages by dynamically switching translation files.  

#### J  
- **JavaScript**: A high-level scripting language that powers dynamic behavior in web applications; used indirectly via TypeScript.

#### L  
- **Language Subsystem**: A service module that allows users to switch the application's language via UI controls and `localStorage`.  
- **localStorage**: A browser-based key-value store used to persist user settings like theme and language preferences.

#### M  
- **Material Design**: A visual design standard by Google emphasizing usability and clarity, used as inspiration for UI styling.  
- **Module**: A container in Angular that groups related components, services, and routing logic for encapsulation and reusability.

#### P  
- **Pages Module**: A feature module that organizes all routed pages of the application such as Home, Blog, Projects, and Docs.  
- **Portfolio**: A personal website built to showcase a developer’s work, achievements, and contact information.  
- **Projects Subsystem**: A routed page module that displays a list of personal or academic projects, including descriptions and metadata.

#### R  
- **Resume Subsystem**: A functional module in the core services responsible for accessing and downloading resume files.  
- **Routing Subsystem**: A configuration in Angular that maps URL paths to components, enabling navigation without full page reloads.

#### S  
- **SCSS (Sassy CSS)**: A CSS preprocessor syntax used in Angular components to define style rules with variables, nesting, and mixins.  
- **Shared Module**: A module exporting UI components and layout elements reused throughout the application.  
- **Single-Page Application (SPA)**: A web application model where navigation occurs within a single HTML document, improving performance and user experience.  

#### T  
- **Tailwind CSS**: A utility-first CSS framework used for quickly styling components using predefined class names.  
- **Theme Subsystem**: A core service that manages the light/dark mode feature of the application interface.  
- **TypeScript**: A statically typed superset of JavaScript used throughout the application for writing safer and more maintainable code.

#### U  
- **UI (User Interface)**: The visual layer of the application through which users interact with the system.  
- **Usability**: The degree to which the application is intuitive, efficient, and satisfying for the user to operate.

#### W  
- **WCAG (Web Content Accessibility Guidelines)**: A set of international standards for ensuring digital content is accessible to people with disabilities.  
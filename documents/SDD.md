## System Design Document (SDD) for Software Engineer Portfolio
Version: 2.2  
Date: 2025-07-10  
Author: Luis Rodriguez

### 1. Introduction

#### 1.1 Purpose of the System

The purpose of the system is to provide a personal portfolio website for a software engineer to showcase their skills, experience, and projects to potential employers, peers, and collaborators. The portfolio includes sections such as the Home Page, Projects, Blog, and Docs. It also supports features like theme switching and language selection for a seamless user experience.

#### 1.2 Design Goals

**Performance Criteria**
1. **Response Time**: Pages must load within 3 seconds over standard broadband.
2. **Throughput**: Efficient asset optimization to ensure multiple media-heavy pages can be browsed seamlessly.
3. **Memory Usage**: Optimized images and resources to minimize bandwidth and memory usage for better responsiveness.

**Dependability Criteria**
1. **Availability**: Maintain 99% uptime or higher on a monthly basis.
2. **Robustness**: Implement error handling to prevent broken links or malfunctioning features.
3. **Security**: Ensure secure access to downloadable assets and SSL compliance for safe user interaction.

**Cost Criteria**
1. **Development Cost**: Keep costs low by using open-source and widely supported technologies (Angular).
2. **Deployment Cost**: Host the portfolio on an affordable, reliable platform (e.g., Namecheap) with backup and SSL support.
3. **Maintenance Cost**: Modular and static site design minimizes ongoing maintenance and update costs.

**Maintenance Criteria**
1. **Extensibility**: Design modular components for easy content and feature updates.
2. **Portability**: Ensure compatibility across major browsers (Chrome, Firefox, Safari, Edge) and device types.
3. **Traceability of Requirements**: Maintain a clean repository with version control (Git) to link changes back to specific requirements.

**End User Criteria**
1. **Usability**: Follow Material Design principles and ensure intuitive navigation even for non-technical users.
2. **Utility**: Fully responsive design across devices (desktop, tablet, mobile) for consistent user experience.
3. **Accessibility**: Adhere to WCAG 2.1 AA standards for inclusive access (screen readers, high-contrast mode, keyboard navigation).

#### 1.3 Definitions, Acronyms, and Abbreviations

- **Portfolio**: A personal website designed to present a software engineer’s skills, experience, education, certifications, and projects.
- **UI/UX**: User Interface and User Experience; principles ensuring the design is both visually appealing and easy to navigate.
- **WCAG**: Web Content Accessibility Guidelines; a set of standards to ensure web accessibility for users with disabilities.
- **SEO**: Search Engine Optimization; techniques used to improve the visibility of the website on search engines like Google.
- **PDF**: Portable Document Format; file format used to store and share the downloadable resume.
- **HTML**: HyperText Markup Language; the standard language for creating web pages.
- **CSS**: Cascading Style Sheets; a style sheet language used for describing the look and formatting of a document written in HTML.
- **JavaScript**: A programming language used to create dynamic and interactive effects within web browsers.
- **TypeScript**: A strongly typed programming language that builds on JavaScript, often used with Angular applications.
- **Angular**: A popular web application framework for building front-end applications.

#### 1.4 References

- Project documents and design prototypes:  
  - [Requirements Analysis Document (RAD)](https://github.com/larr97/portfolio-project/blob/main/documents/RAD.md) — Contains the nonfunctional requirements, functional requirements, analysis object model, and dynamic model used to guide system design.
  - [Web Design Figma Prototype](https://www.figma.com/proto/BckiGF230fNRprznGKNyZi/Website?node-id=21-101&t=z6c1uPhNA7Ls2fbo-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=21%3A101&show-proto-sidebar=1) — Interactive UI/UX prototype showcasing the intended look and behavior of the portfolio website.
- Academic References:
  - Bruegge, B., & Dutoit, A. H. (2009). [*Object-oriented software engineering: Using UML, patterns, and Java™*](https://www.pearson.com/en-us/subject-catalog/p/object-oriented-software-engineering-using-uml-patterns-and-java/P200000003319/9780136061250) (3rd ed.). Prentice Hall. — Served as the primary reference for software engineering methodology, UML modeling, and design process throughout the project.

#### 1.5 Overview

This document presents the software architecture and design goals for the personal portfolio website. The primary objective is to create an intuitive, visually appealing, and fully functional platform that showcases the skills, experience, and projects of a software engineer. 
The architecture design follows modern web development principles, incorporating technologies such as HTML, CSS, JavaScript, TypeScript, Angular, and Angular Material. The portfolio website is designed with the user in mind, ensuring an accessible and responsive experience across devices and screen sizes.

### 2. Current System

Currently, there is no existing portfolio system in place for the Software Engineer. This absence creates a gap in effectively showcasing technical skills, completed projects, and professional achievements to potential employers, collaborators, and peers. Without a centralized online platform, opportunities for networking, personal branding, and career development are significantly limited.

The lack of a portfolio means:

- The software engineer is unable to demonstrate technical expertise and creative problem-solving effectively.
- There is no consolidated evidence of completed projects, showcasing professional growth.
- The software engineer's visibility in the competitive job market is diminished.
- There is no online presence to reflect career aspirations and personal brand.

The development of this portfolio system will address these challenges by providing a polished, accessible, and organized platform to display achievements, skills, and career-related content. This system will enhance professional visibility, facilitate networking, and serve as a cornerstone for future career opportunities.

### 3. Proposed software architecture

#### 3.1 Overview

This portfolio website is a static, client-side web application designed to showcase professional information, software projects, technical writing, and downloadable resources. Its purpose is to provide visitors with a clear, well-organized view of the author's skills and background through an interactive and responsive interface.

The system is modular, built from distinct subsystems that manage specific responsibilities, such as rendering user interface pages, handling theme and language preferences, enabling navigation, and offering downloadable content. These components are composed and coordinated through a client-side control flow, ensuring responsiveness and maintainability.

Designed for deployment on a static hosting platform, the architecture avoids backend logic, focusing instead on efficient delivery of prebuilt assets and user-driven behavior. This simplicity reduces security risks, improves performance, and enables easy updates.

In addition to the core functional requirements, boundary conditions such as configuration, start-up and shutdown behavior, and exception handling are key to maintaining the system’s robustness. The portfolio must handle various edge cases, such as network failures, browser incompatibilities, and storage issues, ensuring that it remains resilient and reliable under diverse circumstances.

#### 3.2 Subsystem decomposition

The system is structured into distinct subsystems. The core of the application is the User Interface Subsystem, which is composed of four functional subsystems: Home, Projects, Blog, and Docs. These handle specific user-facing features. Additionally, the UI contains a Shared UI Subsystem, which holds commonly used components such as the Header and Footer, promoting reuse and consistency across pages.

Outside the UI, there are four independent top-level subsystems: Resume, Theme, Language, and Routing. These are not part of the UI because they provide services that span multiple areas of the application. The Theme and Language subsystems, for example, manage global settings, while Resume handles downloadable content and Routing controls navigation. This separation of concerns makes the architecture more modular, scalable, and easier to maintain.

![Diagram](SubsystemDescomposition.svg)

- **User Interface Subsystem**
    - **Home Subsystem**
    - **Projects Subsystem**
    - **Blog Subsystem**
    - **Docs Subsystem**
    - **Shared UI Subsystem**
        - **Header Subsystem**
         - **Footer Subsystem**
- **Resume Subsystem**
- **Theme Subsystem**
- **Language Subsystem**
- **Routing Subsystem**

| **Subsystem**            | **Description** |
|--------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| **User Interface Subsystem** | The UserInterfaceSubsystem is the main entry point of the application, composed of several feature-specific subsystems including Home, Projects, Blog, and Docs. It is responsible for rendering the user-facing parts of the software. |
| **Home Subsystem**           | The HomeSubsystem is responsible for displaying the landing page of the portfolio, welcoming users and introducing the site. |
| **Projects Subsystem**       | The ProjectsSubsystem showcases various software engineering projects, including details, technologies used, and links to source code or demos. |
| **Blog Subsystem**           | The BlogSubsystem is responsible for presenting blog entries authored by the user, including technical posts, career reflections, and tutorials. |
| **Docs Subsystem**           | The DocsSubsystem is responsible for providing structured documentation, such as API references, usage guides, or design documents. |
| **Shared UI Subsystem**      | The SharedUISubsystem provides reusable UI components such as layout containers, buttons, and icons that are shared across all UI subsystems. |
| **Header Subsystem**         | The HeaderSubsystem is responsible for rendering the top navigation bar, including branding, navigation links, and global controls. |
| **Footer Subsystem**         | The FooterSubsystem handles the display of site-wide footer content including contact info, links, and copyright. |
| **Resume Subsystem**         | The ResumeSubsystem is responsible for hosting and allowing users to download the user’s professional resume in various formats. |
| **Theme Subsystem**          | The ThemeSubsystem manages the visual theme of the application, such as light and dark mode toggling. |
| **Language Subsystem**       | The LanguageSubsystem handles internationalization by allowing users to switch between supported languages. |
| **Routing Subsystem**        | The RoutingSubsystem is responsible for handling page navigation and URL routing throughout the application, enabling users to move between subsystems seamlessly. |
|                             |               |

#### 3.3 Hardware/software mapping

![Diagram](DeploymentDiagram.svg)

The system follows a classic **client-server architecture** designed for web-based applications. It separates concerns between a **client node**, which handles user interaction and dynamic behavior, and a **server node**, which serves static resources needed by the client.

![Diagram](DeploymentDiagram2.svg)

The **client node** is any user device running a web browser. All application logic is executed here, including rendering views, managing navigation, handling user preferences, and triggering content downloads. The following subsystems are allocated to the client:

- The **User Interface Subsystem**, including individual page subsystems (Home, Projects, Blog, Docs) and shared components like the Header and Footer.
- The **Routing Subsystem**, responsible for determining which view to render based on user navigation.
- The **Theme Subsystem**, which manages the visual mode (e.g., light/dark).
- The **Language Subsystem**, enabling dynamic content translation.
- The **Resume Subsystem**, which handles interactions for downloading resume files.

The **server node** is responsible for hosting and delivering static files such as HTML, JavaScript, stylesheets, media, translation data, and resume documents. It does not execute application logic—its role is purely to respond to HTTP requests with appropriate resources.

**For deployment**, the application will be hosted on **Namecheap’s shared hosting platform**, which serves as the server node. It stores and delivers all necessary static assets but does not run dynamic server-side code. 

#### 3.4 Persistent Data Management

The system does not require a backend database or server-side persistent storage. All data is static and either embedded within the application or retrieved from client-accessible resources. Project listings, blog content, and other page data are either hardcoded into the application or stored in static JSON files.

Any temporary state, such as theme preference or selected language, is stored locally on the **client side** using browser mechanisms like `localStorage`. This ensures user preferences persist across sessions without requiring user accounts or server-side infrastructure.

#### 3.5 Access Control and Security

This portfolio site is fully public and does **not require authentication** or role-based access control. All users have the same level of access to all content.

From a security standpoint, basic precautions are taken to protect users and content, including:

- Serving all files over **HTTPS** to ensure secure communication.
- Avoiding any execution of dynamic or untrusted scripts.
- Minimizing attack surface by keeping the site static and avoiding any backend processing.
- Storing only non-sensitive information in local storage.

Since no personal data is collected or processed, and no forms or authentication mechanisms are used, the security concerns are minimal.

#### 3.6 Global software control

The global control flow of the portfolio website is based on an **event-driven model**. Given that the application is hosted in a browser and operates entirely on the client side, user interactions (such as clicking buttons or navigating through links) are captured as events and processed accordingly.

Each interaction triggers a specific response—such as navigating to a different page (route), toggling the theme, downloading a resume, or switching the language. The control flow is thus driven by the user's actions and handled by event listeners and the routing mechanism provided by the platform.

There is no need for procedure-driven control or multi-threaded logic, as the system does not require complex asynchronous operations or persistent background tasks. The simplicity of the site and its reliance on user interaction for all navigation and behavior make the event-driven model both effective and maintainable.

Control objects, in this case, are minimal and mostly implicit—realized through event handlers attached to UI components and route definitions that respond to navigation actions.

> _Note: Since the site is expected to be hosted on Namecheap (using static hosting), the entire event loop and control logic reside on the client-side in the browser, with no server-side execution required. This choice also reinforces the suitability of event-driven control._

#### 3.7 Boundary conditions

This system requires consideration of key boundary conditions such as configuration, start-up and shutdown behavior, and exception handling. Addressing these aspects helps ensure the application remains resilient, maintainable, and reliable across various usage scenarios.

**Configuration Use Cases**

There are no server-side services or databases that require initialization or configuration at runtime. All application content (projects, blog posts, documents) is embedded as static files or JSON data. However, the following configuration-related decisions apply:

| Configuration Use Case     | Description                                                                                     |
|----------------------------|-------------------------------------------------------------------------------------------------|
| PreSeploymentSetup        | Developers configure site settings, language files, and content (e.g., projects, blogs) before deployment. This involves organizing static files and defining the structure used by the application. |
| AssetUpdateAndDeployment   | Changes to content, assets, or structure require a manual rebuild and re-upload to the hosting provider. |
|                            |                                                                                                 |

These actions are not user-facing but can be considered part of developer administration.

**Start-Up and Shutdown Use Cases**

There are no active startup or shutdown processes at runtime. The portfolio initializes automatically when accessed via a web browser:

| Start-Up/Shutdown Use Case | Description                                                                                                            |
|----------------------------|------------------------------------------------------------------------------------------------------------------------|
| StartClientApp             | Triggered when a user navigates to the site URL. The browser downloads and runs the application, initializing subsystems like routing and theming.  |
| ShutdownClientApp          | Occurs when the browser tab is closed or reloaded. No state is saved except for preferences (e.g., theme, language) stored in `localStorage`.       |
|                            |                                                                                                                        |

**Exception Use Cases**

Although the system avoids most failure scenarios typical of dynamic systems, several exceptions are still possible and must be accounted for:

| Exception Use Case        | Description                                                                                                                                                               |
|---------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| NetworkFailure            | If a user loses internet connectivity while accessing the site, previously loaded pages may still function (due to browser caching), but dynamic content such as resume downloads or JSON-based sections (e.g., blog entries) may fail to load. The UI should handle this failure by displaying a fallback message or "Content unavailable" notice and offering retry mechanisms where appropriate (e.g., for downloadable files). |
| BrowserIncompatibility    | If a user accesses the site using an outdated or unsupported browser, some UI features may not behave as intended. The system includes minimal polyfills and avoids bleeding-edge APIs to ensure wide compatibility. However, fallback messages should still be provided to inform users of potential issues. |
| StorageFailures           | In the rare case that `localStorage` is unavailable (e.g., disabled in the browser), theme and language preferences may not persist. The system should handle this by falling back to default settings and informing users that their preferences won’t be saved if relevant. |
| CorruptedFilesOrAssets    | If a static file (e.g., a resume PDF or JSON content) becomes corrupted or fails to load, the system will catch the error via JavaScript and present a meaningful message to the user. Additionally, errors can optionally be logged to a developer console during development for troubleshooting. |
|                           |                                                                                                                                                                           |

### 4. Subsystem services

![Diagram](SubsystemServices.svg)

- **Projects Subsystem – GetProjects**  
  This service retrieves and provides a list of portfolio projects for display. It sources data from preloaded or static resources and ensures users can view project content even in degraded network conditions.

- **Theme Subsystem – ChangeTheme**  
  This service handles user requests to switch between visual themes, such as light and dark mode. It updates the interface accordingly and ensures the selection persists across sessions using local storage mechanisms when available.

- **Language Subsystem – ChangeLanguage**  
  This service allows users to switch the interface language. It updates displayed text dynamically and maintains language preferences between visits, defaulting to a primary language if needed.

- **Routing Subsystem – ChangeRoute**  
  This service manages navigation within the application by updating the route and rendering the corresponding view. It ensures smooth transitions between sections and handles fallback scenarios for invalid routes.

- **Resume Subsystem – DownloadResume**  
  This service enables users to download the author's resume in a selected format. It supports straightforward content delivery while handling potential download issues gracefully.

### 5. Glossary

#### A  
- **Accessibility**: The practice of designing websites to be usable by people with disabilities, following standards such as WCAG 2.1.  
- **Angular**: A TypeScript-based web application framework used to build dynamic, client-side web applications.  

#### B  
- **Blog Subsystem**: The part of the application responsible for displaying user-authored blog posts, including tutorials and reflections.  
- **Browser Incompatibility**: A scenario where the website doesn’t perform correctly due to limitations in the user’s browser.  

#### C  
- **Client-Side**: Refers to operations that are performed in the user's browser rather than on the server.  
- **CSS (Cascading Style Sheets)**: A language used to describe the visual presentation of HTML documents.  

#### D  
- **Docs Subsystem**: A functional part of the application where structured documentation such as guides or references is displayed.  
- **Download Resume Service**: A function that allows users to download the resume from the portfolio website.  

#### E  
- **Event-Driven Model**: A control flow structure where the system reacts to user actions such as clicks or navigation.  

#### G  
- **Git**: A version control system used to manage changes to the project’s source code.  

#### H  
- **Header Subsystem**: A shared UI component that provides navigation links, branding, and user controls.  
- **Home Subsystem**: The landing page of the application, designed to introduce the user and their work.  
- **HTML (HyperText Markup Language)**: The standard markup language for creating web pages.  
- **HTTPS**: HyperText Transfer Protocol Secure; a secure version of HTTP that encrypts communication between the user and the website.  

#### J  
- **JavaScript**: A scripting language used to create dynamic behavior on web pages.  

#### L  
- **Language Subsystem**: The module responsible for internationalization, allowing users to switch the display language.  
- **localStorage**: A browser-based storage mechanism used to save user preferences like theme or language settings locally.  

#### M  
- **Material Design**: A design language developed by Google focusing on visual hierarchy, motion, and responsive UI behavior.  

#### N  
- **Namecheap**: A web hosting provider used to deploy the static portfolio website.  
- **Network Failure**: A condition where the site cannot load content due to loss of internet connectivity.  

#### P  
- **PDF (Portable Document Format)**: A file format used to present documents in a manner independent of software or hardware.  
- **Portfolio**: A personal website designed to showcase a software engineer’s work, skills, and background.  
- **Projects Subsystem**: A functional module displaying projects with details like descriptions, technologies used, and links.  

#### R  
- **Routing Subsystem**: The logic that enables navigation between different views in the single-page application.  
- **Resume Subsystem**: The part of the system that allows resume access and download.  

#### S  
- **Shared UI Subsystem**: A component group used across the application for consistent layout and design (e.g., header, footer).  
- **Static Hosting**: A method of web hosting that serves pre-built files directly to users without server-side logic.  
- **Subsystem**: A module within the larger system that performs a specific set of functions.  

#### T  
- **Theme Subsystem**: A system module that controls the application's visual theme (e.g., light or dark mode).  
- **TypeScript**: A strongly typed programming language that builds on JavaScript, often used with Angular.  

#### U  
- **UI (User Interface)**: The part of the software that users interact with directly.  
- **Usability**: The ease with which users can interact with the system effectively and intuitively.  

#### W  
- **WCAG (Web Content Accessibility Guidelines)**: A set of guidelines developed to ensure web content is accessible to all users.  
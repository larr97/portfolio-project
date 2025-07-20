## Requirements Analysis Document (RAD) for Software Engineer Portfolio
Version: 3.4  
Date: 2025-07-20  
Author: Luis Rodriguez

### 1. Introduction

#### 1.1 Purpose of the System

The purpose of the Software Engineer Portfolio is to provide a personal online platform showcasing the skills, experience, and achievements of the Software Engineer. It serves as a professional representation to potential employers, collaborators, and clients while also acting as a platform for personal branding and networking.

#### 1.2 Scope of the System

The Software Engineer Portfolio will include:

- **Home Page**: A central hub presenting personal information, background, experience, education, certifications, project summaries, and links to GitHub, LinkedIn, and a contact form.
- **Project Pages**: Individual detailed pages for each project, accessible through links from the summary list on the Home Page.
- **Blog**: A section for sharing articles about the developer’s personal journey and professional insights.
- **Process Documentation**: A section describing the portfolio creation process, including requirements elicitation, analysis, design, and implementation phases.

The system will be responsive and accessible, ensuring optimal user experience across devices and platforms. It will also include basic SEO optimizations to enhance discoverability.

**System Boundaries**:

- The portfolio will focus on presenting professional information, projects, and blog posts.
- It will not include features like advanced analytics, e-commerce capabilities, or integration with external APIs (unless specified in future requirements).

**Intended Audience**: 

- Potential employers seeking to evaluate the developer’s skills and experience.
- Collaborators and peers in the Software Engineer community interested in projects and technical insights.
- Clients looking for Software Engineer services and expertise.

#### 1.3 Objectives and Success Criteria of the Project

- **Objectives**:

  - Create a professional and visually appealing portfolio that effectively showcases the developer’s skills and projects.
  - Enable seamless navigation between different sections and project pages.
  - Provide a platform for sharing blog content and development journey.
  - Document the development process to demonstrate problem-solving and project management skills.

- **Success Criteria**:

  - The portfolio is fully functional and accessible across major browsers and devices.
  - All planned sections (Home Page, Project Pages, Blog, Process Documentation) are implemented and meet design specifications.
  - Visitors can easily navigate between sections and access detailed project information.
  - The portfolio attracts positive feedback and helps the developer connect with potential employers or collaborators.

#### 1.4 Definitions, Acronyms, and Abbreviations

- **Portfolio**: A collection of works and achievements showcased online.
- **Blog**: A regularly updated section for sharing articles and insights.
- **SEO**: Search Engine Optimization, techniques to improve visibility on search engines.
- **Responsive Design**: A design approach ensuring usability across various screen sizes and devices.

#### 1.5 References

- Personal notes and other portfolios for inspiration — Collected insights and design ideas to shape the portfolio’s structure and style.
- Design tools documentation:
  - [Figma](https://help.figma.com/hc/en-us) — Official help center for Figma, covering UI design, prototyping, and collaboration features.
  - [Material Design 3](https://m3.material.io) — Guidelines and components for implementing Google’s Material Design 3, ensuring a modern, accessible UI.
- Web development frameworks and libraries documentation:
  - [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) — Comprehensive documentation on HTML elements and best practices.
  - [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) — Detailed CSS reference and guides on styling web pages.
  - [Angular](https://angular.dev/overview) — Official Angular framework overview and documentation.
  - [Angular Material](https://material.angular.io/) — Documentation for Angular’s Material Design component library.
  - [TypeScript](https://www.typescriptlang.org/docs) — Language documentation covering TypeScript syntax and features.
- Accessibility standards:
  - [WCAG 2.1 guidelines](https://www.w3.org/WAI/standards-guidelines/wcag) — Web Content Accessibility Guidelines ensuring the portfolio meets accessibility standards for all users.
- SEO best practices guidelines:
  - [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) — Official Google guide to improve search engine optimization and site visibility.
- Academic References:
  - Bruegge, B., & Dutoit, A. H. (2009). [*Object-oriented software engineering: Using UML, patterns, and Java™*](https://www.pearson.com/en-us/subject-catalog/p/object-oriented-software-engineering-using-uml-patterns-and-java/P200000003319/9780136061250) (3rd ed.). Prentice Hall. — Served as the primary reference for software engineering methodology, UML modeling, and design process throughout the project.

#### 1.6 Overview

This document outlines the initial requirements for developing a Software Engineer Portfolio. This document aims to ensure a clear understanding of the project’s goals and deliverables among stakeholders, ensuring a successful development process.

### 2. Current System

Currently, there is no existing portfolio system in place. This absence represents a significant gap in the professional and educational development of the Software Engineer. Without a portfolio, it is challenging to effectively showcase technical skills, projects, and achievements to potential employers or collaborators. Additionally, the lack of a central platform limits opportunities for networking and personal branding.

The creation of a portfolio is essential to:

- Demonstrate the developer's technical expertise and creativity.
- Provide evidence of completed projects and professional growth.
- Enhance visibility in the competitive job market.
- Build a structured and polished online presence aligned with career aspirations.

Developing this portfolio will address these needs and serve as a foundation for continued professional success.

### 3. Proposed System

#### 3.1 Overview

The proposed Software Engineer Portfolio will be a dynamic and interactive platform designed to effectively showcase the developer’s personal and professional attributes. It will consist of multiple interconnected sections, ensuring both functionality and aesthetic appeal. The system will be built with modern web development technologies, emphasizing responsiveness, accessibility, and user engagement.

#### 3.2 Functional Requirements

- **Home Page**:

  - Display personal information, including name, background, and professional summary.
  - Provide an overview of education, certifications, and work experience.
  - Showcase a summary list of projects with links to detailed pages.
  - Include links to GitHub, LinkedIn, and Figma.
  - Implement a button to download the developer resume.

- **Project Pages**:

  - Display detailed information about each project, including objectives, technologies used, and outcomes.
  - Include images, videos, or interactive elements demonstrating project features.

- **Blog**:

  - Allow the developer to post articles about their career journey and technical insights.

- **Process Documentation**:

  - Detail the steps taken during the portfolio development process.
  - Include visual elements, such as diagrams or screenshots, to illustrate the process.

- **Navigation**:

  - Provide a consistent and intuitive navigation menu across all pages.
  - Enable seamless transitions between sections and pages.
  - Include a button to switch the page language between English and Spanish.
  - Implement a button to change between light and dark mode.

#### 3.3 Nonfunctional Requirements

##### 3.3.1 Usability

- The portfolio must accommodate users with varying levels of technical expertise, ensuring even novice users can navigate intuitively.
- The User Interface should follow established UI/UX guidelines familiar to most users, such as Material Design principles and it must be responsive to ensure optimal usability across desktop, tablet, and mobile device.
- The portfolio must maintain a consistent visual style across all pages and sections.
- Adhere to WCAG 2.1 AA compliance, including support for screen readers, keyboard navigation, and high-contrast modes.
- A formal documentation is not required as the portfolio will feature highly intuitive navigation.

##### 3.3.2 Reliability

- The portfolio must ensure consistent availability, with a downtime of no more than 1% monthly.
- Error handling mechanisms should be in place to prevent broken links or malfunctioning features.

##### 3.3.3 Performance

- The portfolio should load within 3 seconds on standard broadband connections.
- Media-heavy pages (e.g., project pages) must use optimized assets to reduce load time.
- Implement best SEO Optimization practices to improve search engine rankings and visibility.

##### 3.3.4 Supportability

- The system must be modular, allowing for easy updates to content or features.
- Source code and documentation must be maintained for troubleshooting and future enhancements.

##### 3.3.5 Implementation

- The portfolio will use widely supported technologies, such as HTML, CSS, JavaScript, TypeScript, Angular, and Angular Material.
- Ensure the solution is compatible with common browsers (Chrome, Firefox, Safari, Edge) and devices (desktop, tablet, mobile).
- Hosting will be done on a reliable platform like Namecheap or similar reliable platforms with automated backups and SSL support.

##### 3.3.6 Interface

- No integration with external systems is required for the portfolio.
- Allow users to download a stored resume file via a dedicated button. Ensure the file is stored securely and accessible at all times.

##### 3.3.7 Operation 

- The running portfolio will be managed by the website owner or a designated administrator with technical expertise.
- Use monitoring tools (e.g., uptime monitors, analytics) to track performance, availability, and potential issues.
- A recovery plan must be in place for unforeseen events.
- The chosen hosting platform (e.g., Namecheap) must provide support for operational troubleshooting and infrastructure maintenance.

##### 3.3.8 Packaging

- The portfolio will be deployed as a static web application, ensuring compatibility with various hosting platforms.
- Source code will be packaged and maintained in a version-controlled repository.

##### 3.3.9 Legal

- All content, including images and blog posts, must comply with copyright laws and use proper attribution when necessary.

#### 3.4 System Models

![Diagram](Actors.svg)

##### 3.4.1 Scenarios

| **Scenario Name**                 | **employerBrowsesPortfolio**                                                                                                        |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **Participating Actor Instances** | recruiter\:Visitor                                                                                                                  |
| **Flow of Events**                | 1. A recruiter visits the Home Page of the portfolio to read personal information and a summary of qualifications.                  |
|                                   | 2. The recruiter navigates to the Project Pages to examine specific projects that align with the skills they are seeking.           |
|                                   | 3. The recruiter clicks on the LinkedIn profile link to connect with the Developer for further discussion.                          |

---

| **Scenario Name**                 | **peerDeveloperExploresBlog**                                                                                                      |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **Participating Actor Instances** | peerDeveloper\:Visitor                                                                                                             |
| **Flow of Events**                | 1. A peerDeveloper visits the Blog section of the portfolio to browse articles about development practices and career experiences. |
|                                   | 2. The peerDeveloper leaves a comment on a blog post (if comments are enabled) or shares the post via social media links.          |
|                                   | 3. Inspired by the content, the peerDeveloper connects with the Developer on GitHub to explore open-source projects.               |

---

| **Scenario Name**                 | **developerUpdatesPortfolio**                                                               |
| --------------------------------- | ------------------------------------------------------------------------------------------- |
| **Participating Actor Instances** | developer\:Developer                                                                        |
| **Flow of Events**                | 1. The Developer logs into the system to update project information or add a new blog post. |
|                                   | 2. Changes are saved, and the portfolio is updated to reflect the new content.              |
|                                   | 3. The Developer verifies the updates for accuracy and functionality.                       |

---

| **Scenario Name**                 | **visitorChangesLanguage**                                                                                         |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Participating Actor Instances** | visitor\:Visitor                                                                                                   |
| **Flow of Events**                | 1. A visitor lands on the portfolio and notices the default language is not their preferred choice.                |
|                                   | 2. The visitor clicks on the language toggle button in the navigation bar.                                         |
|                                   | 3. The portfolio updates instantly, displaying all content in the selected language.                               |
|                                   | 4. The visitor continues to browse the portfolio in their preferred language without interruption.                 |

---

| **Scenario Name**                 | **visitorDownloadsResume**                                                                                           |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------- | 
| **Participating Actor Instances** | visitor\:Visitor                                                                                                     |
| **Flow of Events**                | 1. A visitor visits the Home Page of the portfolio and notices the "Download Resume" button prominently displayed.   |
|                                   | 2. The visitor clicks the button, and the system initiates the download of the developer’s resume in PDF format.     |
|                                   | 3. The visitor confirms the successful download and opens the file to review the developer’s qualifications offline. |

---

| **Scenario Name**                 | **visitorChangesTheme**                                                                                          |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Participating Actor Instances** | visitor\:Visitor                                                                                                 |
| **Flow of Events**                | 1. A visitor lands on the portfolio and notices the default theme is set to light mode.                          |
|                                   | 2. The visitor clicks on the "Change Theme" button/icon located in the navigation bar or footer.                 |
|                                   | 3. The portfolio instantly switches to dark mode, applying the new theme across all pages.                       |
|                                   | 4. The visitor continues browsing the portfolio with the updated theme, which persists during navigation.        |
|                                   | 5. (Optional) The theme preference is saved for future visits using local storage or cookies.                    |

##### 3.4.2 Use Case Model

![Diagram](UseCases.svg)

| **Use Case Name**                 | **Visitor Browses Portfolio**                                                                                          |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Participating Actors**          | Visitor                                                                                                                |
| **Flow of Events**                | 1. A visitor visits the Home Page to view personal information and a summary of qualifications.                        |
|                                   | 2. The visitor navigates to Project Pages to examine specific projects.                                                |
|                                   | 3. The visitor uses the Contact Form or clicks the LinkedIn link to connect with the developer.                        |
| **Entry Conditions**              | The portfolio is live, and the visitor has access to its URL.                                                          |
| **Exit Conditions**               | The visitor gathers sufficient information to decide on contacting the developer.                                      |
| **Quality Requirements**          | The system should load quickly and display clear, well-organized project details with accessible navigation features.  |

---

| **Use Case Name**                 | **Visitor Navigates Among Pages**                                                                                      |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Participating Actors**          | Visitor                                                                                                                |
| **Flow of Events**                | 1. A visitor uses the navigation menu or page links to move between sections like Home, Projects, Blog, or Contact.    |
|                                   | 2. The visitor explores each page as needed and returns to the Home Page.                                              |
|                                   | 3. The system provides consistent navigation across all pages.                                                         |
| **Entry Conditions**              | The visitor has landed on any page of the portfolio.                                                                   |
| **Exit Conditions**               | The visitor navigates smoothly between sections and finds the desired content.                                         |
| **Quality Requirements**          | Navigation should be intuitive, responsive, and consistent across devices and browsers.                                |

---

| **Use Case Name**                 | **Visitor Changes the Language**                                                                                       |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Participating Actors**          | Visitor                                                                                                                |
| **Flow of Events**                | 1. The visitor clicks on the language toggle button in the navigation bar.                                             |
|                                   | 2. The portfolio updates to display all content in the selected language.                                              |
|                                   | 3. The visitor continues exploring the portfolio in their preferred language.                                          |
| **Entry Conditions**              | The portfolio supports multiple languages, and the visitor can access the language toggle feature.                     |
| **Exit Conditions**               | The portfolio updates to the selected language without errors.                                                         |
| **Quality Requirements**          | The language toggle must work seamlessly, with translations accurate and consistent across all pages.                  |

---

| **Use Case Name**                 | **Visitor Changes the Theme**                                                                                          |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Participating Actors**          | Visitor                                                                                                                |
| **Flow of Events**                | 1. The visitor clicks on the "Change Theme" button/icon in the navigation bar or footer.                               |
|                                   | 2. The portfolio instantly switches between light and dark mode.                                                       |
|                                   | 3. The theme preference persists during navigation and (optionally) across sessions.                                   |
| **Entry Conditions**              | The visitor has access to the theme toggle feature, and the system supports multiple themes.                           |
| **Exit Conditions**               | The portfolio updates to the selected theme consistently across all pages.                                             |
| **Quality Requirements**          | Theme toggling must be fast and visually consistent, without affecting usability or accessibility.                      |

---

| **Use Case Name**                 | **Visitor Downloads Resume**                                                                                          |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **Participating Actors**          | Visitor                                                                                                               |
| **Flow of Events**                | 1. The visitor clicks on the "Download Resume" button on the Home Page.                                               |
|                                   | 2. The system initiates the download of the resume in PDF format.                                                     |
|                                   | 3. The visitor verifies the successful download and reviews the resume offline.                                       |
| **Entry Conditions**              | The resume is uploaded to the portfolio and accessible via the download button.                                       |
| **Exit Conditions**               | The visitor successfully downloads and accesses the resume.                                                           |
| **Quality Requirements**          | The resume must download quickly and be formatted correctly for offline viewing.                                      |

---

| **Use Case Name**                 | **Developer Updates Portfolio**                                                                                                |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Participating Actors**          | Developer                                                                                                                      |
| **Flow of Events**                | 1. The developer logs in to update project information or add a new blog post.                                                 |
|                                   | 2. Changes are saved, and the portfolio reflects the new content.                                                              |
|                                   | 3. The developer verifies updates for accuracy and functionality.                                                              |
| **Entry Conditions**              | The developer has access to the content management system.                                                                     |
| **Exit Conditions**               | The portfolio is successfully updated, and all changes are live.                                                               |
| **Quality Requirements**          | Updates should be instantly visible, the CMS should be user-friendly, and all changes should maintain system integrity.        |

##### 3.4.3 Object Model

###### 3.4.3.1 Data dictionary

| **Entity Object Name**  | **Description**                                                                                                                                | **Angular Name**              |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| **Project**             | A piece of work or software developed by the Software Engineer to demonstrate skills and expertise. A project is identified by a unique ID and includes details such as title, description, technologies used, and a link to its live/demo version or repository.                                                                                         |                               |
| **Job**                 | A professional role held by the developer in the past or present. A job entry is composed of a job title, company name, start and end dates, responsibilities, and achievements.                                                                                                                                                              |                               |
| **Certification**       | A formal recognition of a skill or expertise obtained by the developer. Certifications are identified by titles, issuing organizations, issue dates, and optionally expiration dates.                                                                                                                                                                     |                               |
| **Education**           | Details of the developer’s academic background. Education entries include institution names, degree or certification titles, majors or fields of study, and graduation years.                                                                                                                                                                     |                               |
| **Resume**              | A downloadable document summarizing the developer’s qualifications, experience, education, and certifications. The resume is stored in PDF format and accessible via the portfolio.                                                                                                                                                                 |                               |
| **Blog Post**           | An article written by the developer about personal development, technical insights, or career experiences. Blog posts include titles, content, publication dates, and tags.                                                                                                                                                                      |                               |
| **Document**            | A Software Project Document containing key attributes such as title, URL, and optionally version.                                              |                               |
| **Route**               | Represents a navigational path within the application. Each route includes a unique path, name, and associated component or view used to structure the site.                                                                                                                                                                      |                               |
| **Theme**               | Represents the visual style preference selected by the user (e.g., light or dark mode). Includes the attribute name.                           | `theme.model`                 |
| **Language**            | Represents the language selected by the user for localization. Includes attributes such as code (e.g., "en", "es") and name.                   | `language.model`              |

---

| **Boundary Object Name**     | **Description**                                                                                                                           | **Angular Name**              |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| **Download Resume Button**   | A clickable interface element that allows visitors to download the developer's resume in PDF format. Includes a label and triggers the download action when clicked.                                                                                                                                                                   |                               |
| **Navigation Button**        | A user interface button that allows users to navigate between different views of the application, such as Home, Projects, Docs, and Blog, by triggering route changes.                                                                                                                                                                   |                               |
| **Light/Dark Mode Button**   | A toggle that enables users to switch the portfolio’s theme between light and dark modes. Changes the website’s appearance without reloading the page.                                                                                                                                                                      | `theme-switcher`              |
| **Language Button**          | A toggle or dropdown allowing users to switch the language of the portfolio (e.g., English to Spanish). Stores the selected language preference.                                                                                                                                                                | `language-switcher`           |

---

| **Control Object Name**     | **Description**                                                                                                                            | **Angular Name**              |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------- |
| **Resume Control**          | Processes the request to download the resume file. Ensures the file exists and triggers the file download process for the user.            |                               |
| **Projects Control**        | Handles the logic and interactions related to project data within the application. Responsible for retrieving, filtering, and organizing project entries, and coordinating updates between the user interface and internal logic.                                                                                                                     |                               |
| **Routing Control**         | Handles the application’s navigation logic. When triggered by a NavigationButton, it updates the current route and loads the corresponding view or component.                                                                                                                                                                 |                               |
| **Themes Control**          | Manages the theme toggling functionality. Adjusts the portfolio’s visual style between light and dark modes and stores the user's preference.                                                                                                                                                                | `theme.service`               |
| **Languages Control**       | Handles the logic for switching the portfolio’s language. Retrieves the selected language from the interface and updates all content dynamically.                                                                                                                                                               | `language.service`            |

###### 3.4.3.2 Class diagrams

![Diagram](ClassDiagram.svg)

###### 3.4.3.3 Object Associations diagram

![Diagram](ObjectAssociationsDiagram.svg)

##### 3.4.4 Dynamic models

![Diagram](SequenceDiagram.svg)

> _Note: Change Language and Change Theme are basically the same but with different names._

##### 3.4.5 User interface—navigational paths and screen mock-ups

The user interface for this project has been designed and prototyped in Figma, providing a high-fidelity, interactive representation of the final product. This prototype closely mirrors the intended look and functionality of the actual website, offering a realistic preview of the user experience. The navigational paths within the prototype demonstrate how users will move through different sections of the application, ensuring intuitive flow and accessibility. By utilizing Figma, the design process remains flexible and collaborative, enabling quick iterations based on feedback. The screen mock-ups included here serve as both a visual guide and a reference for implementation. The full interactive prototype is available through the following [Figma Prototype](https://www.figma.com/proto/BckiGF230fNRprznGKNyZi/Website?node-id=21-101&t=z6c1uPhNA7Ls2fbo-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=21%3A101&show-proto-sidebar=1).

While creating the user interface for this project, inspiration was drawn from various design elements and layouts created by other designers. These elements helped inform the overall aesthetic and functionality of the interface. Credit is given to the original creators of the design components used, including the [Personal Portfolio Website Template](https://www.figma.com/design/vwKk5gg0WCOYL1erl907xl/Personal-Portfolio-Website-Template-%7C-Mobile---Desktop--Community-?node-id=327-868&p=f&t=ol5wxWbxYmCXXsLo-0) and the [Free Blog Template](https://www.figma.com/design/fwKpZLWDUB3j2kZ21AfO4Z/Free-Blog-Template-%7C-4-Theme-Blog-With-Complete-UI--Community-?node-id=0-1&p=f&t=ol5wxWbxYmCXXsLo-0) available on Figma. The designs have been modified and customized to suit the specific requirements of this project while maintaining the essence of the original inspirations. This ensures that the design is both original and respectful of existing work. Proper attribution has been provided within the final prototype and documentation.

### 4. Glossary

#### A
- **Accessibility**: The practice of designing websites to be usable by people with disabilities, following guidelines such as WCAG 2.1.  
- **Angular**: A TypeScript-based web application framework for building modern web applications.  
- **Angular Material**: A UI component library for Angular that follows Google’s Material Design principles.  
- **API (Application Programming Interface)**: A set of functions and protocols that allow different software systems to communicate.  

#### B
- **Blog**: A section of the portfolio where the developer shares articles and insights.  
- **Blog Post**: An article written by the developer, containing technical insights, personal experiences, or tutorials.  
- **Boundary Object**: A term in system modeling referring to interface elements that facilitate interactions between users and the system.  

#### C
- **Certification**: A formal recognition of a skill or expertise, issued by an organization.  
- **CSS (Cascading Style Sheets)**: A language used to style HTML content and define the visual presentation of a website.  

#### D
- **Data Dictionary**: A structured repository of definitions for data elements used in the portfolio system.  
- **Developer**: The owner and maintainer of the portfolio.  
- **Download Resume Button**: A clickable element that allows users to download the developer’s resume in PDF format.  

#### E
- **Education**: Details about the developer’s academic background, including degrees and institutions attended.  
- **Error Handling**: The process of managing and responding to system errors, such as broken links or unavailable content.  
- **Exit Conditions**: The state in which a use case is considered successfully completed.  

#### F
- **Figma**: A design and prototyping tool used for UI/UX development.  
- **Flow of Events**: A structured sequence of actions in a use case describing how a system behaves.  
- **Functional Requirements**: Specific system features and functions that must be implemented.  

#### G
- **GitHub**: A platform for hosting and managing source code using Git.  
- **Google SEO Starter Guide**: A set of best practices provided by Google to optimize websites for search engines.  

#### H
- **Home Page**: The main landing page of the portfolio, displaying personal information and project summaries.  
- **HTML (HyperText Markup Language)**: The standard language used for structuring web pages.  

#### I
- **Implementation Requirements**: Specifications on how the system should be built, including technologies and deployment platforms.  
- **Interface**: The user-facing components of the system, such as buttons, forms, and navigation elements.  
- **Intended Audience**: The primary users of the portfolio, such as recruiters, collaborators, and clients.  

#### J
- **JavaScript**: A programming language used to create dynamic and interactive web applications.  
- **Job**: A professional role held by the developer, including responsibilities and achievements.  

#### L
- **Language**: Represents the language setting selected by the user.  
- **Language Button**: A UI element that allows visitors to toggle between different languages. 
- **Languages Control**: The function responsible for switching the portfolio’s language dynamically.  
- **Light/Dark Mode Button**: A UI control that lets users switch between light and dark themes.  

#### M
- **Material Design 3**: A design language developed by Google that guides UI/UX design.  
- **Media Optimization**: The process of compressing and optimizing images and videos to improve page load times.  
- **Modular Design**: A software design principle where a system is broken down into independent, interchangeable components.  

#### N
- **Navigation Menu**: A UI element that allows users to move between different sections of the portfolio.  
- **Nonfunctional Requirements**: Requirements that define system quality attributes, such as usability, performance, and security.  

#### O
- **Object Model**: A representation of the different entities and their relationships within the system.  
- **Operation Requirements**: Conditions under which the portfolio is managed, updated, and maintained.  

#### P
- **Participating Actor Instances**: The roles interacting with a system in a use case scenario.  
- **Performance Requirements**: The expected system performance, such as load times and responsiveness.  
- **Portfolio**: A digital collection showcasing the developer’s skills, projects, and professional information.  
- **Process Documentation**: A section detailing the development phases of the portfolio.  
- **Project**: A software application or piece of work developed by the Software Engineer.  
- **Project Pages**: Sections dedicated to showcasing detailed information about each project.  

#### Q
- **Quality Requirements**: Standards that define the performance, accessibility, and usability of the portfolio.  

#### R
- **Reliability Requirements**: Specifications ensuring that the system remains functional and accessible with minimal downtime.  
- **Requirements Analysis**: The process of identifying and documenting the needs and functionalities of the portfolio system.  
- **Responsive Design**: A web development approach ensuring a consistent experience across devices of different screen sizes.  
- **Resume**: A downloadable document summarizing the developer’s qualifications and work experience.  
- **Resume Control**: The system function that handles resume download requests.  

#### S
- **Scenarios**: Hypothetical situations describing how users interact with the portfolio.  
- **Scope**: The boundaries of the project, defining what is and isn't included.  
- **Search Engine Optimization (SEO)**: Techniques used to improve a website’s visibility on search engines.
- **Software Enginner Portfolio**: A personal website showcasing the skills, experience, and projects of a Software Enginner.    
- **Success Criteria**: Measurable conditions that define whether the project meets its objectives.  
- **Supportability**: The ability of the system to be maintained, updated, and expanded.  
- **System Boundaries**: The limits of the portfolio’s functionality and features.  

#### T
- **Technology Stack**: The set of programming languages, frameworks, and tools used to develop the portfolio.  
- **Theme**: Represents the visual style preference selected by the user, such as light or dark mode.
- **Themes Control**: A system component that manages light and dark mode switching.  
- **TypeScript**: A strongly typed programming language that builds on JavaScript.  

#### U
- **Usability Requirements**: Guidelines ensuring the portfolio is user-friendly and accessible.  
- **Use Case Model**: A structured representation of user interactions with the system.  
- **User Interface (UI)**: The graphical layout of the system that users interact with.  
- **User Experience (UX)**: The overall experience of users when interacting with the portfolio.  

#### V
- **Visitor**: A person who browses the portfolio, including potential employers, clients, and developers.  
- **Visitor Browses Portfolio**: A use case describing how visitors interact with the portfolio content.  
- **Visitor Changes Language**: A use case detailing how visitors toggle between languages.  
- **Visitor Changes Theme**: A use case describing how visitors switch between light and dark modes.  
- **Visitor Downloads Resume**: A use case detailing the process of downloading the developer’s resume.  

#### W
- **WCAG 2.1 (Web Content Accessibility Guidelines)**: A set of standards for making web content more accessible.  
- **Website Hosting**: The service used to store and serve the portfolio online.  
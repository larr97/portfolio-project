## Requirements Analysis Document for Web Developer Portfolio

### 1. Introduction

#### 1.1 Purpose of the System

The purpose of the Web Developer Portfolio is to provide a personal online platform showcasing the skills, experience, and achievements of the web developer. It serves as a professional representation to potential employers, collaborators, and clients while also acting as a platform for personal branding and networking.

#### 1.2 Scope of the System

The Web Developer Portfolio will include:

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
- Collaborators and peers in the web development community interested in projects and technical insights.
- Clients looking for web development services and expertise.

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

- Personal notes and other portfolios for inspiration
- Design tools documentation:
  - [Figma](https://help.figma.com/hc/en-us)
  - [Material Design 3](https://m3.material.io)
- Web development frameworks and libraries documentation:
  - [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
  - [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
  - [Angular](https://angular.dev/overview)
  - [Angular Material](https://material.angular.io/)
  - [Tailwind CSS](https://tailwindcss.com/docs/installation)
  - [TypeScript](https://www.typescriptlang.org/docs)
- Accessibility standards:
  - [WCAG 2.1 guidelines](https://www.w3.org/WAI/standards-guidelines/wcag)
- SEO best practices guidelines:
  - [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)

#### 1.6 Overview

This document outlines the initial requirements for developing a Web Developer Portfolio. This document aims to ensure a clear understanding of the project’s goals and deliverables among stakeholders, ensuring a successful development process.

### 2. Current System

Currently, there is no existing portfolio system in place. This absence represents a significant gap in the professional and educational development of the web developer. Without a portfolio, it is challenging to effectively showcase technical skills, projects, and achievements to potential employers or collaborators. Additionally, the lack of a central platform limits opportunities for networking and personal branding.

The creation of a portfolio is essential to:

- Demonstrate the developer's technical expertise and creativity.
- Provide evidence of completed projects and professional growth.
- Enhance visibility in the competitive job market.
- Build a structured and polished online presence aligned with career aspirations.

Developing this portfolio will address these needs and serve as a foundation for continued professional success.

### 3. Proposed System

#### 3.1 Overview

The proposed Web Developer Portfolio will be a dynamic and interactive platform designed to effectively showcase the developer’s personal and professional attributes. It will consist of multiple interconnected sections, ensuring both functionality and aesthetic appeal. The system will be built with modern web development technologies, emphasizing responsiveness, accessibility, and user engagement.

#### 3.2 Functional Requirements

- **Home Page**:

  - Display personal information, including name, background, and professional summary.
  - Provide an overview of education, certifications, and work experience.
  - Showcase a summary list of projects with links to detailed pages.
  - Include links to GitHub, LinkedIn, and a contact form.
  - Implement a button to download the developer resume.

- **Project Pages**:

  - Display detailed information about each project, including objectives, technologies used, and outcomes.
  - Include images, videos, or interactive elements demonstrating project features.

- **Blog**:

  - Allow the developer to post articles about their career journey and technical insights.
  - Enable visitors to read and comment on posts (if comments are implemented).

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

- The portfolio will use widely supported technologies, such as HTML, CSS, JavaScript, TypeScript, Angular, Angular Material, and Tailwind CSS.
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
- The portfolio must include a privacy notice for the contact form, explaining data usage and retention.

#### 3.4 System Models

##### 3.4.1 Scenarios

| **Scenario Name**                 | **employerBrowsesPortfolio**                                                                                                        |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **Participating Actor Instances** | recruiter\:Visitor                                                                                                                  |
| **Flow of Events**                | 1. A recruiter visits the Home Page of the portfolio to read personal information and a summary of qualifications.                  |
|                                   | 2. The recruiter navigates to the Project Pages to examine specific projects that align with the skills they are seeking.           |
|                                   | 3. The recruiter uses the Contact Form or clicks on the LinkedIn profile link to connect with the Developer for further discussion. |

| **Scenario Name**                 | **peerDeveloperExploresBlog**                                                                                                      |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **Participating Actor Instances** | peerDeveloper\:Visitor                                                                                                             |
| **Flow of Events**                | 1. A peerDeveloper visits the Blog section of the portfolio to browse articles about development practices and career experiences. |
|                                   | 2. The peerDeveloper leaves a comment on a blog post (if comments are enabled) or shares the post via social media links.          |
|                                   | 3. Inspired by the content, the peerDeveloper connects with the Developer on GitHub to explore open-source projects.               |

| **Scenario Name**                 | **developerUpdatesPortfolio**                                                               |
| --------------------------------- | ------------------------------------------------------------------------------------------- |
| **Participating Actor Instances** | developer\:Developer                                                                        |
| **Flow of Events**                | 1. The Developer logs into the system to update project information or add a new blog post. |
|                                   | 2. Changes are saved, and the portfolio is updated to reflect the new content.              |
|                                   | 3. The Developer verifies the updates for accuracy and functionality.                       |

##### 3.4.2 Use Case Model

![Diagram](Actors.svg)

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

| **Use Case Name**                 | **Visitor Explores Blog**                                                                                                      |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Participating Actors**          | Visitor                                                                                                                        |
| **Flow of Events**                | 1. A visitor visits the Blog section to browse articles about development practices and career experiences.                    |
|                                   | 2. The visitor leaves a comment on a blog post (if comments are enabled) or shares the post via social media links.            |
|                                   | 3. Inspired by the content, the peer developer connects with the developer on GitHub.                                          |
| **Entry Conditions**              | The blog section is live with published posts.                                                                                 |
| **Exit Conditions**               | The peer developer gains insights and optionally connects with the developer through shared links or GitHub.                   |
| **Quality Requirements**          | The blog should be easy to read, include social media sharing features, and comply with accessibility standards.               |

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

###### 3.4.3.2 Class diagrams

##### 3.4.4 Dynamic models

![Diagram](SequenceDiagram.svg)

##### 3.4.5 User interface—navigational paths and screen mock-ups

### 4. Glossary






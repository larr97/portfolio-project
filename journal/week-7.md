# Week 7 Progress Journal  

## Overview 
This week focused on preparing the Angular project environment, including the setup of Angular Material, initial theming using Material Design 3 standards, and the integration of Compodoc for automated project documentation.
As the journey continues, so do the ideas to build a more professional and maintainable project. I explored how to improve commit messages by following standards, learned how to version documents properly, and prepared to apply versioning to the Angular codebase using Git.

## Completed Tasks
- Installed Angular via [Angular.dev](https://angular.dev/installation) (requires [Node.js](https://nodejs.org/en/download)) 
```
npm install -g @angular/cli
```
- Created custom `favicon.ico` using Figma  
- Installed [Compodoc](https://compodoc.app/guides/installation.html) for ODD (Object Design Documentation)
```
ng add @compodoc/compodoc
```  
- Installed [Angular Material](https://material.angular.dev/guide/getting-started) and applied custom theming via the [Material 3 theme schematic](https://github.com/angular/components/blob/main/src/material/schematics/ng-generate/theme-color/README.md)
```
ng add @angular/material
ng generate @angular/material:theme-color
```
- Refactored Git commit messages using standardized formats (e.g., `docs(rad): update structure`)
- Established a versioning convention for project documents (RAD, SDD, ODD) using simplified Semantic Versioning (`v1.0`, `v2.0`, etc.)
- Tagged project document versions in Git to enable historical tracking

## Challenges  
- Angular Material’s current Material 3 Custom Theme schematic generates theme palettes strictly using the exact input seed colors—matching the Google Material Design setting **“Color match: Stay true to my color inputs”**—but lacks support for the optimized role-based color adjustments applied when this setting is unchecked.  
- Because I design my Figma themes with **“Color match” unchecked** for better visual harmony, this limitation creates a disconnect. I could use other approaches to apply the same colors I designed in Figma, but none of them would be as elegant a solution as having direct integration with Angular Material.  
- Therefore, I raised an issue to request a configuration option that lets developers choose between staying true to input colors or using optimized role palettes: [GitHub Issue #31392](https://github.com/angular/components/issues/31392#event-18258603669).
- A key challenge was updating the document versioning approach—moving from inconsistent labels like “version 1” and “version 2”—without rewriting Git history or renaming existing files.
> **Note:** Earlier document versions were numbered simply as 1, 2, 3, based on meaningful iteration milestones—such as completing a draft or incorporating feedback from other documents. Starting now, the project adopts the more standardized `vMAJOR.MINOR` format (e.g., `v3.0`, `v3.1`) for clearer and more consistent versioning.  
> The current RAD is at **v3.1**, the SDD is at **v2.1**, and the ODD is at **v1.1**.

## Lessons Learned 
- The [Material Theme Builder](https://material-foundation.github.io/material-theme-builder/) includes a setting:
  > **Color match**  
  > Stay true to my color inputs.
  - When **checked**, role colors closely follow the input seed palettes.  
  - When **unchecked**, role colors are optimized — adjusted for better contrast and visual harmony. 
- The Angular Material theming system, as described in the [Angular Material Theming Guide](https://material.angular.dev/guide/theming#pre-built-themes) and implemented through the [Material 3 Custom Theme schematic](https://github.com/angular/components/blob/main/src/material/schematics/ng-generate/theme-color/README.md), currently supports only the behavior where **“Color match” is checked**, meaning role colors closely follow the exact input seed palettes without optimization.
- Reviewed [Angular Material System Variables](https://material.angular.dev/guide/system-variables), where Material Design 3 color roles are implemented as CSS custom properties prefixed with `--mat-sys-`. Key variables include:

| Color Role          | CSS Variable                     | Usage Purpose                     |
|---------------------|----------------------------------|-----------------------------------|
| primary             | `--mat-sys-primary`              | Primary brand color               |
| onPrimary           | `--mat-sys-on-primary`           | Text/icon color on primary        |
| primaryContainer    | `--mat-sys-primary-container`    | Container background for primary  |
| onPrimaryContainer  | `--mat-sys-on-primary-container` | Text color on primary container   |
| surface             | `--mat-sys-surface`              | Default background surfaces       |
| onSurface           | `--mat-sys-on-surface`           | Text/icons on surface backgrounds |
| error               | `--mat-sys-error`                | Error state color                 |
| onError             | `--mat-sys-on-error`             | Text/icons on error background    |
| ...                 | ...                              | ...                               |

- I learned that adopting professional practices like [semantic versioning](https://semver.org/), [Git tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging), and [standardized commit messages](https://www.conventionalcommits.org/en/v1.0.0/)—no matter the stage of the project—can greatly improve clarity, traceability, and long-term maintainability for both code and documentation. These practices are widely used in professional environments and tools. For example, [Angular’s commit conventions](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit) are a stricter version of conventional commits, designed to integrate with automated changelogs and release pipelines. That’s why I adopted the following standards:

---

### Commit Message Standards  
To maintain a clear and professional Git history, I now follow a Conventional Commits format:

```
<type>(<scope>): <short summary>
```

**Examples:**

- `docs(rad): update project objectives and stakeholders`
- `docs(sdd): add sequence diagrams and system overview`
- `docs(journal): add week 6 progress report`
- `chore(compodoc): regenerate documentation`
- `feat(odd): initial draft of object design`

**Common Commit Types:**

| Type      | Purpose                                |
|-----------|----------------------------------------|
| feat      | New feature or document section        |
| fix       | Fix to content or structure            |
| docs      | Documentation changes                  |
| style     | Formatting, no meaning changes         |
| refactor  | Code/document restructuring            |
| chore     | Non-production changes (e.g., cleanup) |

---

### Document Versioning  
For documents like the RAD, SDD, and ODD, I adopted a simplified [semantic versioning](https://semver.org/) format: `MAJOR.MINOR`.

**Examples:**

- `v1.0` → First complete version  
- `v1.1` → Add diagrams  
- `v1.2` → Minor updates or feedback changes  
- `v2.0` → Major restructuring  

Optionally, a patch version can be used for small changes:  
- `v1.2.1` → Fixed typos or formatting

**How versions are tracked:**

Inside the document header:

```
# RAD  
Version: 1.2  
Date: 2025-06-22  
Author: Luis Rodriguez
```

> Note: Where Date has the format YYYY-MM-DD.

and using [Git tags](https://git-scm.com/book/en/v2/Git-Basics-Tagging):

```
git tag -a rad-v1.0 -m "First complete version of RAD"
git push origin --tags
```

---

### Semantic Versioning for Code  
For the Angular project, I plan to use full [semantic versioning](https://semver.org/): `MAJOR.MINOR.PATCH`.

| Number  | When to Update                      | Example            |
|---------|--------------------------------------|--------------------|
| MAJOR   | Breaking changes or large updates    | `v1.0.0 → v2.0.0`  |
| MINOR   | New features (non-breaking)          | `v2.1.0 → v2.2.0`  |
| PATCH   | Fixes or small improvements          | `v2.2.1 → v2.2.2`  |

Typical versioning flow:

- Start with `v0.1.0` during development  
- Move to `v1.0.0` when feature-complete and ready for review

**Examples:**

In Angular, the version is defined in `package.json`:

```json
{
  "version": "1.2.3"
}
```

And code versions are tagged in Git:

```
git tag -a v1.2.3 -m "Bug fixes and accessibility improvements"
git push origin --tags
```
---

## Next Steps
- Monitor progress on [GitHub Issue #31392](https://github.com/angular/components/issues/31392#event-18258603669) and contribute if possible.
- Start mapping Models to Code.
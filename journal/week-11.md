# Week 11 Progress Journal

## Overview  
This week, I focused on refining the **routing subsystem**. I defined a clear loading strategy for the routes, added automatic translation for route titles, and introduced a guard to control access to project detail pages.

## Completed Tasks  
- Differentiated routing strategies for **project-detail** (dynamic, parameterized) vs. **blog-post** (static, dedicated).  
- Updated route configuration to use a mix of **eager** and **lazy** loading for performance optimization.  
- Implemented a **TranslateTitleStrategy** to auto-translate route titles in the browser tab.  
- Created and integrated a **ProjectDetailGuard** to allow navigation only to existing projects.  

## Challenges  
- A key challenge was revisiting Angular’s routing and title strategy documentation to reinforce important concepts and stay up to date with the latest changes.

## Lessons Learned  
- Reinforced my understanding of Angular routing using the [Angular Routing Guide](https://angular.dev/guide/routing) and the [Route API](https://angular.dev/api/router/Route).
- When setting up routing for my application, I decided to treat **project-detail** and **blog-post** differently because their requirements are not the same.
- For **Projects**, the layout and structure are mostly the same. I will use a **single template** (`ProjectDetail`) and [URL Paths with Route Parameters](https://angular.dev/guide/routing/define-routes#define-url-paths-with-route-parameters) so each project can be displayed dynamically based on its `:name`.
  ``` ts
  { path: 'projects', component: Projects, title: 'Projects' },
  { path: 'projects/:name', component: ProjectDetail, title: 'Project Detail' },
  ```
- For the **Blog**, each post may require its own unique layout, custom sections, or special styling. Instead of a single detail template, I will use [static URL paths](https://angular.dev/guide/routing/define-routes#static-url-paths) with a dedicated component per post.
  ``` ts
  { path: 'blog/angular-material-theming', component: BlogAngularTheming, title: 'Angular Material Theming' },
  { path: 'blog/figma-to-angular', component: BlogFigmaToAngular, title: 'Figma to Angular' },
  { path: 'blog/theming-angular', component: BlogThemingAngular, title: 'Angular Theming' },
  { path: 'blog/ngx-translate-guide', component: BlogNgxTranslateGuide, title: 'Ngx-translate Guide' },
  ```
- This approach balances **consistency for projects** with **flexibility for blog posts**.
- Learned how to apply different loading strategies for route components from the [Angular Routing Guide](https://angular.dev/guide/routing/define-routes#loading-route-component-strategies).
- I updated the routing subsystem to balance **eager** and **lazy** loading strategies, based on how often each route is expected to be accessed and its importance to the app. Eager routes include core sections like Home, Projects, and Wildcard, while lazy routes cover secondary or heavier sections like Project Detail, Blog, and Docs, balancing initial load performance with snappy critical navigation.
- **Home** (Eager): The homepage is the app’s entry point, so it’s eagerly loaded with a direct `component` to ensure it’s always available immediately.
  ``` ts
  { path: '', component: Home }
  ```
- **Projects** (Eager): Projects are central to the portfolio and a primary navigation destination after Home, so they are eagerly loaded to avoid delays when exploring them.
  ``` ts
  { path: 'projects', component: Projects, title: 'Projects' }
  ```
- **Project Detail** (Lazy): Project details are only needed when a user selects a specific project, so they are lazy loaded with `loadComponent` to avoid shipping this code until required.
  ``` ts
  { 
    path: 'projects/:name', 
    loadComponent: () => import('./pages/projects/project-detail/project-detail').then(m => m.ProjectDetail), 
    title: 'Project Detail' 
  }
  ```
- **Blog** (Lazy): Blog posts are heavier with unique layouts and content, so they are lazy loaded to prevent affecting the initial bundle size since they aren't accessed frequently.
  ``` ts
  { 
    path: 'blog', 
    loadComponent: () => import('./pages/blog/blog').then(m => m.Blog), 
    title: 'Blog' 
  },
  { 
    path: 'blog/post', 
    loadComponent: () => import('./pages/blog/blog-post/blog-post').then(m => m.BlogPost), 
    title: 'Blog Post' 
  }
  ```
- **Docs** (Lazy): Documentation is less critical for most visitors, so it is lazy loaded and only fetched when requested to keep the startup payload small.
  ``` ts
  { 
    path: 'docs', 
    loadComponent: () => import('./pages/docs/docs').then(m => m.Docs), 
    title: 'Docs' 
  }
  ```
- **Wildcard Redirect** (Eager): The fallback route should be instantly available for unknown paths, so it is eagerly loaded to guarantee immediate redirection.
  ``` ts
  { path: '**', redirectTo: '' }
  ```
- To automatically translate route titles in the browser tab, we can translate Route Titles with `TranslateTitleStrategy` which creates a custom [TitleStrategy](https://angular.dev/api/router/TitleStrategy#updateTitle) that uses [Angular Title Service](https://angular.dev/api/platform-browser/Title) and also integrates `ngx-translate` with our reactive `LanguageService`. This ensures titles update when: the route changes and the language changes (even on page reload).
  ```ts
  //core/language/translate-title-strategy.service.ts
  import { Injectable } from '@angular/core';
  import { TitleStrategy, RouterStateSnapshot } from '@angular/router';
  import { TranslateService } from '@ngx-translate/core';
  import { Title } from '@angular/platform-browser';

  @Injectable({
    providedIn: 'root'
  })
  export class TranslateTitleStrategy extends TitleStrategy {
    constructor(
      private readonly translate: TranslateService,
      private readonly title: Title
    ) {
      super();
    }

    override updateTitle(snapshot: RouterStateSnapshot): void {
      const titleKey = this.buildTitle(snapshot); // get `title` from route data
      if (titleKey) {
        const translated = this.translate.instant(titleKey);
        this.title.setTitle(translated);
      }
    }
  }
  ```
- Reviewed the [RxJS Observable Guide](https://rxjs.dev/guide/observable) to strengthen my understanding of reactive programming in Angular.
- To integrate it in `LanguageService`
  ```ts
  this.translate.use(this.currentLanguage().getCode()).subscribe(() => {
    this.titleStrategy.updateTitle(this.router.routerState.snapshot);
  });
  ```
- App config with the custom TitleStrategy provider:
  ```ts
  // app.config.ts
  ...

  export const appConfig: ApplicationConfig = {
    providers: [
      ...
      provideRouter(routes),
      { provide: TitleStrategy, useClass: TranslateTitleStrategy },
      ...
    ]
  };
  ```
- Learned how to control route access using guards from the [Angular Routing Guide -- Route Guards](https://angular.dev/guide/routing/route-guards).
- To ensure navigation to `/projects/:name` only works if the `:name` exists in the actual list of projects, I implemented a **Route Guard**.
- Create the projectDetailGuard
  ``` ts
  // src/core/projects/project-detail-guard.ts
  import { CanActivateFn, ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
  import { inject } from '@angular/core';
  import { ProjectsService } from './projects.service';

  export const projectDetailGuard: CanActivateFn = ( route: ActivatedRouteSnapshot ): boolean | UrlTree => {
    const projectsService = inject(ProjectsService);
    const router = inject(Router);

    const projectName = route.paramMap.get('name');
    const projects = projectsService.getProjectNames(); // e.g. ['angular', 'react', 'vue']

    if (projectName && projects.includes(projectName)) {
      return true; // allow navigation
    }

    // redirect instead of returning false
    return router.createUrlTree(['/projects']);
  };
  ```
- Update the Route Definition
  ``` ts
  import { projectDetailGuard } from './core/projects/project-detail-guard';

  {
    path: 'projects/:name',
    loadComponent: () =>
      import('./pages/projects/project-detail/project-detail').then(m => m.ProjectDetail),
    canActivate: [projectDetailGuard]
  }
  ```
- Provide a ProjectsService
  ``` ts
  // src/app/services/projects.service.ts
  import { Injectable } from '@angular/core';

  @Injectable({ providedIn: 'root' })
  export class ProjectsService {
    private projects = ['angular', 'react', 'vue']; // Replace with real data

    getProjectNames(): string[] {
      return this.projects;
    }
  }
  ```
- Example:
    -   ✅ `/projects/angular` → loads `ProjectDetail`
    -   ✅ `/projects/react` → loads `ProjectDetail`
    -   ❌ `/projects/invalid` → user is redirected to `/projects`
- This ensures the app doesn't attempt to load invalid or non-existent project details, keeping navigation predictable and user-friendly.

## Next Steps  
- I will start development on the **Projects subsystem**.
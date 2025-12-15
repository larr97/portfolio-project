import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { projectDetailGuard } from './core/projects/project-detail-guard';

export const routes: Routes = [
  
  // Home (Eager)
  { path: '', component: Home, title: 'route.home' },

  // Projects (Eager, since it’s core to the app)
  { path: 'projects', component: Projects, title: 'route.projects' },
  // Project Detail (Lazy, loads only if a specific project is visited)
  { 
    path: 'projects/:slug', 
    loadComponent: () => import('./pages/projects/project-detail/project-detail').then(m => m.ProjectDetail),
    // no title here; will inherit parent route title
    canActivate: [projectDetailGuard]
  },

  // Blog (Lazy, heavier and less frequently visited)
  { 
    path: 'blog', 
    loadComponent: () => import('./pages/blog/blog').then(m => m.Blog), 
    title: 'route.blog' 
  },
  { 
    path: 'blog/post', 
    loadComponent: () => import('./pages/blog/blog-post/blog-post').then(m => m.BlogPost)
    // no title here; will inherit parent route title
  },

  // Docs (Lazy, not needed at startup)
  { 
    path: 'docs', 
    loadComponent: () => import('./pages/docs/docs').then(m => m.Docs), 
    title: 'route.docs' 
  },

  // Wildcard (Eager redirect)
  { path: '**', redirectTo: '' }
];
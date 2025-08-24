import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';

export const routes: Routes = [
  
  // Home (Eager)
  { path: '', component: Home, title: 'app.route.home' },

  // Projects (Eager, since it’s core to the app)
  { path: 'projects', component: Projects, title: 'app.route.projects' },
  // Project Detail (Lazy, loads only if a specific project is visited)
  { 
    path: 'projects/:name', 
    loadComponent: () => import('./pages/projects/project-detail/project-detail').then(m => m.ProjectDetail)
    // no title here; will inherit parent route title
  },

  // Blog (Lazy, heavier and less frequently visited)
  { 
    path: 'blog', 
    loadComponent: () => import('./pages/blog/blog').then(m => m.Blog), 
    title: 'app.route.blog' 
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
    title: 'app.route.docs' 
  },

  // Wildcard (Eager redirect)
  { path: '**', redirectTo: '' }
];
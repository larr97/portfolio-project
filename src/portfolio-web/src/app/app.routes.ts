import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { ProjectDetail } from './pages/projects/project-detail/project-detail';
import { Blog } from './pages/blog/blog';
import { BlogPost } from './pages/blog/blog-post/blog-post';
import { Docs } from './pages/docs/docs';

export const routes: Routes = [
  { path: '', component: Home },

  { path: 'projects', component: Projects, title: 'Projects' },
  { path: 'projects/:name', component: ProjectDetail, title: 'Project Detail' },

  { path: 'blog', component: Blog, title: 'Blog' },
  { path: 'blog/post', component: BlogPost, title: 'Blog Post' },

  { path: 'docs', component: Docs, title: 'Docs' },

  { path: '**', redirectTo: '' }
];
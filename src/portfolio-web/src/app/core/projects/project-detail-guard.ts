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
import { CanActivateFn, ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { ProjectsService } from './projects.service';

/**
 * Guard function to protect the Project Detail route.
 *
 * Checks if the project slug in the route exists in the list of available projects.
 * If the slug is valid, navigation is allowed. Otherwise, the user is redirected
 * to the Projects page.
 *
 * @param {ActivatedRouteSnapshot} route - The activated route snapshot containing route parameters.
 * @returns {boolean | UrlTree} Returns `true` if the project exists, allowing navigation.
 *                              Otherwise, returns a UrlTree to redirect to the Projects page.
 */
export const projectDetailGuard: CanActivateFn = ( route: ActivatedRouteSnapshot ): boolean | UrlTree => {
  const projectsService = inject(ProjectsService);
  const router = inject(Router);

  const projectName = route.paramMap.get('slug');
  const projects = projectsService.getProjectsSlugs();

  if (projectName && projects.includes(projectName)) {
    return true; // allow navigation
  }

  // redirect instead of returning false
  return router.createUrlTree(['/projects']);
};
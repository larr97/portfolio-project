import { Injectable } from '@angular/core';
import { Project } from '../projects/project.model';

/**
 * Service for managing projects in the portfolio application.
 *
 * Provides access to all projects, their slugs, and individual project lookup.
 *
 * @export
 * @class ProjectsService
 */
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  /**
   * List of projects available in the portfolio.
   * @private
   * @type {Project[]}
   */
  private projects: Project[];

  /**
   * Creates an instance of ProjectsService.
   * Initializes the projects list.
   */
  constructor() {
    this.projects = [
      new Project(
        1,
        'projects.angularPortfolio.name',
        'projects.angularPortfolio.description',
        'projects.angularPortfolio.summary',
        ['Angular', 'TypeScript', 'SCSS', 'HTML', 'Firebase', 'GitHub Actions', 'Material Design', 'Vercel'],
        'https://www.taylorswift.com',
        'angular-portfolio',
        ['https://cdn.abcotvs.com/dip/images/17508422_AP25224136692726.jpg']
      ),
      new Project(
        2,
        'projects.reactDashboard.name',
        'projects.reactDashboard.description',
        'projects.reactDashboard.summary',
        ['React', 'Node.js', 'Express', 'MongoDB', 'Material-UI', 'Chart.js', 'Heroku', 'GitHub'],
        null,
        'react-dashboard',
        ['https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2181107453-20241209114519432.jpg?q=w_3000,c_fill/f_webp']
      ),
    ];
   }

  /**
   * Returns all projects.
   * @returns {Project[]} List of projects.
   */
  public getProjects(): Project[] {
    return this.projects;
  }

  /**
   * Returns an array of project slugs.
   * @returns {string[]} List of project slugs.
   */
  public getProjectsSlugs(): string[] {
    return this.projects.map(p => p.getSlug());
  }

  /**
   * Finds a project by its slug.
   *
   * @param slug - The unique slug identifier of the project.
   * @returns {Project} The matching project.
   */
  public getProjectBySlug(slug: string): Project {
    return this.projects.find(p => p.getSlug() === slug)!;
  }

}
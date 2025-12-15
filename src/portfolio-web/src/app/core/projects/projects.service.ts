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
        ['https://assets.newsweek.com/wp-content/uploads/2025/08/2539116-taylor-swift-posing.jpg?w=1360&quality=75&webp=1']
      ),
      new Project(
        2,
        'projects.reactDashboard.name',
        'projects.reactDashboard.description',
        'projects.reactDashboard.summary',
        ['React', 'Node.js', 'Express', 'MongoDB', 'Material-UI', 'Chart.js', 'Heroku', 'GitHub'],
        null,
        'react-dashboard',
        ['https://publish.purewow.net/wp-content/uploads/sites/2/2024/10/taylor-swift-hub.jpg?resize=720%2C780']
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
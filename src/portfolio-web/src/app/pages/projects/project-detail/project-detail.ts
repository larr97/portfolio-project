import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../../../core/projects/projects.service';
import { Project } from '../../../core/projects/project.model';

/**
 * The ProjectDetail component displays details for a specific project.
 * It reads the project `:name` parameter from the route and stores it
 * in a reactive signal for use in the template.
 */
@Component({
  selector: 'app-project-detail',
  imports: [],
  templateUrl: './project-detail.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './project-detail.scss'
})
export class ProjectDetail {
  
  /**
   * Reactive signal holding the currently selected project.
   * 
   * Initially undefined until the route parameter (`slug`) is resolved.
   * Once the corresponding project is found via {@link ProjectsService},
   * the signal is updated, and the template automatically re-renders.
   *
   * @private
   * @type {WritableSignal<Project | undefined>}
   */
  private currentProject = signal<Project | undefined>(undefined);
  
  /**
   * Creates an instance of {@link ProjectDetail}.
   *
   * Subscribes to changes in the route parameters and updates
   * the `currentProject` signal whenever the `slug` parameter changes.
   *
   * @param {ProjectsService} projectsService - Service used to retrieve project data.
   * @param {ActivatedRoute} activatedRoute - Provides access to the current route and its parameters.
   */
  constructor(private projectsService: ProjectsService, private activatedRoute: ActivatedRoute) {
    // Access route parameters
    this.activatedRoute.params.subscribe((params) => {
      this.currentProject.set(this.projectsService.getProjectBySlug(params['slug']));
    });
  }

  /**
   * Retrieves the current project stored in the reactive signal.
   *
   * @returns {Project} The currently selected project.
   */
  public getCurrentProject(): Project {
    return this.currentProject()!;
  }

}
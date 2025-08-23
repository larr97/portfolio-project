import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * The ProjectDetail component displays details for a specific project.
 * It reads the project `:name` parameter from the route and stores it
 * in a reactive signal for use in the template.
 */
@Component({
  selector: 'app-project-detail',
  imports: [],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss'
})
export class ProjectDetail {
  
  /**
   * Holds the current project name extracted from the route parameters.
   * This is a reactive signal so the template will automatically update
   * when the value changes.
   */
  projectName = signal('');
  
  /**
   * ActivatedRoute is injected to access route parameters dynamically.
   */
  private activatedRoute = inject(ActivatedRoute);
  
  /**
   * Initializes the ProjectDetail component.
   * Subscribes to route parameter changes and updates `projectName`.
   */
  constructor() {
    // Access route parameters
    this.activatedRoute.params.subscribe((params) => {
      this.projectName.set(params['name']);
    });
  }

}
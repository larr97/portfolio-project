import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslatePipe } from "@ngx-translate/core";
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { Project } from '../../core/projects/project.model';
import { ProjectsService } from '../../core/projects/projects.service';
import { MatPaginatorModule } from '@angular/material/paginator';

/** 
 * Displays the projects gallery. 
 * 
 * Retrieves the available projects from the ProjectsService and renders 
 * each project using the ProjectCard component. 
 */
@Component({
  selector: 'app-projects',
  imports: [ 
    ProjectCard,
    TranslatePipe,
    MatPaginatorModule
  ],
  templateUrl: './projects.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './projects.scss'
})
export class Projects {

  /**
   * Creates an instance of the Projects component.
   *
   * @param router Angular Router used for navigation to project details.
   */
  constructor(private projectsService: ProjectsService) {}

  /**
   * Gets the full list of available projects from the service.
   *
   * @returns {Project[]} An array of `Project` objects.
   */
  public getProjectsList(): Project[] {
    return this.projectsService.getProjects();
  }   
  
}
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from "@ngx-translate/core";
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { Project } from '../../core/projects/project.model';
import { ProjectsService } from '../../core/projects/projects.service';

/**
 * The Projects component displays a gallery of projects.
 * Each project card includes a button or clickable area that navigates
 * to the corresponding project detail page.
 */
@Component({
  selector: 'app-projects',
  imports: [ 
    MatCardModule, 
    MatButtonModule, 
    ProjectCard,
    TranslatePipe
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
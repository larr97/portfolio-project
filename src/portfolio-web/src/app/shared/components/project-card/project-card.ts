import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Project } from '../../../core/projects/project.model';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

/**
 * Component to display a single project as a card.
 *
 * Shows project information such as title, summary, technologies, and media.
 * Supports layout reversal and provides actions to navigate to project detail
 * or open the project URL externally.
 *
 * @export
 * @class ProjectCard
 */
@Component({
  selector: 'app-project-card',
  imports: [MatCardModule, MatChipsModule, MatIconModule, MatButtonModule, TranslatePipe],
  templateUrl: './project-card.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './project-card.scss'
})
export class ProjectCard {
  
  /**
   * The project to display in this card.
   * This input is required.
   * 
   * @type {Project}
   */
  @Input({ required: true }) public project!: Project;

  /**
   * Whether to reverse the layout of the card (e.g., image on left/right).
   * Optional; defaults to false.
   * 
   * @type {boolean}
   */
  @Input() reverseLayout = false;

  /**
   * Creates an instance of ProjectCard.
   *
   * @param {Router} router Angular Router for navigation.
   */
  constructor(private router: Router) {}

  /**
   * Navigates to the detail page of a specific project within the app.
   *
   * @param {string} slug - The unique identifier (slug) of the project to display.
   * @returns {void}
   */
  public navigateToProjectDetail(slug: string): void {
    this.router.navigate(['/projects', slug]);
  }

  /**
   * Opens the given project URL in a new browser tab.
   *
   * @param {string} url - The external URL of the project to open.
   * @returns {void}
   */
  public openProjectUrl(url: string): void {
    window.open(url, '_blank', 'noopener');
  }

}
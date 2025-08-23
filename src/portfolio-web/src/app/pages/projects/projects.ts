import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

/**
 * The Projects component displays a gallery of projects.
 * Each project card includes a button or clickable area that navigates
 * to the corresponding project detail page.
 */
@Component({
  selector: 'app-projects',
  imports: [ MatCardModule, MatButtonModule ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {

  /**
   * Creates an instance of the Projects component.
   *
   * @param router Angular Router used for navigation to project details.
   */
  constructor(private router: Router) {}

  /**
   * Navigates to the detail page of a specific project.
   *
   * @param name The unique identifier (slug) of the project to display.
   *
   * @example
   * this.goToDetail('portfolio');
   * // Navigates to /projects/portfolio
   */
  goToDetail(name: String) {
    this.router.navigate(['/projects', name]);
  }
  
}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projects: string[] = ['angular', 'react', 'vue'];

  constructor() { }

  public getProjectNames(): string[] {
    return this.projects;
  }
}
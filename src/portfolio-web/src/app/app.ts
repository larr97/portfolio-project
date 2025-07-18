import { Component, Inject, Renderer2 } from '@angular/core';
import { TranslatePipe, TranslateDirective } from "@ngx-translate/core";
import { RouterOutlet } from '@angular/router';
import { LanguageSwitcher } from './shared/components/language-switcher/language-switcher';
import { DOCUMENT } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

/**
 * The root component of the application.
 *
 * Acts as the main container including routing and other application features.
 *
 * @export
 * @component
 */
@Component({
  selector: 'app-root',
  imports: [
    TranslatePipe, 
    TranslateDirective,
    RouterOutlet,
    LanguageSwitcher,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
  protected currentTheme = 'light'; // fallback if nothing in storage

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2) {
    
    let savedTheme = this.currentTheme;

    if (typeof window !== 'undefined' && window.localStorage) {
      savedTheme = localStorage.getItem('theme') || this.currentTheme;
    }

    // Let changeTheme handle everything (DOM + state + storage)
    this.changeTheme(savedTheme);
  }

  public changeTheme(theme: string): void {
    if (this.currentTheme === theme) return;

    // Remove old class, add new one
    this.renderer.removeClass(this.document.body, this.currentTheme);
    this.renderer.addClass(this.document.body, theme);

    // Update internal state
    this.currentTheme = theme;

    // Persist to localStorage
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('theme', theme);
    }
  }
}
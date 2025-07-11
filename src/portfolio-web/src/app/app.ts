import { Component } from '@angular/core';
import { TranslatePipe, TranslateDirective } from "@ngx-translate/core";
import { RouterOutlet } from '@angular/router';
import { LanguageSwitcher } from './shared/components/language-switcher/language-switcher';

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
    LanguageSwitcher
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
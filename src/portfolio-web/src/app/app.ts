import { Component } from '@angular/core';
import { TranslatePipe, TranslateDirective } from "@ngx-translate/core";
import { RouterOutlet } from '@angular/router';
import { LanguageSwitcher } from './shared/components/language-switcher/language-switcher';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ThemeSwitcher } from './shared/components/theme-switcher/theme-switcher';
import { DownloadResumeButton } from "./shared/components/download-resume-button/download-resume-button";

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
    MatButtonModule,
    MatToolbarModule,
    LanguageSwitcher,
    ThemeSwitcher,
    DownloadResumeButton
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
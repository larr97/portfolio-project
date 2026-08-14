import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageSwitcher } from './shared/components/language-switcher/language-switcher';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ThemeSwitcher } from './shared/components/theme-switcher/theme-switcher';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

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
    RouterOutlet,
    MatButtonModule,
    MatToolbarModule,
    LanguageSwitcher,
    ThemeSwitcher,
    RouterLink,
    TranslatePipe
],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.scss'
})
export class App {}
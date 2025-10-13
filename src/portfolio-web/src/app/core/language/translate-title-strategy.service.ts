import { Injectable } from '@angular/core';
import { TitleStrategy, RouterStateSnapshot } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

/**
 * A custom implementation of Angular's {@link TitleStrategy} that integrates
 * with `@ngx-translate/core` to provide translated page titles.
 *
 * This strategy retrieves the `title` key defined in route data,
 * translates it instantly using the provided translation service,
 * and updates the browser's document title accordingly.
 *
 * With this strategy, the document title will automatically be translated
 * according to the currently active language in `TranslateService`.
 */
@Injectable({
  providedIn: 'root'
})
export class TranslateTitleStrategy extends TitleStrategy {

  /**
   * Creates an instance of `TranslateTitleStrategy`.
   *
   * @param translate The translation service used to fetch localized strings.
   * @param title The Angular service used to set the document title.
   */
  constructor(
    private readonly translate: TranslateService,
    private readonly title: Title
  ) {
    super();
  }

  /**
   * Overrides the default title update behaviour to apply translation.
   *
   * @param snapshot The current {@link RouterStateSnapshot}, used to
   * extract the route data and obtain the `title` key.
   *
   * @remarks
   * - Uses `buildTitle(snapshot)` to read the route's `title` property.
   * - Translates the retrieved key instantly with `translate.instant()`.
   * - Updates the document title via `Title.setTitle()`.
   */
  override updateTitle(snapshot: RouterStateSnapshot): void {
    const titleKey = this.buildTitle(snapshot); // Get `title` from route data
    if (titleKey) {
      const translated = this.translate.instant(titleKey);
      this.title.setTitle(translated);
    }
  }
}
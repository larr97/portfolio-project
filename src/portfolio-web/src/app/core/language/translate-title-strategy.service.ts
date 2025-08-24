import { Injectable } from '@angular/core';
import { TitleStrategy, RouterStateSnapshot } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TranslateTitleStrategy extends TitleStrategy {

  constructor(
    private readonly translate: TranslateService,
    private readonly title: Title
  ) {
    super();
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const titleKey = this.buildTitle(snapshot); // get `title` from route data
    if (titleKey) {
      const translated = this.translate.instant(titleKey);
      this.title.setTitle(translated);
    }
  }
}
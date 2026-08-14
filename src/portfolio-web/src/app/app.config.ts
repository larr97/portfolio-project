import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient, withXhr } from "@angular/common/http";
import { provideTranslateService, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { provideRouter, TitleStrategy } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay, withNoIncrementalHydration } from '@angular/platform-browser';
import { TranslateTitleStrategy } from './core/language/translate-title-strategy.service';

/**
 * Factory function for creating a `TranslateHttpLoader` instance.
 *
 * This loader retrieves translation files from the `/i18n` directory
 * at runtime, using standard HTTP requests.
 *
 * @param http The Angular `HttpClient` instance used to fetch translation files.
 * @returns A configured `TranslateHttpLoader` instance that loads
 * translation JSON files from the `./i18n/` folder.
 */
const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) =>
    new TranslateHttpLoader(http, './i18n/', '.json');

/**
 * The main Angular application configuration for the **browser environment**.
 *
 * This configuration sets up essential Angular providers including:
 * - **Error Handling:** Global browser error listeners.
 * - **Change Detection:** Zone.js configuration for efficient event coalescing.
 * - **HTTP Client:** For API communication and translation loading.
 * - **Internationalization (i18n):** `@ngx-translate` integration with
 *   `TranslateHttpLoader` to load language files dynamically.
 * - **Routing:** Application routes defined in `app.routes`.
 * - **Dynamic Title Management:** `TranslateTitleStrategy` for translated page titles.
 * - **Hydration Support:** Enables reusing server-rendered DOM with event replay
 *   for SSR (Server-Side Rendering) compatibility.
 *
 * @see {@link ApplicationConfig} — Angular’s top-level app configuration interface.
 * @see {@link provideTranslateService} — Provides translation support.
 * @see {@link TranslateTitleStrategy} — Handles translated page titles.
 * @see {@link provideClientHydration} — Enables client-side hydration after SSR.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    // Global browser error listener setup
    provideBrowserGlobalErrorListeners(),
    // Optimised change detection with event coalescing
    provideZoneChangeDetection({ eventCoalescing: true }),
    // HTTP client provider for API and translation requests
    provideHttpClient(withXhr()),
    // Translation service setup using ngx-translate and HTTP loader
    provideTranslateService({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    // Routing configuration
    provideRouter(routes),
    // Use custom title strategy that applies translated page titles
    { provide: TitleStrategy, useClass: TranslateTitleStrategy },
    // Enable client-side hydration with event replay (SSR support)
    provideClientHydration(withEventReplay(), withNoIncrementalHydration())
  ]
};
import { RenderMode, ServerRoute } from '@angular/ssr';

/**
 * Defines server-side rendering (SSR) routes for the Angular application.
 *
 * This configuration specifies how each route should be rendered
 * by the Angular server, allowing you to choose between:
 * - `RenderMode.Prerender` — generates static HTML at build time.
 * - `RenderMode.Server` — renders HTML dynamically at runtime.
 *
 * @remarks
 * In this project, all routes (`'**'`) are configured to use
 * **prerendering**, which means the application will generate
 * static pages for all paths during the build process.
 *
 * @see {@link ServerRoute} for available route configuration options.
 * @see {@link RenderMode} for supported rendering modes.
 */
export const serverRoutes: ServerRoute[] = [
  {
    /** Matches all application routes not explicitly defined elsewhere. */
    path: '**',
    /** Use prerender mode to statically generate HTML for all matched routes. */
    renderMode: RenderMode.Prerender
  }
];
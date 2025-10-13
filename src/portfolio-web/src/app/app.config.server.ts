import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';

/**
 * Server-specific Angular application configuration.
 *
 * This configuration enables **server-side rendering (SSR)** and
 * registers route handling defined in `serverRoutes`.
 *
 * @remarks
 * - Uses {@link provideServerRendering} to set up Angular's SSR infrastructure.
 * - Wraps {@link serverRoutes} with {@link withRoutes} to define
 *   how server routes are handled (e.g. prerendering or dynamic rendering).
 *
 * This configuration is merged with the base `appConfig` to create
 * a unified application configuration that supports both client and server.
 */
const serverConfig: ApplicationConfig = {
  providers: [
    // Enables server-side rendering and attaches custom server routes.
    provideServerRendering(withRoutes(serverRoutes))
  ]
};

/**
 * The final merged Angular application configuration.
 *
 * Combines the base browser configuration (`appConfig`) with
 * the server-specific configuration (`serverConfig`), producing
 * a complete setup for an Angular Universal application.
 *
 * @see {@link mergeApplicationConfig}
 * @see {@link appConfig}
 * @see {@link serverConfig}
 */
export const config = mergeApplicationConfig(appConfig, serverConfig);
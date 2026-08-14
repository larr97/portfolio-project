import { provideZoneChangeDetection } from "@angular/core";
import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';

/**
 * Bootstraps the Angular application in a **server environment**.
 *
 * This function initializes the root `App` component using the
 * server-specific application configuration (`app.config.server`),
 * which includes server-side rendering (SSR) providers and settings.
 *
 * @remarks
 * This file serves as the **entry point for Angular Universal**,
 * enabling server-side rendering with `@angular/ssr`.
 *
 * @returns A promise that resolves when the Angular application has been bootstrapped.
 *
 * @see {@link bootstrapApplication} — Used to start a standalone Angular app.
 * @see {@link config} — Server configuration merged from app and SSR settings.
 */
const bootstrap = (context: BootstrapContext) => bootstrapApplication(App, {...config, providers: [provideZoneChangeDetection(), ...config.providers]}, context);

/**
 * Default export for the Angular server bootstrap function.
 *
 * This export is required by Angular Universal’s server runtime
 * to start the application when handling incoming requests.
 */
export default bootstrap;
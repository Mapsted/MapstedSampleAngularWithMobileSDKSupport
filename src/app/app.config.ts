import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { MapstedAwesomeCordovaPlugin } from 'mapsted-awesome-cordova-plugin/ngx';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), MapstedAwesomeCordovaPlugin]
};

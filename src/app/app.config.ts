import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter ,RouterLink,ActivatedRoute} from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { HighlightCuisineDirective } from './directives/highlight-cuisine.directive';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(), // HTTP client for API requests
    provideRouter(routes), // Router configuration
    provideZoneChangeDetection(), // Optional: Zone change detection strategy
    HighlightCuisineDirective // Custom directive
  ],
};

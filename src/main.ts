import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent} from './app/app';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule) // <-- add this
  ]
}).catch(err => console.error(err));

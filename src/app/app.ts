import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ContactsListComponent } from './contacts-list/contacts-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContactsListComponent, HttpClientModule], // <-- import HttpClientModule here
  template: `<app-contacts-list></app-contacts-list>`,
})
export class AppComponent {}

import { Routes } from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list';
import { AddContactComponent } from './add-contact/add-contact';
import { ContactDetails } from './contact-details/contact-details';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
  { path: '', redirectTo: 'contacts', pathMatch: 'full' },
  { path: 'contacts', component: ContactsListComponent },
  { path: 'add', component: AddContactComponent },
  { path: 'details/:id', component: ContactDetails }
];

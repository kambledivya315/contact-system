import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.html',
  styleUrls: ['./add-contact.css']
})
export class AddContactComponent {
  contact = {
    name: '',
    email: '',
    phone: ''
  };

  constructor(private contactService: ContactService, private router: Router) {}

  onSubmit() {
    this.contactService.addContact(this.contact).subscribe(() => {
      this.router.navigate(['/contacts']); // redirect back to list
    });
  }
}

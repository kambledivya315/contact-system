import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [
    { id: 1, name: 'Alice', phone: '1234567890', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', phone: '9876543210', email: 'bob@mail.com' }
  ];
   private apiUrl = 'http://localhost:8080/api/contacts'; 
    getContacts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getContactById(id: number): Contact | undefined {
    return this.contacts.find(c => c.id === id);
  }

  constructor(private http: HttpClient) {}

  // Return Observable<Contact>
  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${this.apiUrl}/contacts`, contact);
  }
}

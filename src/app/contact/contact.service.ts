import { Contact } from './contact.model';
import { backendUrl } from './../config/config-url';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  listContact() {
    return this.http.get<Contact[]>(backendUrl + '/list');
  }

  addContact(formData: FormData) {
    return this.http.post<Contact>(backendUrl + '/add', formData);
  }
}

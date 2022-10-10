import { ContactService } from './contact.service';
import { AddContactPopupComponent } from './add-contact-popup/add-contact-popup.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Contact } from './contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  isLoading: boolean;
  errorMessage: string;
  contacts: Contact[];
  constructor(
    private dialog: MatDialog,
    private contactService: ContactService
  ) {}

  ngOnInit() {
    this.fetchTheContacts();
  }

  addContactPopup() {
    const dialogRef = this.dialog.open(AddContactPopupComponent, {
      width: '50%',
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe({
      next: (contact: Contact) => {
        if (contact) {
          this.isLoading = true;
          this.contacts.push(contact);
          this.sortTheContacts(this.contacts);
          this.isLoading = false;
        }
      },
    });
  }

  fetchTheContacts() {
    this.isLoading = true;
    this.contactService.listContact().subscribe({
      next: (contacts: Contact[]) => {
        this.sortTheContacts(contacts);
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.error;
      },
    });
  }

  sortTheContacts(contacts: Contact[]) {
    contacts.sort(
      (a, b) =>
        new Date(b.lastContactDate).getTime() -
        new Date(a.lastContactDate).getTime()
    );
    this.contacts = contacts;
  }
}

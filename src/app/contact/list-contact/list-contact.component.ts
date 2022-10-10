import { backendUrl } from './../../config/config-url';
import { ViewContactPopupComponent } from './../view-contact-popup/view-contact-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { Contact } from './../contact.model';
import { ContactService } from './../contact.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css'],
})
export class ListContactComponent implements OnInit {
  backendUrl = backendUrl;
  @Input('contacts') contacts: Contact[];
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  viewDetailPopup(contact: Contact) {
    this.dialog.open(ViewContactPopupComponent, {
      width: '50%',
      autoFocus: false,
      data: contact,
    });
  }
}

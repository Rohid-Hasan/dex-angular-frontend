import { backendUrl } from './../../config/config-url';
import { Contact } from './../contact.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-contact-popup',
  templateUrl: './view-contact-popup.component.html',
  styleUrls: ['./view-contact-popup.component.css'],
})
export class ViewContactPopupComponent implements OnInit {
  backendUrl = backendUrl;
  constructor(
    private dialogRef: MatDialogRef<ViewContactPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public contact: Contact
  ) {}

  ngOnInit() {}
}

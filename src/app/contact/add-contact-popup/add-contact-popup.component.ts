import { ContactService } from './../contact.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-add-contact-popup',
  templateUrl: './add-contact-popup.component.html',
  styleUrls: ['./add-contact-popup.component.css'],
})
export class AddContactPopupComponent implements OnInit {
  addContactForm: FormGroup;
  image: File;
  errorMessage: string;
  isSubmitLoading: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddContactPopupComponent>,
    private contactService: ContactService
  ) {}

  ngOnInit() {
    this.addContactForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastContactDate: ['', Validators.required],
    });
  }

  onSubmit() {
    this.isSubmitLoading = true;
    const formData = new FormData();
    formData.append('name', this.addContactForm.value.name);
    formData.append(
      'lastContactDate',
      this.addContactForm.value.lastContactDate
    );
    formData.append('image', this.image);
    this.contactService.addContact(formData).subscribe({
      next: (res: Contact) => {
        this.isSubmitLoading = false;
        this.dialogRef.close(res);
      },
      error: (err) => {
        this.isSubmitLoading = false;
        this.errorMessage = err.error;
      },
    });
  }

  fileSelected(event: any) {
    this.image = event.target.files[0];
  }
}

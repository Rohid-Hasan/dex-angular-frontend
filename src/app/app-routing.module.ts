import { ContactComponent } from './contact/contact.component';
import { AddContactPopupComponent } from './contact/add-contact-popup/add-contact-popup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: ContactComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactStoreService } from './contact/services/contact-store.service';
import { ContactListComponent } from './contact/contact-list/contact-list.component'
import { ContactListItemComponent } from './contact/contact-list/contact-list-item.component'

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ContactStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }

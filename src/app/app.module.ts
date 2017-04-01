import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialRootModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

import {AppComponent} from './app.component';
import {ContactStoreService} from './contact/services/contact-store.service';
import {ContactListComponent} from './contact/contact-list/contact-list.component';
import {ContactListItemComponent} from './contact/contact-list/contact-list-item.component';
import {NewContactDialogComponent} from './contact/new-contact/new-contact-dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    NewContactDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialRootModule,
    FlexLayoutModule
  ],
  entryComponents: [NewContactDialogComponent],
  providers: [ContactStoreService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

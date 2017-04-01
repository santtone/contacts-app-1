import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialRootModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

import {AppComponent} from './app.component';
import {ContactLocalStorageService} from './contact/services/contact-localstorage.service';
import {ContactService} from './contact/services/contact.service';
import {DialogService} from './utils/dialog.service'
import {ContactListComponent} from './contact/contact-list/contact-list.component';
import {ContactListItemComponent} from './contact/contact-list/contact-list-item.component';
import {ContactDialogComponent} from './contact/contact-dialog/contact-dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialRootModule,
    FlexLayoutModule
  ],
  entryComponents: [ContactDialogComponent],
  providers: [DialogService, ContactService, ContactLocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

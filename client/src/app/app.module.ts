//angular modules
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule, Routes}   from '@angular/router';
//other modules
import 'rxjs/add/operator/toPromise';
import {NgPipesModule} from 'ngx-pipes';
import 'hammerjs';
import 'lodash';
//components
import {AppComponent} from './app.component';
import {ContactListComponent} from './contact/contact-list/contact-list.component';
import {ContactListItemComponent} from './contact/contact-list/contact-list-item.component';
import {ContactDialogComponent} from './contact/contact-dialog/contact-dialog.component';
import { MapDialogComponent } from './map/map-dialog/map-dialog.component';
//services
import {ContactLocalStorageService} from './contact/services/contact-localstorage.service';
import {ContactService} from './contact/services/contact.service';
import {ContactApiService} from './contact/services/contact-api.service';
import {DialogService} from './utils/dialog.service'
//pipes
import { ContactAddressPipe } from './contact/pipes/contact-address.pipe';
import { LoginComponent } from './user/login/login.component';
import { ContactsComponent } from './contact/contacts.component'
import {DeviceService} from "./utils/device.service";

const routes: Routes = [
  { path: '', redirectTo: 'contacts', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'contacts', component: ContactsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactDialogComponent,
    MapDialogComponent,
    ContactAddressPipe,
    LoginComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    NgPipesModule,
    RouterModule.forRoot(routes)
  ],
  entryComponents: [ContactDialogComponent, MapDialogComponent],
  providers: [DialogService, ContactService, ContactLocalStorageService, ContactApiService, DeviceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

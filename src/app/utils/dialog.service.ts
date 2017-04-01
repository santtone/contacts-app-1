import { Injectable } from '@angular/core';
import {MdDialog} from "@angular/material";
import {Contact} from "../contact/contact";
import {ContactDialogComponent} from "../contact/contact-dialog/contact-dialog.component";
import {MapDialogComponent} from "../map/map-dialog/map-dialog.component";

@Injectable()
export class DialogService {

  constructor(private dialog: MdDialog) { }

  public contactDialog(contact?: Contact){
    let dialogRef = this.dialog.open(ContactDialogComponent);
    dialogRef.componentInstance.contact = contact;
    return dialogRef.afterClosed();
  }

  public mapDialog(address: string){
    let dialogRef = this.dialog.open(MapDialogComponent);
    dialogRef.componentInstance.address = address;
    return dialogRef.afterClosed();
  }
}

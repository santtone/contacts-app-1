import {Component, OnInit} from '@angular/core';
import {DialogService} from "../utils/dialog.service";
import {Contact} from "./contact";
import {ActivatedRoute} from "@angular/router";
import {ContactService} from "./services/contact.service";

@Component({
  selector: 'ca-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: Contact;

  constructor(private route: ActivatedRoute, private contactService: ContactService) {
    this.contact = new Contact();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id =+ params['id'];
      this.contactService.findContactById(id).subscribe(contact => {
        this.contact = contact;
      })
    });
  }

}

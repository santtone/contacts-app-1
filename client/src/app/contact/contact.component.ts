import {Component, OnInit} from '@angular/core';
import {Contact} from "./contact";
import {ActivatedRoute, Router} from "@angular/router";
import {ContactService} from "./services/contact.service";
import {ToolbarProperties, ToolbarService} from "../utils/toolbar.service";

@Component({
  selector: 'ca-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: Contact;
  isValid: boolean;

  constructor(private route: ActivatedRoute, private router: Router,
              private contactService: ContactService, private  toolbar: ToolbarService) {
    this.contact = new Contact();
    this.isValid = false;
  }

  save() {
    this.contactService.saveContact(this.contact).subscribe(data => this.router.navigate(['/contacts']));
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.toolbar.create(new ToolbarProperties(id ? 'Edit Contact' : 'New Contact', this.save.bind(this), true, true));
      if (id) {
        this.contactService.findContactById(id).subscribe(contact => {
          this.contact = contact || new Contact();
        });
      } else {
        this.contact = new Contact();
      }
      this.validate();
    });
  }

  validate() {
    let valid = !!(this.contact.firstName && this.contact.lastName);
    if (valid != this.isValid) {
      this.toolbar.disableSubmit(!valid);
      this.isValid = valid;
    }
  }

}

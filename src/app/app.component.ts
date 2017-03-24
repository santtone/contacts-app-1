import { Component } from '@angular/core';
import {Contact} from "./contact/contact";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  contact = new Contact('Sami', 'Anttonen', '040123456', 'Losojätkäntie 1', 'Kouvola');

}

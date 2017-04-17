import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from "../user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(private router: Router) { }

  ngOnInit() {
    this.user = new User();
  }

  login(){
    this.router.navigate(['/contacts']);
  }

}

import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from "../user";
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.user = new User();
  }

  login() {
    this.userService.login(this.user.username, this.user.password).subscribe(() => {
      this.router.navigate(['/contacts']);
    });
  }

}

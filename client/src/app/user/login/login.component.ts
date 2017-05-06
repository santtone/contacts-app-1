import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from "../user";
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {ToolbarProperties, ToolbarService} from "../../toolbar/toolbar.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(private userService: UserService, private router: Router, private toolbar: ToolbarService) {
  }

  ngOnInit() {
    this.user = new User();
    this.toolbar.create(new ToolbarProperties({hidden: true}));
  }

  login() {
    this.userService.login(this.user.username, this.user.password).subscribe(() => {
      this.router.navigate(['/contacts']);
    });
  }

}

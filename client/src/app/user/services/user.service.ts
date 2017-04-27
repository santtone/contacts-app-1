import { Injectable } from '@angular/core';
import {AuthenticationService} from "./authentication.service";
import {UserApiService} from "./user-api.service";

@Injectable()
export class UserService {

  constructor(private auth: AuthenticationService, private userApiService: UserApiService) { }

  login(username: string, password: string){
    return this.auth.authenticate(username, password).flatMap(() =>{
      return this.userApiService.login();
    });
  }
}

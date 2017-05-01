import {Injectable} from '@angular/core';
import {AuthenticationService} from "./authentication.service";
import {UserApiService} from "./user-api.service";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService {

  constructor(private auth: AuthenticationService, private userApiService: UserApiService) {
  }

  login(username: string, password: string) {
    if (environment.endpointUrl) {
      return this.auth.authenticate(username, password).flatMap(() => {
        return this.userApiService.login();
      });
    } else {
      return Observable.of(null);
    }
  }
}

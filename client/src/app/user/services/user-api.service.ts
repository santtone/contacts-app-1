import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {environment} from "../../../environments/environment";
import {HttpService} from "../../utils/http.service";

@Injectable()
export class UserApiService {

  private url: string = environment.endpointUrl + '/user';

  constructor(private http: HttpService) {
  }

  login() {
    return this.http.put(this.url, null);
  }

}

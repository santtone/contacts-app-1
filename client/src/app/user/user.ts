export class User {

  firstName: string;
  lastName: string;
  username: string;
  password: string;

  constructor(firstName?: string, lastName?: string, userName?: string, password?: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = userName;
    this.password = password;
  }

}

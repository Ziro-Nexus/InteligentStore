export class Login{
  email: string;
  password: string;

  constructor(cEmail: string = '', cPassword: string = '') {
    this.email = cEmail;
    this.password = cPassword; 
  }
}

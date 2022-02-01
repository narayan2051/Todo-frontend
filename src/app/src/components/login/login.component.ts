import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthServiceService } from '../../services/auth/basic-auth-service.service';
import { HardCodedAuthenticationService } from '../../services/hard-coded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(
    private router: Router,
    private basicAuth: BasicAuthServiceService
  ) {}

  ngOnInit(): void {}

  handleSubmit() {
    this.basicAuth.authenticate(this.username, this.password).subscribe(
      (res) => {
        this.router.navigate(['welcome', this.username]);
      },
      (err) => {
        this.invalidLogin = true;
      }
    );

    // if(this.basicAuth.authenticate(this.username,this.password)){
    //  this.route.navigate(['welcome',this.username]);
    // }else{
    //   this.invalidLogin=true;
    // }
  }
}

export interface LoginData {
  userName: string;
  password: string;
}

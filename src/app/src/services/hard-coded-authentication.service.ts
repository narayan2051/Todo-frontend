import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HardCodedAuthenticationService {
  constructor() {}

  authenticate(user: string, password: string) {
    if (user === 'narayan' && password === 'dummy') {
      sessionStorage.setItem("authUser",user);
      return true;
    } else return false;
  }

  isUserLoggedIn(){
    let user= sessionStorage.getItem("authUser");
    return user!==null;
  }

  logout(){
    sessionStorage.clear();
  }
}

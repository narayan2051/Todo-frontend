import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { LoginData } from '../../components/login/login.component';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root',
})
export class BasicAuthServiceService {
  constructor(private dataService: DataService) {}

  authenticate(user: string, password: string) {
    let data: LoginData = {
      userName: user,
      password: password,
    };

    return this.dataService.login(data).pipe(
      map((res:any) => {
        sessionStorage.setItem('token', res.data);
        sessionStorage.setItem('authUser', 'Narayan');
        return res;
      })
    );
  }

  buildToken(data: LoginData) {
    return 'Basic ' + window.btoa(data.userName + ':' + data.password);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authUser');
    return user !== null;
  }

  logout() {
    sessionStorage.clear();
  }
}

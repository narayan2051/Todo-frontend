import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './src/components/welcome/welcome.component';
import { LoginComponent } from './src/components/login/login.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './src/components/error/error.component';
import { ListTodosComponent } from './src/components/list-todos/list-todos.component';
import { MenuComponent } from './src/components/menu/menu.component';
import { FooterComponent } from './src/components/footer/footer.component';
import { LogoutComponent } from './src/components/logout/logout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddTodoComponent } from './src/components/add-todo/add-todo.component';
import { HttpInterceptorService } from './src/services/http/http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    AddTodoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

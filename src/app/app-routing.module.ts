import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './src/components/add-todo/add-todo.component';
import { ErrorComponent } from './src/components/error/error.component';
import { ListTodosComponent } from './src/components/list-todos/list-todos.component';
import { LoginComponent } from './src/components/login/login.component';
import { LogoutComponent } from './src/components/logout/logout.component';
import { WelcomeComponent } from './src/components/welcome/welcome.component';
import { RouteGuardServiceService } from './src/route-guard-service.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'welcome/:name',
    component: WelcomeComponent,
    canActivate: [RouteGuardServiceService],
  },
  {
    path: 'list-todo',
    component: ListTodosComponent,
    canActivate: [RouteGuardServiceService]
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [RouteGuardServiceService],
  },
  {
    path: 'todos/:id',
    component: AddTodoComponent,
    canActivate: [RouteGuardServiceService],
  },

  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ToDo } from '../components/list-todos/list-todos.component';
import { LoginData } from '../components/login/login.component';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  BASE_URL: string = 'http://localhost:8080';
  url: string = this.BASE_URL + '/todos';

  constructor(private client: HttpClient) {}

  getWelcomeMessage() {
    return this.client.get(this.url);
  }

  getAllTodos(): any {
    return this.client.get<ToDo>(`${this.url}/narayan`);
  }
  deleteTodo(id: number) {
    return this.client.delete(`${this.url}/narayan/${id}`);
  }
  getTodo(id: any) {
    return this.client.get<ToDo>(`${this.url}/narayan/${id}`);
  }
  update(todo: ToDo, id: number) {
    return this.client.put<ToDo>(`${this.url}/narayan/${id}`, todo);
  }
  save(todo: ToDo) {
    return this.client.post<ToDo>(`${this.url}/narayan`, todo);
  }
  login(data: LoginData) {
    return this.client.post(`${this.BASE_URL}/auth`, data);
  }
}

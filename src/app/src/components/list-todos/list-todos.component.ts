import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent implements OnInit {
  items: ToDo[] = [];
  message: string = '';

  constructor(private service: DataService, private route: Router) {}

  ngOnInit(): void {
    this.refreshTodos();
  }
  deleteTodo(id: number) {
    this.service.deleteTodo(id).subscribe((res: any) => {
      this.refreshTodos();
      this.message = `Successfully Deleted of id ${id}`;
    });
  }
  refreshTodos() {
    this.service.getAllTodos().subscribe((res: ToDo[]) => {
      this.items = res;
    });
  }

  updateTodo(id: number) {
    this.route.navigate(['todos', id]);
  }

  addToDo(id:number) {
    this.route.navigate(['todos',id])
  }
}

export class ToDo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public date: Date
  ) {}
}

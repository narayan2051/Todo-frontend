import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { ToDo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  id!: number;
  todo: ToDo;
  message='';

  constructor(private route: ActivatedRoute, private service: DataService, private router:Router) {
    this.todo = new ToDo(0, '', false, new Date());
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if(this.id!=-1)
    this.service.getTodo(this.id).subscribe((res: ToDo) => {
      this.todo = res;
      this.todo.date = new Date(res.date);
    });
  }

  submitToDo() {
    console.log(this.id)
   if(this.id==-1){
    this.service.save(this.todo).subscribe((res:ToDo)=>{
      this.message='Successfully Saved';
      this.router.navigate(['list-todo']);
   })
    }
     else {
      this.service.update(this.todo,this.id).subscribe((res:ToDo)=>{
        this.message='Successfully Updated';
        this.router.navigate(['list-todo']);
     })
     }
  
   }
}

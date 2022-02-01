import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  name:string | undefined;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.name=this.route.snapshot.params['name'];
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  name: string | undefined;
  constructor(private route: ActivatedRoute, private service: DataService) {}

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
  }

  getHello() {
    this.service.getWelcomeMessage().subscribe((res) => {
      console.log(res);
    });
  }
}

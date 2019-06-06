import { Component, OnInit } from '@angular/core';
import { SharedDataServiceService } from '../shared-data-service.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private userData:SharedDataServiceService) { }

  ngOnInit() {
  }
  user = this.userData.getLoginData().name;
}

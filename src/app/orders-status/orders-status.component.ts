import { Component, Input, OnInit } from '@angular/core';
import faker from 'faker';
import { Orders } from '../orders-received/_datatypes';

@Component({
  selector: 'app-orders-status',
  templateUrl: './orders-status.component.html',
  styleUrls: ['./orders-status.component.css']
})
export class OrdersStatusComponent implements OnInit {

  constructor() { }
  @Input() 
  ctMsg : Orders;
  profile: any = faker.image.avatar();
  ngOnInit(): void {
  }

}

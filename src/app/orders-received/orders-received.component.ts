import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
import { animate, state, style, transition, trigger } from '@angular/animations';
import faker from 'faker';

import { Orders } from './_datatypes';

@Component({
  selector: 'app-orders-received',
  templateUrl: './orders-received.component.html',
  styleUrls: ['./orders-received.component.css']
  
})
export class OrdersReceivedComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'customerName', 'itemsOrdered', 'totalAmount', 'orderStatus', 'profile'];
  dataSource = ORDERED_DATA;
  content: Orders = null;
  showInfo:boolean = false;
  orderStatus:string[] =['Received', 'Preparing', 'In-Transit','Delivered'];
  expandedElement: any;

  constructor() { }

  ngOnInit(): void {
  }
  showMoreInfo(element: Orders){
    this.content = element;
    this.showInfo = true;
  }

  isExpansionDetailRow(i: number, row: Object) : boolean {
    console.log("row.hasOwnProperty('detailRow'): ", row.hasOwnProperty('detailRow'));
    return row.hasOwnProperty('detailRow');
  }
   
  onChangeStatus(element){
    let orderStatusIndex = _.findIndex(this.orderStatus, (e) => { 
      return e == element.orderStatus; 
  }, 0); 
    const dataSrcIndex = _.findIndex(this.dataSource, {id:element.id});
    if(orderStatusIndex+1 < this.orderStatus.length) {
      this.dataSource[dataSrcIndex].orderStatus = this.orderStatus[orderStatusIndex+1];
      if(orderStatusIndex+1=== this.orderStatus.length-1){
        this.dataSource[dataSrcIndex].disableStatus = true;
      } 
    }

  }
}

const ORDERED_DATA: Orders[] = [
  {id: 1, customerName: 'Sam Curran', itemsOrdered: 1, profile: faker.image.avatar(),
  totalAmount: 1400, orderStatus: 'Received', 
  address: "Street:" + faker.address.streetName()+" \n City- "+ faker.address.city() + "\n Country- "+ faker.address.country()+ "\nPinCode - "+ faker.address.zipCode(),
  description: faker.lorem.paragraphs(),
  items:'4 Pizza, 1 Burgers, 3 Sandwich',
  disableStatus:false},
  {id: 2, customerName: 'Aaron Finch', itemsOrdered: 4, profile: faker.image.avatar(),
  address: "Street:" + faker.address.streetName()+" \n City- "+ faker.address.city() + "\n Country- "+ faker.address.country()+ "\nPinCode - "+ faker.address.zipCode(),
  totalAmount: 1200, orderStatus: 'Received',
  items:'3 Pizza, 2 Burgers, 4 Sandwich',
  description: faker.lorem.paragraphs(),
  disableStatus:false },
  {id: 3, customerName: 'Mitchell Starc', itemsOrdered: 6, profile: faker.image.avatar(),
  address: "Street:" + faker.address.streetName()+" \n City- "+ faker.address.city() + "\n Country- "+ faker.address.country()+ "\nPinCode - "+ faker.address.zipCode(),
  totalAmount: 2400, orderStatus: 'Received',
  items:'4 Pizza, 1 Burgers, 3 Sandwich',
  description: faker.lorem.paragraphs(),
  disableStatus:false},
  {id: 4, customerName: 'David Warner', itemsOrdered: 9, profile: faker.image.avatar(),
  address: "Street:" + faker.address.streetName()+" \n City- "+ faker.address.city() + "\n Country- "+ faker.address.country()+ "\nPinCode - "+ faker.address.zipCode(),
   totalAmount: 2500, orderStatus: 'Received',
   items:'3 Pizza, 2 Burgers, 4 Sandwich',
   description: faker.lorem.paragraphs(),
   disableStatus:false},
  {id: 5, customerName: 'Kevin Pieterson', itemsOrdered: 10, totalAmount: 3700, profile: faker.image.avatar(),
  address: "Street:" + faker.address.streetName()+" \n City- "+ faker.address.city() + "\n Country- "+ faker.address.country()+ "\nPinCode - "+ faker.address.zipCode(),
  items:'2Pizza, 3Burgers, 5 Sandwich',
  orderStatus: 'Received',
  description: faker.lorem.paragraphs(),
  disableStatus:false},
];
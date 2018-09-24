import { Component, OnInit } from '@angular/core';
import { CustomerDataService } from "../customer-data.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit {
  constructor(private myOrders: CustomerDataService) { }
  public customer1Array = [];

  ngOnInit() {
    this.customer1Array = this.myOrders.customers;
    //console.log(this.customer1Array[0].orders.length)
    //console.log(this.customer1Array[4].orders)
  }

}

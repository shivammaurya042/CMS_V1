import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CustomerDataService } from "../customer-data.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})

export class CustomersComponent implements OnInit {
  constructor(private myCustomers: CustomerDataService, private _router: Router) { }
  ngOnInit() {
    this.customersArray = this.myCustomers.customers;
  }
  public customersArray = [];
  public id;
  public myFirstName;
  public myLastName;
  public myCity;
  public toggleValue = false;
  public toggleValue1 = false;
  public myProduct;
  public myQuantity;
  public myUnitPrice
  public myTotal;

  onClickCheckbox() {
    return this.toggleValue1=!this.toggleValue1;
  }

  toggle() {
    return this.toggleValue = !this.toggleValue;
  }

  
  addCustomer1() {
    this.id = this.customersArray.length + 1;
    this.customersArray.push({
      id: this.id,
      firstName: this.myFirstName,
      lastName: this.myLastName,
      city: this.myCity,
      orders: [{ product: this.myProduct, quantity: this.myQuantity, price: this.myUnitPrice, orderTotal: this.myTotal }]
    });
    console.log(this.customersArray[6].orders);
    this.toggle()
  }

  addCustomer2() {
    this.id = this.customersArray.length + 1;
    this.customersArray.push({
      id: this.id,
      firstName: this.myFirstName,
      lastName: this.myLastName,
      city: this.myCity,
      orders: []
    });
    this.toggle()
  }

  
  addCustomer() {
    if(this.myProduct===undefined)
      this.addCustomer2();
      else
      this.addCustomer1();
  }
 
  onClick(customerId) {
    this._router.navigate(['/customer', customerId+1]);
  }

  onClose(i){
    alert(i);
    this.customersArray.splice(i-1,1);
  }

  

}

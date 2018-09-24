import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CustomerDataService } from '../customer-data.service';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {

  constructor(private myCustomers: CustomerDataService, private _route: ActivatedRoute) { }

  public customer: any;
  public id;

  ngOnInit() {
    
    this.id = +this._route.snapshot.params['id']; //id is string so + is used to convert into int
    this.customer = this.myCustomers.customers[this.id-1];
  }
  

}

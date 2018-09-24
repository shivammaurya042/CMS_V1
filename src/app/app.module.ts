import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomerDataService } from "./customer-data.service";
import { RouterModule, Routes } from "@angular/router";
import { CustomerViewComponent } from './customer-view/customer-view.component';

const routeLists: Routes = [
  { path: "customers", component: CustomersComponent },
  { path: "orders", component: OrdersComponent },
  { path: "customer/:id", component: CustomerViewComponent },
  { path: '', pathMatch: 'full', redirectTo: '/customers' },
  { path: '**', pathMatch: 'full', redirectTo: '/customers' } // catch any unfound routes and redirect to home page

]


@NgModule({
  declarations: [AppComponent, CustomersComponent, OrdersComponent, CustomerViewComponent],   //register the component with a module
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routeLists)],    //helper modules
  providers: [CustomerDataService],
  bootstrap: [AppComponent]  //loading your component
})
export class AppModule { }
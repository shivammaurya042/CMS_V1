import { Injectable } from '@angular/core';

@Injectable()
export class CustomerDataService {

  constructor() { }

  customers = [
    {
      id: 1, firstName: 'Lee', lastName: 'Carroll', address: '1234 Anywhere St.', city: 'Phoenix',
      orders: [
        { product: 'Basket', price: 29.99, quantity: 1, orderTotal: 29.99 },
        { product: 'Yarn', price: 9.99, quantity: 1, orderTotal: 39.96 },
        { product: 'Needes', price: 5.99, quantity: 1, orderTotal: 5.99 }
      ]
    },
    {
      id: 2, firstName: 'Jesse', lastName: 'Hawkins', address: '89 W. Center St.', city: 'Atlanta',
      orders: [
        { product: 'Table', price: 329.99, quantity: 1, orderTotal: 329.99 },
        { product: 'Chair', price: 129.99, quantity: 4, orderTotal: 519.96 },
        { product: 'Lamp', price: 89.99, quantity: 5, orderTotal: 449.95 },
      ]
    },
    {
      id: 3, firstName: 'Charles-2', lastName: 'Sutton', address: '455 7th Ave.', city: 'Quebec',
      orders: [
        { product: 'Call of Duty', price: 59.99, quantity: 1, orderTotal: 59.99 },
        { product: 'Controller', price: 49.99, quantity: 1, orderTotal: 49.99 },
        { product: 'Gears of War', price: 49.99, quantity: 1, orderTotal: 49.99 },
        { product: 'Lego City', price: 49.99, quantity: 1, orderTotal: 49.99 }
      ]
    },
    {
      id: 4, firstName: 'Albert', lastName: 'Einstein', address: '8966 N. Crescent Dr.', city: 'New York City',
      orders: [
        { product: 'Baseball', price: 9.99, quantity: 5, orderTotal: 49.95 },
        { product: 'Bat', price: 19.99, quantity: 1, orderTotal: 19.99 }
      ]
    },
    {
      id: 5, firstName: 'Sonya', lastName: 'Williams', address: '55 S. Hollywood Blvd', city: 'Los Angeles',
      orders: []
    },
    {
      id: 6, firstName: 'Shanika', lastName: 'Passmore', address: '459 S. International Dr.', city: 'Orlando',
      orders: [
        { product: 'Baseball', price: 9.99, quantity: 5, orderTotal: 49.95 },
        { product: 'Bat', price: 19.99, quantity: 1, orderTotal: 19.99 }
      ]
    },
  ];
  
}

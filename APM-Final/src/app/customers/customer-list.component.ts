import { Component, OnInit } from '@angular/core';

import { ICustomer } from './customer';
import { CustomerService } from './customer.service';

@Component({
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  pageTitle: string = 'Customer List';
  errorMessage: string;
  
  private _listFilter: string;
  get listFilter(): string {
      return this._listFilter;
  }
  set listFilter(value: string) {
      this._listFilter = value;
      this.filteredCustomers = this.listFilter ? this.performFilter(this.listFilter) : this.customers;
  }

  filteredCustomers: ICustomer[];
  customers: ICustomer[] = [];

  constructor(private customerService: CustomerService) {

  }

  performFilter(filterBy: string): ICustomer[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.customers.filter((customer: ICustomer) =>
            customer.lastName.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
            customer.firstName.toLocaleLowerCase().indexOf(filterBy) !== -1 );
  }

  ngOnInit(): void {
      this.customerService.getCustomers()
              .subscribe(customers => {
                  this.customers = customers;
                  this.filteredCustomers = this.customers;
              },
                  error => this.errorMessage = <any>error);
  }
}

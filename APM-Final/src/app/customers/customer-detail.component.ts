import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ICustomer } from './customer';
import { CustomerService } from './customer.service';

@Component({
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  pageTitle: string = 'Customer Detail';
  errorMessage: string;
  customer: ICustomer;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private customerService: CustomerService) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getCustomer(id);
  }

  getCustomer(id: number) {
    this.customerService.getCustomer(id).subscribe(
      customer => this.customer = customer,
      error => this.errorMessage = <any>error);
  }

}

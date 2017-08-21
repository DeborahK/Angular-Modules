import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from './../shared/shared.module';

import { CustomerListComponent } from './customer-list.component';
import { CustomerDetailComponent } from './customer-detail.component';

import { CustomerService } from './customer.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
        { path: '', component: CustomerListComponent },
        { path: ':id', component: CustomerDetailComponent }
    ])
  ],
  declarations: [
    CustomerListComponent,
    CustomerDetailComponent
  ],
  providers: [
    CustomerService
  ]
})
export class CustomerModule { }

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ICustomer } from './customer';
import { DataService } from '../core/data.service';
import { MessageService } from '../core/message.service';

@Injectable()
export class CustomerService {
    private customerUrl = './api/customers/customers.json';

    constructor(private dataService: DataService,
                private messageService: MessageService) { }

    getCustomers(): Observable<ICustomer[]> {
        return this.dataService.getItems(this.customerUrl);
    }

    getCustomer(id: number): Observable<ICustomer> {
        // return this.dataService.getItem(this.customerUrl);
        return this.dataService.getItems<ICustomer[]>(this.customerUrl)
            .map(data => data.find(d => d.id === id))
            .do(c => this.messageService.addMessage(`Viewed customer: ${c.lastName}, ${c.firstName}`));
    }
}

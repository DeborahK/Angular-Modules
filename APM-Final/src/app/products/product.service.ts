import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { IProduct } from './product';
import { DataService } from '../core/data.service';
import { MessageService } from '../core/message.service';

@Injectable()
export class ProductService {
    private productUrl = './api/products/products.json';

    constructor(private dataService: DataService,
                private messageService: MessageService) { }

    getProducts(): Observable<IProduct[]> {
        return this.dataService.getItems<IProduct[]>(this.productUrl);
    }

    getProduct(id: number): Observable<IProduct> {
        // return this.dataService.getItem<IProduct>(this.productUrl);
        return this.dataService.getItems<IProduct[]>(this.productUrl)
            .map(data => data.find(d => d.id === id))
            .do(p => this.messageService.addMessage(`Viewed product: ${p.productName}`));
    }
}

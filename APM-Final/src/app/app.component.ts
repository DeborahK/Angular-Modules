import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { MessageService } from './messages/message.service';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
  displayShell: boolean = true;

  get messageIsDisplayed(): boolean {
    return this.messageService.displayMessages;
  }

  constructor(private messageService: MessageService,
              private router: Router,
              private route: ActivatedRoute) {

    router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.route)
      .map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .mergeMap((route) => route.data)
      .subscribe(event => {
        if (event['shell'] === false) {
          this.displayShell = false;
        } else {
          this.displayShell = true;
        }
      })
  }

}

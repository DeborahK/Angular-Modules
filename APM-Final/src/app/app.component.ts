import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}

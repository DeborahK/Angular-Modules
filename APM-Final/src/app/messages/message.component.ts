import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from './message.service';

@Component({
    selector: 'messages',
    templateUrl: './message.component.html',
    styles: [
        '.message-row { margin-bottom: 10px }'
    ]
})
export class MessageComponent {
    pageTitle = 'Message Log';

    constructor(private messageService: MessageService,
                private router: Router) {
                    console.log("In constructor");
                }

    close(): void {
        // Close the popup.
        this.router.navigate([{ outlets: { popup: null } }]);
        this.messageService.isDisplayed = false;
    }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from '../core/message.service';

@Component({
    selector: 'pm-messages',
    templateUrl: './message.component.html',
    styles: [
        '.message-row { margin-bottom: 10px }'
    ]
})
export class MessageComponent {
    pageTitle = 'Message Log';
    noMessages = 'No messages';
    get messages(): string[] {
        return this.messageService.getMessages();
    }

    constructor(private messageService: MessageService,
                private router: Router) { }

    close(): void {
        this.messageService.displayMessages = false;
    }
}

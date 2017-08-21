import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
    private messages: string[] = [];
    displayMessages = false;

    constructor() { }

    addMessage(message: string): void {
        const currentDate = new Date();
        this.messages.unshift(message + '\n at ' + currentDate.toLocaleString());
    }

    getMessages(): string[] {
        return this.messages;
    }
}

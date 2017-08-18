import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../user/auth.service';
import { MessageService } from '../messages/message.service';

@Component({
  selector: 'pm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  get messageIsDisplayed(): boolean {
    return this.messageService.isDisplayed;
  }

  constructor(private router: Router,
              private authService: AuthService,
              private messageService: MessageService) { }

  ngOnInit() {
  }

  displayMessages(): void {
    this.messageService.isDisplayed = true;
  }

  hideMessages(): void {
    this.messageService.isDisplayed = false;
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigateByUrl('/home');
  }
}

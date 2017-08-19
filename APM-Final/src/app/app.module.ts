import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './home/page-not-found.component';
import { MenuComponent } from './home/menu.component';

import { AppRoutingModule } from './app-routing.module';

/* Feature Modules */
import { UserModule } from './user/user.module';
import { MessageModule } from './messages/message.module';
import { ShellComponent } from './home/shell.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MenuComponent,
    PageNotFoundComponent,
    ShellComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UserModule,
    MessageModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

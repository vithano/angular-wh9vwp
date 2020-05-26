import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AvatarComponent } from './avatar/avatar.component';
import {  MatIconModule} from '@angular/material/icon';
import { AvatarService } from './avatar.service';
@NgModule({
  imports:      [ BrowserModule, FormsModule, MatIconModule, BrowserAnimationsModule, HttpClientModule],
  declarations: [ AppComponent, HelloComponent, AvatarComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AvatarService]
})
export class AppModule { }

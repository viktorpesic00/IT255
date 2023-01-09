import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoomService } from './services/roomService';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [AppComponent, RoomsComponent, NavbarComponent],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule],
  providers: [RoomService],
  bootstrap: [AppComponent],
})
export class AppModule {}

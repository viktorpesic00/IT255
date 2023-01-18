import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoomService } from './services/roomService';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { MethotelsCrudComponent } from './methotels-crud/methotels-crud.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    NavbarComponent,
    MethotelsCrudComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, HttpClientModule],
  providers: [RoomService],
  bootstrap: [AppComponent],
})
export class AppModule {}

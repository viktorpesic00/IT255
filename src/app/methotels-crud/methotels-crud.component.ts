import { Component, OnInit } from '@angular/core';
import { Room } from '../models/room.model';
import { MethotelsCrudService } from '../services/methotels-crud.service';

@Component({
  selector: 'app-methotels-crud',
  templateUrl: './methotels-crud.component.html',
  styleUrls: ['./methotels-crud.component.css'],
})
export class MethotelsCrudComponent implements OnInit {
  rooms: any = [{}];

  editRoom: any = {} as Room;
  insertRoom: any = {} as Room;

  showUpdateForm: boolean = false;
  showInsertForm: boolean = false;

  constructor(private metService: MethotelsCrudService) {
    this.metService
      .getMetHotels()
      .toPromise()
      .then((res) => (this.rooms = res));

    console.log(this.rooms);
  }

  ngOnInit(): void {}

  editForm(room: any) {
    this.editRoom = room;
    this.showUpdateForm = !this.showUpdateForm;
  }

  updateRoom() {
    this.metService.updateMetHotel(this.editRoom, this.editRoom.id).subscribe();
    this.showUpdateForm = false;
  }

  insertRoomForm() {
    this.showInsertForm = !this.showInsertForm;
  }
  createRoom() {
    this.metService.createMetHotel(this.insertRoom).subscribe();
    this.showInsertForm = false;
    this.rooms.push(this.insertRoom);
    this.insertRoom = {};
  }

  deleteRoom(room: any) {
    console.log(room.id);
    this.metService.deleteMetHotel(room.id).subscribe();
  }
}

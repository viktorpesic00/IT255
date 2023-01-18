import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Room } from '../models/room.model';

@Injectable()
export class RoomService {
  constructor(private http: HttpClient) {}

  // @ts-ignore
  getPrice(numberOfNights: number, price: number): number {
    return numberOfNights * price;
  }
}

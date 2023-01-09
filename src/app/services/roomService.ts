import {Injectable} from "@angular/core";

@Injectable()
export class RoomService {

  constructor() {

  }

  // @ts-ignore
  getPrice(numberOfNights: number, price: number): number {
    return numberOfNights * price;
  }
}

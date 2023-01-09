export class Room {
  roomNumber: number;
  description: string;
  price: number;
  floor: number;
  numberOfNights?: number;

  constructor(
    roomNumber: number,
    description: string,
    price: number,
    floor: number,
    numberOfNights: number
  ) {
    this.roomNumber = roomNumber;
    this.description = description;
    this.price = price;
    this.floor = floor;
    this.numberOfNights = numberOfNights;
  }
}

export interface Product {
  id: number;
  salesPercentage: number;
  image: string;
  accommodationName: string;
  roomName: string;
  checkIn: Date;
  checkOut: Date;
  saleEnd: Date;
  min: number;
  max: number;
  rating: number;
  canNegotiate: boolean;
  price: number;
  sellingPrice: number;
  purchasePrice: number;
  latitude: number;
  longitude: number;
  status: "ON_SALE" | "SOLD_OUT" | "BOOKING" | "CANCELED";
}

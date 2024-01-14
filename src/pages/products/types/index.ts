export interface Product {
  id: number;
  image: string;
  accommodationName: string;
  roomName: string;
  address: string;
  checkIn: Date;
  checkOut: Date;
  min: number;
  max: number;
  saleEnd: Date;
  rating: number;
  salesPercentage: number;
  canNegotiate: boolean;
  price: number;
  sellingPrice: number;
  purchasePrice: number;
  latitude: number;
  longitude: number;
  status: "ON_SALE" | "SOLD_OUT" | "BOOKING" | "CANCELED";
}

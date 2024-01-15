export interface ProductType {
  id: number;
  image: string;
  accommodationName: string;
  roomName: string;
  address: string;
  checkIn: string;
  checkOut: string;
  min: number;
  max: number;
  saleEnd: string;
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

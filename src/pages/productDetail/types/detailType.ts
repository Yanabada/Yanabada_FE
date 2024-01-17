export interface DetailType {
  id: number;
  seller: SellerType;
  description: string;
  canNegotiate: boolean;
  saleEndDate: Date;
  status: "ON_SALE" | "SOLD_OUT" | "BOOKING" | "CANCELED";
  checkInDate: Date;
  checkOutDate: Date;
  sellingPrice: number;
  price: number;
  purchasePrice: number;
  salesPercentage: number;
  accommodationInfo: AccommodationInfoType;
  roomInfo: RoomInfoType;
}

export interface SellerType {
  id: number;
  nickname: string;
  imageUrl: string;
}

export interface AccommodationInfoType {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  region: string;
  phoneNumber: string;
  description: string;
  category: string;
  image: string;
  option: {
    hasSauna: boolean;
    hasRoofTop: boolean;
    hasPool: boolean;
    hasGym: boolean;
    hasLoungeBar: boolean;
  };
}

export interface RoomInfoType {
  id: number;
  name: string;
  price: number;
  checkInTime: string;
  checkOutTime: string;
  description: string;
  minHeadCount: number;
  maxHeadCount: number;
  rating: number;
  image: string;
  cancelPolicy: string;
  option: {
    canPark: boolean;
    isPartyRoom: boolean;
    canAccompanyPet: boolean;
    isKidsRoom: boolean;
    isCityView: boolean;
    isOceanView: boolean;
    hasPc: boolean;
    hasOtt: boolean;
    hasBathtub: boolean;
    hasBreakfast: boolean;
    canCook: boolean;
    isNoKids: boolean;
  };
}

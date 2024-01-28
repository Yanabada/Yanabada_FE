export interface DetailProps {
  orderId: number;
  code: string;
  orderDate: string;
  accommodationName: string;
  accommodationImage: string;
  roomName: string;
  cancelPolicy: string;
  checkInDate: string;
  checkOutDate: string;
  checkInTime: string;
  checkOutTime: string;
  price: number;
  minHeadCount: number;
  maxHeadCount: number;
  reservationPersonName: string;
  reservationPersonPhoneNumber: string;
  userPersonName: string;
  userPersonPhoneNumber: string;
  totalPayment: number;
  paymentMethod: string;
}

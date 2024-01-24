const initialConfirmData = {
  id: 0,
  seller: {
    id: 0,
    nickname: "",
    imageUrl: ""
  },
  description: "",
  canNegotiate: false,
  saleEndDate: "",
  checkInDate: "",
  checkOutDate: "",
  sellingPrice: 0,
  purchasePrice: 0,
  orderCode: "",
  isAutoCancel: false,
  accommodationInfo: {
    name: "",
    image: ""
  },
  roomInfo: {
    name: "",
    checkInTime: "",
    checkOutTime: "",
    cancelPolicy: ""
  }
};

export default initialConfirmData;

import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/products", () => {
    return HttpResponse.json([
      {
        status: "SUCCESS",
        data: {
          products: [
            {
              id: 1,
              image: "https://bit.ly/2Z4KKcF",
              accommodationName: "춘천세종호텔",
              roomName: "스탠다드 룸",
              address: "강원특별자치도 춘천시 봉의산길 31",
              checkIn: "2024-01-26",
              checkOut: "2024-01-30",
              min: 2,
              max: 4,
              saleEnd: "2024-01-19",
              rating: 0.0,
              salesPercentage: 20,
              canNegotiate: true,
              price: 65000,
              sellingPrice: 80000,
              purchasePrice: 100000,
              latitude: 35.1631049574,
              longitude: 126.9882125981,
              status: "ON_SALE"
            },
            {
              id: 2,
              image: "https://bit.ly/2Z4KKcF",
              accommodationName: "춘천세종호텔",
              roomName: "스탠다드 룸",
              address: "경기도 의왕시",
              checkIn: "2024-01-26",
              checkOut: "2024-01-30",
              min: 2,
              max: 4,
              saleEnd: "2024-01-19",
              rating: 0.0,
              salesPercentage: 20,
              canNegotiate: false,
              price: 65000,
              sellingPrice: 80000,
              purchasePrice: 100000,
              latitude: 35.1631049574,
              longitude: 126.9882125981,
              status: "SOLD_OUT"
            },
            {
              id: 3,
              image: "https://bit.ly/2Z4KKcF",
              accommodationName: "춘천세종호텔",
              roomName: "스탠다드 룸",
              address: "강원특별자치도 춘천시 봉의산길 31",
              checkIn: "2024-01-26",
              checkOut: "2024-01-30",
              min: 2,
              max: 4,
              saleEnd: "2024-01-19",
              rating: 0.0,
              salesPercentage: 20,
              canNegotiate: true,
              price: 65000,
              sellingPrice: 80000,
              purchasePrice: 100000,
              latitude: 35.1631049574,
              longitude: 126.9882125981,
              status: "BOOKING"
            },
            {
              id: 4,
              image: "https://bit.ly/2Z4KKcF",
              accommodationName: "춘천세종호텔",
              roomName: "스탠다드 룸",
              address: "강원특별자치도 춘천시 봉의산길 31",
              checkIn: "2024-01-26",
              checkOut: "2024-01-30",
              min: 2,
              max: 4,
              saleEnd: "2024-01-19",
              rating: 0.0,
              salesPercentage: 20,
              canNegotiate: false,
              price: 65000,
              sellingPrice: 80000,
              purchasePrice: 100000,
              latitude: 35.1631049574,
              longitude: 126.9882125981,
              status: "ON_SALE"
            }
          ],
          totalElements: 1,
          totalPages: 1
        }
      }
    ]);
  }),
  http.get("/api/products/:id", () => {
    return HttpResponse.json([
      {
        status: "SUCCESS",
        data: {
          id: 1,
          seller: {
            id: 1,
            nickname: "강쥐사랑해",
            imageUrl: "https://bit.ly/2Z4KKcF"
          },
          description:
            "좋은 숙소입니다. 회사 행사 진행자로 필참하게 되어 여행이 취소되었습니다...! 구매의사 확실하시다면 네고도 가능하니 채팅주세요!",
          canNegotiate: true,
          saleEndDate: "2024-01-19",
          status: "ON_SALE",
          checkInDate: "2024-01-26",
          checkOutDate: "2024-01-30",
          sellingPrice: 80000,
          price: 65000,
          purchasePrice: 100000,
          salesPercentage: 20,
          accommodationInfo: {
            id: 1,
            name: "춘천세종호텔",
            address: "강원특별자치도 춘천시 봉의산길 31",
            latitude: 35.1631049574,
            longitude: 126.9882125981,
            region: "SEOUL",
            phoneNumber: "02-2323-2323",
            description:
              "안녕하세요 네모세모호텔입니다. 저희 호텔은 종로구에 위치하고 있으며 3호선 경복궁역에서 도보 10분 소요됩니다. 주차 가능하지만 상시 혼잡 구간이오니 차량을 이용하는 고객님께서는 유의 부탁드리겠습니다.경복궁, 광화문, 청계천 등을 이용하는 고객께는 최적의 위치! 외국 친구분들도 안심하고 추천할 수 있는 네모세모호텔",
            category: "HOTEL_RESORT",
            image: "https://bit.ly/2Z4KKcF",
            option: {
              hasSauna: true,
              hasRoofTop: false,
              hasPool: true,
              hasGym: true,
              hasLoungeBar: false
            }
          },
          roomInfo: {
            id: 1,
            name: "스탠다드 룸",
            price: 65000,
            checkInTime: "17:00",
            checkOutTime: "12:00",
            description: "기본적인 방으로 편안한 휴식을 제공합니다.",
            minHeadCount: 2,
            maxHeadCount: 4,
            rating: 4.4,
            image: "https://bit.ly/2Z4KKcF",
            cancelPolicy: "YNBD_1",
            option: {
              canPark: true,
              isPartyRoom: false,
              canAccompanyPet: true,
              isKidsRoom: false,
              isCityView: true,
              isOceanView: false,
              hasPc: true,
              hasOtt: true,
              hasBathtub: false,
              hasBreakfast: true,
              canCook: false,
              isNoKids: true
            }
          }
        }
      }
    ]);
  })
];

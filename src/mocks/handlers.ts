import { http, HttpResponse } from "msw";
import { data as products } from "./api/data/products";

export const handlers = [
  http.get("/api/products", ({ request }) => {
    const url = new URL(request.url);
    const option = url.searchParams.get("option");

    // TODO: option 별로 product list를 따로 만들어야 하는건가?
    if (option) {
      console.log(option);
    }

    return HttpResponse.json({
      status: "SUCCESS",
      data: products
    });
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
          sellingPrice: 800000,
          price: 1000000,
          purchasePrice: 900000,
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
            image:
              "data:image/jpeg;base64,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",
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
  }),
  http.get("/api/member", () => {
    return HttpResponse.json({
      id: 1,
      email: "example1@example.com",
      phoneNumber: "123-456-7890",
      imageUrl: "https://example.com/image1.jpg",
      point: 100,
      provider: "EMAIL",
      nickName: "꿀을핥는사람"
    });
  }),
  http.get("/payments/summary", () => {
    return HttpResponse.json({
      balance: 350000,
      hasJoinedYanoljaPay: false
    });
  }),
  http.put("/member/phone-number", async ({ request }) => {
    const newPut = await request.json();

    return HttpResponse.json(newPut, { status: 200 });
  }),
  http.post("/auth/logout", async () => {
    return HttpResponse.json({ status: 200 });
  }),
  http.post("/auth/verification/email", async () => {
    return HttpResponse.json({ status: 200, code: 111111 });
  }),
  http.put("/member/password", async ({ request }) => {
    const newPut = await request.json();

    return HttpResponse.json(newPut, { status: 200 });
  }),
  http.get(`products/own`, () => {
    return HttpResponse.json({
      products: [
        {
          productId: 1,
          tradeId: 1,
          image: "1.jpg",
          accommodationName: "춘천세종호텔",
          roomName: "스탠다드 룸",
          saleEnd: "2024-01-24",
          sellingPrice: 80000,
          status: "ON_SALE"
        },
        {
          productId: 2,
          tradeId: 2,
          image: "1.jpg",
          accommodationName: "춘천세종호텔",
          roomName: "스탠다드 룸",
          saleEnd: "2024-01-24",
          sellingPrice: 80000,
          status: "SOLD_OUT"
        },
        {
          productId: 3,
          tradeId: 3,
          image: "1.jpg",
          accommodationName: "춘천세종호텔",
          roomName: "스탠다드 룸",
          saleEnd: "2024-01-24",
          sellingPrice: 80000,
          status: "BOOKING"
        },
        {
          productId: 4,
          tradeId: 4,
          image: "1.jpg",
          accommodationName: "춘천세종호텔",
          roomName: "스탠다드 룸",
          saleEnd: "2024-01-24",
          sellingPrice: 80000,
          status: "TIMEOUT"
        }
      ],
      pageNum: 0,
      pageSize: 10,
      totalPages: 1,
      isFirst: true,
      isLast: true
    });
  }),
  http.delete(`/products/:productId`, async () => {
    return HttpResponse.json({
      status: "SUCCESS",
      data: {
        productId: 1
      }
    });
  }),
  http.get(`/trades/approvals`, () => {
    return HttpResponse.json({
      approvalTrades: [
        {
          tradeId: 2,
          accommodationName: "춘천세종호텔",
          accommodationImage: "1.jpg",
          buyerNickname: "nick2",
          tradeRegisteredTime: "2024-01-24 00:09",
          roomName: "스탠다드 룸",
          sellingPrice: 80000,
          status: "WAITING"
        },
        {
          tradeId: 1,
          accommodationName: "춘천세종호텔",
          accommodationImage: "1.jpg",
          buyerNickname: "nick2",
          tradeRegisteredTime: "2024-01-24 00:08",
          roomName: "스탠다드 룸",
          sellingPrice: 80000,
          status: "WAITING"
        }
      ],
      pageNum: 0,
      pageSize: 10,
      totalPages: 1,
      isFirst: true,
      isLast: true
    });
  }),
  http.post("/trades/:tradeid/approve", async () => {
    return HttpResponse.json({
      status: "SUCCESS",
      data: {
        tradeId: 1
      }
    });
  }),
  http.post("/trades/:tradeid/reject", async () => {
    return HttpResponse.json({
      status: "SUCCESS",
      data: {
        tradeId: 1
      }
    });
  })
];

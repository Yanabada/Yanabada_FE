declare const window: typeof globalThis & {
  IMP: any;
};

export const onClickTossPayment = (
  accommodationName: string,
  name: string,
  phoneNumber: string,
  amount: number
): boolean => {
  const IMP = window.IMP;
  IMP.init("imp15200254"); // 예: 'imp00000000a'
  IMP.request_pay(
    {
      // param
      pg: "tosspayments",
      pay_method: "card",
      // merchant_uid: productId, // 주문번호가 겹치지 않게 해야되고 , 주석으로 할 경우 겹치지 않게 한다.
      name: accommodationName, // 상품명
      amount: amount,
      buyer_name: name,
      buyer_tel: phoneNumber
      // m_redirect_url: "", // 모바일에서 결제시, 페이지 주소가 바뀜, 따라서 결제 끝나고 돌아갈 주소 입력해야됨
    },
    (rsp: any) => {
      // callback
      if (rsp) {
        // 결제 성공 시 로직
        console.log(rsp);
        return true;
      } else {
        // 결제 실패 시 로직,
        return false;
      }
    }
  );

  return false;
};

export const onClickPGPayment = (
  accommodationName: string,
  name: string,
  phoneNumber: string,
  amount: number,
  payMethod: string
): boolean => {
  const IMP = window.IMP;
  IMP.init("imp15200254"); // 예: 'imp00000000a'
  IMP.request_pay(
    {
      // param
      pg: "html5_inicis",
      pay_method: payMethod,
      // merchant_uid: productId, // 주문번호가 겹치지 않게 해야되고 , 주석으로 할 경우 겹치지 않게 한다.
      name: accommodationName, // 상품명
      amount: amount,
      buyer_name: name,
      buyer_tel: phoneNumber
      // m_redirect_url: "", // 모바일에서 결제시, 페이지 주소가 바뀜, 따라서 결제 끝나고 돌아갈 주소 입력해야됨
    },
    (rsp: any) => {
      // callback
      if (rsp) {
        // 결제 성공 시 로직
        console.log(rsp);
        return true;
      } else {
        // 결제 실패 시 로직,
        return false;
      }
    }
  );

  return false;
};

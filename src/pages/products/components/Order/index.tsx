import * as S from "./style";
import { useState } from "react";
import { ToggleMenu, ToggleMenuItem } from "./ToggleMenu";
import { menu, item } from "@animations/dropDown";
import CheckStore from "@pages/products/stores/checkStore";
import { useSearchParams } from "react-router-dom";

const orderList = [
  { id: "RECENT", name: "최신순" },
  { id: "END_DATE_ASC", name: "마감 임박순" },
  { id: "SALES_PERCENTAGE_DESC", name: "높은 할인순" },
  { id: "PRICE_ASC", name: "낮은 가격순" },
  { id: "RATING_DESC", name: "높은 별점순" }
];

const Order = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const orderParams = searchParams.get("order");

  const [open, setOpen] = useState(false);
  const { isCheck, setIsCheck } = CheckStore(); // useState 호출을 조건부 렌더링 외부로 이동

  const handleClick = (orderId: string) => {
    searchParams.set("order", orderId);
    setSearchParams(searchParams);
  };

  const orderLabel = orderList.find((list) => list.id === orderParams);

  return (
    <S.OrderContainer>
      <S.Label htmlFor="box">
        <S.CheckBox
          id="box"
          type="checkbox"
          checked={isCheck}
          onChange={(e) => setIsCheck(e.target.checked)}
        />
        <S.CheckText>판매 완료 상품 가리기</S.CheckText>
      </S.Label>
      <ToggleMenu
        label={orderLabel?.name || "최신순"}
        open={open}
        setOpen={setOpen}
        animate={open ? "open" : "closed"}
        initial="closed"
        exit="closed"
        variants={menu}
      >
        {orderList.map((order) => (
          <ToggleMenuItem key={order.id} onClick={() => handleClick(order.id)} {...item}>
            {order.name}
          </ToggleMenuItem>
        ))}
      </ToggleMenu>
    </S.OrderContainer>
  );
};

export default Order;

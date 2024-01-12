import * as S from "./style";
import { useState } from "react";
import type { MotionProps, Variants } from "framer-motion";
import { ToggleMenu, ToggleMenuItem } from "./ToggleMenu";
import Checkbox from "@components/input/Checkbox";

const menu = {
  closed: {
    scale: 0,
    transition: {
      delay: 0.15
    }
  },
  open: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.4,
      delayChildren: 0.2,
      staggerChildren: 0.05
    }
  }
} satisfies Variants;

const item = {
  variants: {
    closed: { x: -16, opacity: 0 },
    open: { x: 0, opacity: 1 }
  },
  transition: { opacity: { duration: 0.2 } }
} satisfies MotionProps;

const orderList = [
  { id: "RECENT", name: "최신순" },
  { id: "END_DATE_ASC", name: "마감 임박순" },
  { id: "SALES_PERCENTAGE_DESC", name: "높은 할인순" },
  { id: "PRICE_ASC", name: "낮은 가격순" },
  { id: "RATING_DESC", name: "높은 별점순" }
];

const Order = () => {
  const [open, setOpen] = useState(false);
  const [orderName, setOrderName] = useState("최신순");

  return (
    <S.OrderContainer>
      <Checkbox
        variant="all"
        content="판매 완료 상품 가리기"
        transparent={true}
        fontSize="0.9375rem"
        fontWeight="400"
        color="#9C9C9C"
      ></Checkbox>
      <ToggleMenu
        label={orderName}
        open={open}
        setOpen={setOpen}
        animate={open ? "open" : "closed"}
        initial="closed"
        exit="closed"
        variants={menu}
      >
        {orderList.map((order) => (
          <ToggleMenuItem key={order.id} {...item} onClick={() => setOrderName(order.name)}>
            {order.name}
          </ToggleMenuItem>
        ))}
      </ToggleMenu>
    </S.OrderContainer>
  );
};

export default Order;

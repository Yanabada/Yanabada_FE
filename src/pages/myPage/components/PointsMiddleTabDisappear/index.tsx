import * as S from "../../styles/pointsMiddleTab.styles";
import { Link } from "react-router-dom";
import { useState } from "react";
import NoItemIcon from "@assets/icons/noItemIcon.svg?react";
import { ToggleMenu, ToggleMenuItem } from "@pages/products/components/Order/ToggleMenu";
import type { MotionProps, Variants } from "framer-motion";

interface PointsMiddleTabProps {
  width?: string;
}

const PointsMiddleTabDisappear = ({ width }: PointsMiddleTabProps) => {
  const [isDisappearPointExist] = useState(true);
  const [open, setOpen] = useState(false);
  const [orderName, setOrderName] = useState("15일");

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
    { id: "15", name: "15일" },
    { id: "30", name: "30일" },
    { id: "60", name: "60일" },
    { id: "90", name: "90일" }
  ];

  return (
    <>
      <S.PointsMiddleContainer width={width}>
        <S.MiddleWrapper>
          <Link to="/mypage/points/list">
            <>
              <S.MiddleRightText>전체내역</S.MiddleRightText>
            </>
          </Link>
        </S.MiddleWrapper>
        <S.MiddleWrapper>
          <Link to="/mypage/points/disappear">
            <S.MiddleTextWrapper>
              <S.MiddleLeftText>소멸예정</S.MiddleLeftText>
              <S.UnderLine />
            </S.MiddleTextWrapper>
          </Link>
        </S.MiddleWrapper>
      </S.PointsMiddleContainer>

      <S.SectionDescriptionWrapper width={width}>
        <ToggleMenu
          label={orderName}
          open={open}
          setOpen={setOpen}
          animate={open ? "open" : "closed"}
          initial="closed"
          exit="closed"
          variants={menu}
          justifyContent="flex-start"
          width="auto"
        >
          {orderList.map((order) => (
            <ToggleMenuItem key={order.id} {...item} onClick={() => setOrderName(order.name)}>
              {order.name}
            </ToggleMenuItem>
          ))}
        </ToggleMenu>
        <S.DisappearMessageWrapper>
          <S.MessageText>이내,</S.MessageText>
        </S.DisappearMessageWrapper>
        <S.PriceInfo>
          <S.PointText>500</S.PointText>
          <S.Point>P</S.Point>
        </S.PriceInfo>
        <S.DisappearMessageWrapper>
          <S.MessageText>소멸 예정입니다.</S.MessageText>
        </S.DisappearMessageWrapper>
      </S.SectionDescriptionWrapper>

      {isDisappearPointExist ? (
        <S.PointsBottomContainer>
          <S.PointList width={width}>
            <S.PointListRow>
              <S.PlusReason>야놀자 웰컴포인트</S.PlusReason>
              <S.PlusPoint>+500</S.PlusPoint>
            </S.PointListRow>
            <S.PointListRow>
              <S.EventName>회원가입 이벤트</S.EventName>
              <S.Date>2023-12-01</S.Date>
              <S.DueDate>~2024-01-31 까지</S.DueDate>
            </S.PointListRow>
          </S.PointList>
        </S.PointsBottomContainer>
      ) : (
        <S.PointsBottomContainer>
          <S.NoItemWrapper>
            <NoItemIcon />
            <S.NoItemText>선택하신 기간 내, 소멸 예정 포인트가 없습니다.</S.NoItemText>
          </S.NoItemWrapper>
        </S.PointsBottomContainer>
      )}
    </>
  );
};

export default PointsMiddleTabDisappear;

import styled from "@emotion/styled";

interface ListCardProps {
  width?: string;
  imageURL?: string;
  cardType?:
    | "approval_saleEnd"
    | "approval_sale"
    | "approval_wait"
    | "saleEnd"
    | "sale"
    | "saleCanceled"
    | "purchased"
    | "purchasedCanceled";
}

export const ListCardContainer = styled.div<ListCardProps>`
  display: flex;
  width: ${({ width }) => width || "332px"};
  padding-bottom: 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  background: #fff;

  /* 은은한쉐도우 */
  box-shadow: ${({ theme }) => theme.shadows[1]};
`;

export const TopWrapper = styled.div`
  display: flex;
  padding: 10px 16px;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[300]};
`;

export const TopRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
`;

export const TopRightText = styled.p`
  color: ${({ theme }) => theme.colors.gray[900]};
  /* [Button2] 일반버튼 */
  ${({ theme }) => theme.text.button2}
`;

export const PaymentInfoWrapper = styled.div`
  display: flex;
  padding: 0px 16px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
`;

export const BuyerInfo = styled.p`
  flex: 1 0 0;

  color: ${({ theme }) => theme.colors.gray[600]};

  /* [Overline] 오버라인 */
  ${({ theme }) => theme.text.overline}
`;

export const SaleDate = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  text-align: right;

  /* [Overline] 오버라인 */
  ${({ theme }) => theme.text.overline}
`;

export const AccomodationCard = styled.div<ListCardProps>`
  display: flex;
  width: ${({ width }) => width || "332px"};
  padding-left: 16px;
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
`;

export const ImageWrapper = styled.div<ListCardProps>`
  width: 72px;
  height: 72px;

  align-self: stretch;

  background-color: lightgray;
  background-image: url(${({ imageURL }) => imageURL});
  background-size: cover;
`;

export const TextArea = styled.div`
  display: flex;
  padding-left: 12px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;
  align-self: stretch;
`;

export const Timer = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const TimerText = styled.p<ListCardProps>`
  color: ${({ cardType }) =>
    (cardType === "approval_saleEnd" && "#9C9C9C") ||
    (cardType === "approval_sale" && "#38A3EB") ||
    (cardType === "sale" && "#38A3EB")};
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 200% */
  letter-spacing: -0.24px;
`;

export const AccomodationInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;

export const RoomName = styled.p`
  display: flex;
  height: 13px;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;

  color: ${({ theme }) => theme.colors.gray[900]};

  /* [body1] 숙소이름 */
  ${({ theme }) => theme.text.body1}
`;

export const PriceInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 6px;
  align-self: stretch;
`;

export const DiscountRate = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  text-align: right;

  /* [body2]본문 */
  ${({ theme }) => theme.text.body2}
`;

export const Price = styled.p`
  color: ${({ theme }) => theme.colors.gray[900]};

  /* [Subtitle4] 금액표기 */
  ${({ theme }) => theme.text.subtitle4}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4px 16px 0px 16px;
  align-items: flex-start;
  align-content: flex-start;
  gap: 10px;
  align-self: stretch;
  flex-wrap: wrap;
`;

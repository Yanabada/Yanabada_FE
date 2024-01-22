import styled from "@emotion/styled";

interface PurchaseProps {
  width?: string;
  imageURL?: string;
  gap?: string;
}

export const ReservationContainer = styled.div<PurchaseProps>`
  width: ${({ width }) => width || "360px"};
  display: flex;
  padding: 20px 14px;
  flex-direction: column;
  gap: ${({ gap }) => gap || "0px"};

  background-color: #fff;
`;

export const Spacer = styled.div<PurchaseProps>`
  display: flex;
  width: ${({ width }) => width || "360px"};
  height: 16px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  background-color: ${({ theme }) => theme.colors.gray[200]};
`;

export const AccommodationInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PersonnelInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  margin-top: 16px;
`;

export const PersonalInfoText = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};

  /* [body2]본문 */
  ${({ theme }) => theme.text.body2}
`;

export const PriceCompareCard = styled.div<PurchaseProps>`
  width: ${({ width }) => width || "360px"};
  height: 305px;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  padding: 16px 14px;

  background-color: ${({ theme }) => theme.colors.gray[200]};
`;

export const CheckInOutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const CheckInOut = styled.div<PurchaseProps>`
  display: flex;
  width: ${({ width }) => `calc(${width} - 202px)` || "158px"};
  padding-right: 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: -2px;
`;

export const CheckInOutText = styled.p`
  flex: 1 0 0;

  color: ${({ theme }) => theme.colors.gray[700]};

  /* [Caption2] 캘린더 금액 */
  ${({ theme }) => theme.text.caption2}
`;

export const DateText = styled.p`
  color: ${({ theme }) => theme.colors.gray[900]};

  /* [Subtitle4] 금액표기 */
  ${({ theme }) => theme.text.subtitle4}
`;

export const TimeText = styled.p`
  color: ${({ theme }) => theme.colors.gray[900]};

  /* [body2]본문 */
  ${({ theme }) => theme.text.body2}
`;

export const ImageWrapper = styled.div<PurchaseProps>`
  width: ${({ width }) => `calc(${width} - 7px)` || "353px"};
  height: 192.6px;

  border-radius: 5px;
  background-color: lightgray;
  background-image: url(${({ imageURL }) => imageURL});
  background-size: cover;

  margin-top: 16px;
`;

export const CompareCardBottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  margin-top: 7px;
`;

export const CostText = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  text-align: right;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: line-through;
`;

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 8px;
`;

export const PriceText = styled.p`
  color: ${({ theme }) => theme.colors.gray[700]};
  text-align: right;

  /* [body2]본문 */
  ${({ theme }) => theme.text.body2}
`;

export const Price = styled.p`
  color: ${({ theme }) => theme.colors.gray[900]};

  /* [Subtitle4] 금액표기 */
  ${({ theme }) => theme.text.subtitle4}
`;

export const PersonInfoWrapper = styled.div`
  display: flex;
  padding: 8px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 7px;
`;

export const PersonInfoTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const InfoText = styled.p`
  color: ${({ theme }) => theme.colors.gray[900]};

  /* [Subtitle3] 본문 메인레이블 */
  ${({ theme }) => theme.text.subtitle3}
`;

export const ChangeText = styled.p`
  display: flex;
  height: 18px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 5px;

  color: ${({ theme }) => theme.colors.blue[400]};
`;

export const PersonInfoBottomWrapper = styled.div`
  color: ${({ theme }) => theme.colors.gray[700]};

  /* [body2]본문 */
  ${({ theme }) => theme.text.body2}
`;

export const UserInfoTextRed = styled.span`
  color: ${({ theme }) => theme.colors.pink[200]};

  /* [Subtitle3] 본문 메인레이블 */
  ${({ theme }) => theme.text.subtitle3}
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ChipWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;

  margin-top: 16px;
`;

export const ToggleButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DetailText = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};

  /* [Caption1] 하단네비 */
  ${({ theme }) => theme.text.caption1}
`;

export const NoticeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReservationBottomWrapper = styled.div<PurchaseProps>`
  width: ${({ width }) => width || "360px"};
  height: 264px;

  background: #fff;
`;

export const ButtonFormWrapper = styled.div<PurchaseProps>`
  display: flex;
  width: ${({ width }) => width || "360px"};
  padding: 16px 0px;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  border-top: 1px solid ${({ theme }) => theme.colors.gray[300]};
`;

export const BottomDetailText = styled.span`
  color: ${({ theme }) => theme.colors.gray[700]};

  /* [Caption1] 하단네비 */
  ${({ theme }) => theme.text.caption1}
`;

export const BottomDetailTextBlue = styled.span`
  color: ${({ theme }) => theme.colors.blue[400]};

  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  letter-spacing: -0.24px;
  text-decoration-line: underline;
`;

export const FormWrapper = styled.div<PurchaseProps>`
  width: ${({ width }) => width || "332px"};
  display: flex;
  flex-direction: column;
`;

export const TextInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;

export const TextInputSpacer = styled.div`
  margin-top: 20px;
`;

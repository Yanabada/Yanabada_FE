import styled from "@emotion/styled";
// FIXME: 모듈화
interface TransactionStatementProps {
  divType?: string;
  width?: string;
  color?: string;
  imageURL?: string;
  isBorder?: boolean;
}

export const InfoWrapper = styled.div<TransactionStatementProps>`
  width: ${({ width }) => width || "332px"};
  height: ${({ divType }) =>
    (divType === "payInfo" && "244.993px") ||
    (divType === "payInfo-tall" && "270px") ||
    (divType === "transactionInfo" && "300px")};
  padding: 14px 14px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  background: #fff;
`;

// FIXME: 모듈화
export const TopWrapper = styled.div<TransactionStatementProps>`
  display: flex;
  width: ${({ width }) => width || "332px"};
  padding: 8px 0px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 7px;
`;

export const TopLabel = styled.p`
  color: ${({ theme }) => theme.colors.gray[900]};

  /* [Subtitle3] 본문 메인레이블 */
  ${({ theme }) => theme.text.subtitle3}
`;

export const SeperationForm = styled.div<TransactionStatementProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  align-self: stretch;

  border-top: ${({ isBorder }) => isBorder && "1px dashed #CCCCCC"};
  padding-top: ${({ isBorder }) => isBorder && "12px"};
`;

export const FormTextWrapper = styled.div`
  display: flex;
`;

export const FormLeftText = styled.p<TransactionStatementProps>`
  color: ${({ color }) =>
    (color === "gray" && "#9C9C9C") ||
    (color === "blue" && "#38A3EB") ||
    (color === "red" && "#DE2E5F")};

  /* [body2]본문 */
  ${({ theme }) => theme.text.body2}
`;

export const FormLeftTextBold = styled.p`
  color: ${({ theme }) => theme.colors.gray[900]};

  /* [Subtitle5] 본문 서브레이블 */
  ${({ theme }) => theme.text.subtitle5}
`;

export const FormRightPrice = styled.p<TransactionStatementProps>`
  color: ${({ color }) =>
    (color === "lightGray" && "#CCC") ||
    (color === "gray" && "#9C9C9C") ||
    (color === "darkGray" && "#616161") ||
    (color === "blue" && "#38A3EB") ||
    (color === "black" && "#1A1A1A")};
  text-align: right;

  /* [Subtitle4] 금액표기 */
  ${({ theme }) => theme.text.subtitle4}
`;

export const FormRightText = styled.p`
  color: ${({ theme }) => theme.colors.gray[900]};
  text-align: right;

  /* [Button2] 칩 버튼 */
  ${({ theme }) => theme.text.button2}
`;

export const MiddleWrapper = styled.div<TransactionStatementProps>`
  display: flex;
  width: ${({ width }) => `calc(${width} - 25px)` || "307px"};
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;

  border-bottom: ${({ isBorder }) => isBorder && "1px dashed #CCCCCC"};
  padding-bottom: 12px;
`;

export const MiddleBottomWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`;

export const ImageWrapper = styled.div<TransactionStatementProps>`
  width: 64px;
  height: 64px;
  border-radius: 5px;

  /* FIXME: 레이아웃 모듈화(ListCard) */
  align-self: stretch;

  background-color: lightgray;
  background-image: url(${({ imageURL }) => imageURL});
  background-size: cover;
  /*************************/
`;

export const MiddleBottomRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AccomodationName = styled.p`
  align-self: stretch;

  color: ${({ theme }) => theme.colors.gray[900]};

  /* [Button2] 칩 버튼 */
  ${({ theme }) => theme.text.button2}
`;

export const RoomName = styled.p`
  flex: 1 0 0;
  align-self: stretch;

  color: ${({ theme }) => theme.colors.gray[600]};

  /* [body2]본문 */
  ${({ theme }) => theme.text.body2}
`;

export const ShortcutWrapper = styled.div`
  display: flex;
  padding: 2px;
  justify-content: center;
  align-items: center;
  gap: 2px;

  border-radius: 3px;
  background: ${({ theme }) => theme.colors.gray[100]};
`;

export const ShortcutText = styled.p`
  color: ${({ theme }) => theme.colors.gray[700]};

  /* [Overline] 오버라인 */
  ${({ theme }) => theme.text.overline}
`;

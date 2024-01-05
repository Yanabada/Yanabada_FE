import styled from "@emotion/styled";

export const CardSectionWrapper = styled.div`
  display: flex;
  width: 332px;
  padding: 6px 0px 16px 0px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 5px;
  border: 1px solid var(--Stroke_Gray, #e6e6e6);
  background: #fff;

  /* 은은한쉐도우 */
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.03);
`;

export const ListButtonWrapper = styled.div`
  display: flex;
  padding: 0px 16px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;

export const ListButton = styled.button`
  display: flex;
  height: 50px;
  padding: 10px 0px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  backdrop-filter: blur(10px);
`;

export const ListButtonText = styled.p`
  color: var(--M3-black, #000);
  text-align: center;

  /* [Subtitle6] 버튼리스트 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
`;

export const RightSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RightSectionText = styled.p`
  color: var(--DullGray, #9c9c9c);
  text-align: right;

  /* [body2]본문 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px; /* 150% */
`;

export const BottomSectionWrapper = styled.div`
  display: flex;
  padding: 0px 16px;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

export const BottomLeftButton = styled.button`
  display: flex;
  height: 40px;
  padding-right: 9px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  border-radius: 5px;
  background: var(--LightBlue, #e6eef9);
`;

export const BottomLeftButtonText = styled.p`
  color: var(--ConfirmBlue, #0751c3);
  text-align: center;

  /* [Button1] 버튼진하게 */
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 21px; /* 140% */
`;

export const BottomRightButtonText = styled.p`
  color: #fff;
  text-align: center;

  /* [Button1] 버튼진하게 */
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 21px; /* 140% */
`;

export const BottomRightButton = styled.button`
  display: flex;
  height: 40px;
  padding-right: 9px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  border-radius: 5px;
  background: var(--Yanabada-Blue, #38a3eb);
`;

import styled from "@emotion/styled";
import { css } from "@emotion/react";

const ButtonLayout = css`
  display: flex;
  height: 40px;
  padding-right: 9px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  border-radius: 5px;
`;

export const CardSectionWrapper = styled.div`
  display: flex;
  width: 332px;
  padding: 6px 0px 16px 0px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
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
  ${({ theme }) => theme.text.subtitle6};
  color: var(--M3-black, #000);
  text-align: center;
`;

export const RightSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RightSectionText = styled.p`
  ${({ theme }) => theme.text.body2};
  color: ${({ theme }) => theme.colors.gray[600]};
  text-align: right;
`;

export const BottomSectionWrapper = styled.div`
  display: flex;
  padding: 0px 16px;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

export const BottomLeftButton = styled.button`
  ${ButtonLayout}
  background: ${({ theme }) => theme.colors.blue[50]};
`;

export const BottomLeftButtonText = styled.p`
  ${({ theme }) => theme.text.button1};
  color: ${({ theme }) => theme.colors.blue[400]};
  text-align: center;
`;

export const BottomRightButtonText = styled.p`
  ${({ theme }) => theme.text.button1};
  color: #fff;
  text-align: center;
`;

export const BottomRightButton = styled.button`
  ${ButtonLayout}
  background: ${({ theme }) => theme.colors.blue[200]};
`;

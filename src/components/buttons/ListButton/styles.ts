import styled from "@emotion/styled";

export const ListButtonWrapper = styled.div`
  display: flex;
  width: 331px;
  height: 50px;
  padding: 10px 0px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
  backdrop-filter: blur(10px);
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Text = styled.p`
  ${({ theme }) => theme.text.subtitle6};
  color: #000;
  text-align: center;
`;

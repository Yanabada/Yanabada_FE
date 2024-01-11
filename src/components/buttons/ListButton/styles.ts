import styled from "@emotion/styled";

interface ListButtonProps {
  width?: string;
}

export const ListButtonWrapper = styled.div<ListButtonProps>`
  display: flex;
  width: ${({ width }) => width || "100%"};
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

export const Badge = styled.div`
  display: inline-flex;
  min-width: 16px;
  padding: 0px 4px;
  justify-content: center;
  align-items: center;
  gap: 2px;

  border-radius: 39px;
  background: ${({ theme }) => theme.colors.orange[200]};
`;

export const BadgeText = styled.p`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 15.6px */
`;

import styled from "@emotion/styled";
import { Flex } from "@styles/base";

export const Container = styled(Flex)`
  flex-direction: column;

  margin-block: 0.5rem 0.75rem;

  svg > rect {
    fill: ${({ theme }) => theme.colors.gray[600]};
  }
`;

export const Wrapper = styled(Flex)`
  justify-content: space-between;
  align-items: center;

  span {
    ${({ theme }) => theme.text.subtitle4};
    color: ${({ theme }) => theme.colors.gray[700]};
  }

  span:nth-child(2) {
    width: 20px;
    text-align: center;
  }
`;

export const IconWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 24px;
  height: 24px;
  border-radius: 50%;

  background-color: #f2f2f2;

  &.active {
    background-color: ${({ theme }) => theme.colors.blue[50]};
  }
`;

export const HLine = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray[100]};
`;

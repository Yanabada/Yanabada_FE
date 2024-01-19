import styled from "@emotion/styled";

export const ChatInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 899;

  border-top: 1px solid ${({ theme }) => theme.colors.gray[300]};
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.shadows[2]};

  padding: 0 14px;
  &.active svg {
    fill: ${({ theme }) => theme.colors.blue[200]};
  }

  svg {
    fill: ${({ theme }) => theme.colors.gray[500]};
    transition: all 0.2s ease-in-out;

    :hover {
      fill: ${({ theme }) => theme.colors.blue[200]};
    }
  }
`;

export const ChatInput = styled.input`
  width: 100%;
  padding: 9px 12px;
  border-radius: 208px;
  border: 1px solid #fff;
  background-color: ${({ theme }) => theme.colors.gray[200]};
  ${({ theme }) => theme.text.button2};
  outline: none;
`;

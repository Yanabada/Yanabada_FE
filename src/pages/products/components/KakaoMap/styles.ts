import styled from "@emotion/styled";

export const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1001;
`;

export const Pin = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 8px;

  ${({ theme }) => theme.text.subtitle4};
  color: #fff;

  border-radius: 71px;
  background-color: ${({ theme }) => theme.colors.blue[200]};
  box-shadow: 0px 2px 18px 3px rgba(0, 0, 0, 0.1);

  transition: all 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: -14px;
    left: 50%;
    transform: translateX(-50%);
    border-top: 14px solid ${({ theme }) => theme.colors.blue[200]};
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 0px solid transparent;
  }

  &[data-selected="true"] {
    border: 3px solid #fff;
    background-color: #0065a8;

    &::after {
      border-top: 14px solid #0065a8;
    }
  }
`;

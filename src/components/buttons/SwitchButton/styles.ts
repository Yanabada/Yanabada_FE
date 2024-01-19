import styled from "@emotion/styled";

interface SwitchButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOn: boolean;
}

export const Switch = styled.div<SwitchButtonProps>`
  display: flex;
  width: 48.75px;
  height: 26px;
  justify-content: ${({ isOn }) => (isOn ? "flex-end" : "flex-start")};
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;

  border-radius: 30px;
  border: 0.4px solid #309ce4;
  background-color: ${({ isOn }) => (isOn ? "#0751C3" : "#9C9C9C")};

  .handle {
    width: 24px;
    height: 24px;
    background-color: #fff;
    border-radius: 40px;
  }
`;

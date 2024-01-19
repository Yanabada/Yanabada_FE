import styled from "@emotion/styled";

interface SwitchButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOn: boolean;
}

export const Switch = styled.div<SwitchButtonProps>`
  display: flex;
  width: 48.75px;
  height: 26px;
  justify-content: ${({ isOn }) => (isOn ? "flex-start" : "flex-end")};
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;

  border-radius: 30px;
  border: 0.4px solid #309ce4;
  background-color: ${({ theme }) => theme.colors.blue[400]};

  .handle {
    width: 24px;
    height: 24px;
    background-color: #fff;
    border-radius: 40px;
  }
`;

export const WithdrawalWrapper = styled.div`
  display: flex;
  width: 331px;
  height: 50px;
  padding: 10px 0px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`;

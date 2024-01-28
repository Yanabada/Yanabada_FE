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

export const ResearchButton = styled.button`
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);

  padding: 5px 10px;

  border-radius: 200px;
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
  background: #fff;
  box-shadow: 0px 2px 18px 3px rgba(0, 0, 0, 0.1);

  ${({ theme }) => theme.text.subtitle5};
  color: ${({ theme }) => theme.colors.blue[400]};

  z-index: 1001;
  white-space: nowrap;
`;

export const clustererStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "80px",
  height: "80px",
  padding: "10px",
  border: "2px solid #fff",
  borderRadius: "50%",
  background:
    "linear-gradient(102deg, rgba(58, 200, 244, 0.90) 10.91%, rgba(94, 155, 243, 0.90) 89.69%)",
  boxShadow: "0px 2px 18px 3px rgba(0, 0, 0, 0.10)",
  fontSize: "20px",
  fontWeight: 600,
  color: "#fff"
};

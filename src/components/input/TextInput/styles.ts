import styled from "@emotion/styled";

export const InputWrapper = styled.div`
  position: relative;

  width: 100%;
`;

export const Input = styled.input`
  width: 100%;

  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray[100]};
  outline: none;

  padding-block: 0.5rem;

  color: ${(props) => props.theme.colors.gray[900]};
  background-color: transparent;

  font-family: "Pretendard";
  font-size: 1rem;

  &:focus + label.move,
  &:valid + label.move {
    top: -10px;
    font-size: 0.75rem;
  }

  &.error {
    border-bottom: 1px solid ${(props) => props.theme.colors.pink[200]};
  }
`;

export const Label = styled.label`
  position: relative;

  white-space: nowrap;
  opacity: 0.5;

  &.move {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;

    display: block;

    transition: all 0.2s ease;
  }
`;

export const RightElement = styled.div`
  position: absolute;

  right: 0;
  top: 50%;
  transform: translateY(-50%);

  pointer-events: none;
`;

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.pink[200]};

  font-size: 1rem;

  margin-top: 0.25rem;
`;

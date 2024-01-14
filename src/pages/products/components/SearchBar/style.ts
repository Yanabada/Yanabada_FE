import styled from "@emotion/styled";
import { IoIosSearch } from "react-icons/io";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0 1rem 0.75rem 1rem;
`;

export const InputLabel = styled.label`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  height: 2.25rem;
  padding: 0.5625rem 0.75rem 0.5625rem 2.5rem;
  border-radius: 200px;
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
  background: rgba(255, 255, 255, 0.4);
  box-shadow: ${({ theme }) => theme.shadows[3]};
  cursor: pointer;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[600]};
  }
`;

export const InputIcon = styled(IoIosSearch)`
  position: absolute;
  left: 1rem;
  width: 1.125rem;
  height: 1.125rem;
  color: ${({ theme }) => theme.colors.blue[300]};
`;

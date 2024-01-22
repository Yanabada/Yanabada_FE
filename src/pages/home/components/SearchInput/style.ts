import styled from "@emotion/styled";
import { IoIosSearch } from "react-icons/io";
import { css } from "@emotion/react";

export const Container = styled.div`
  max-width: 780px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 14.5rem;
  background: linear-gradient(231deg, #5d99f2 35.76%, #5ed8ff 83.56%);
`;

export const Text = styled.p`
  padding: 1.3rem 1rem 0 1rem;
  color: #fff;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const InputLabel = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  height: 2.25rem;
  padding: 0.5625rem 0.75rem 0.5625rem 2.5rem;
  border-radius: 200px;
  border: 1px solid #fff;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: ${({ theme }) => theme.shadows[2]};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[700]};
  }
`;

export const Icon = css`
  position: absolute;
  left: 1rem;
  width: 1.125rem;
  height: 1.125rem;
`;

export const LocationInputIcon = styled(IoIosSearch)`
  ${Icon}
  color: ${({ theme }) => theme.colors.blue[300]};
`;

export const AccumulateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding: 2rem;
  border-radius: 19px 19px 0 0;
  background: #fff;
`;

export const AccumulateTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Line = styled.div`
  width: 1px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray[300]};
`;

export const AccumulateTitle = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  ${({ theme }) => theme.text.caption1}
`;

export const AccumulateNumber = styled.p`
  background: linear-gradient(102deg, #3ac8f4 10.91%, #5e9bf3 89.69%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
`;

import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 2.25rem;
  padding: 0.5625rem 0.75rem 0.5625rem 1rem;
  border-radius: 200px;
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
  background: rgba(255, 255, 255, 0.4);
  box-shadow: ${({ theme }) => theme.shadows[3]};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`;

export const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  gap: 0.5rem;
`;

export const Text = styled.p`
  margin-bottom: 0.5rem;
  ${({ theme }) => theme.text.body2};
  color: ${({ theme }) => theme.colors.gray[700]};
`;

import styled from "@emotion/styled";

export const TermContainer = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 45px;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 16px;
  padding: 0 16px;

  border-radius: 20px 20px 0px 0px;
  background: #fff;
`;

export const TermLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export const TermTitle = styled.p`
  color: ${({ theme }) => theme.colors.gray[900]};

  /* [Button1] 버튼진하게 */
  ${({ theme }) => theme.text.button1}
`;

export const TermText = styled.p`
  color: ${({ theme }) => theme.colors.gray[700]};

  /* [Caption1] 하단네비 */
  ${({ theme }) => theme.text.caption1}

  a {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
  }
`;

import styled from "@emotion/styled";

export const ProductListWrap = styled.div`
  padding: 14px;
  height: calc(100vh - 112px);
`;

export const NoticeTitle = styled.p`
  ${({ theme }) => theme.text.subtitle5};
  span {
    color: ${({ theme }) => theme.colors.pink[200]};
    ${({ theme }) => theme.text.body2};
  }
`;

export const NoListWrap = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  .tit {
    ${({ theme }) => theme.text.subtitle5};
    color: ${({ theme }) => theme.colors.gray[700]};
    margin-top: 10px;
  }
  .desc {
    ${({ theme }) => theme.text.body2};
    color: ${({ theme }) => theme.colors.gray[600]};
    margin-top: 4px;
  }
`;

export const ListWrap = styled.div`
  /* background-color: blue; */
`;

export const ListCard = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
`;

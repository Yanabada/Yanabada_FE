import styled from "@emotion/styled";

export const PriceTable = styled.table`
  width: 100%;
  margin-top: 10px;

  border-spacing: 0;
  border-collapse: collapse;
  tr {
    &.today-row {
      background-color: ${(props) => props.theme.colors.orange[100]};
      td {
        color: ${(props) => props.theme.colors.orange[200]};
      }
    }
  }
  th,
  td {
    padding: 8px;
    margin: 0;

    border: 1px solid ${(props) => props.theme.colors.gray[100]};
  }
  th {
    ${(props) => props.theme.text.button2};

    background-color: ${(props) => props.theme.colors.gray[200]};
  }
  td {
    ${(props) => props.theme.text.body3};
    color: ${(props) => props.theme.colors.gray[700]};
  }
`;

import styled from "@emotion/styled";
import { Flex, NoScrollBar } from "@styles/base";

export const OptionWrapper = styled.div`
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  gap: 0.5rem;
  padding-inline: 1rem;

  overflow-x: scroll;

  ${NoScrollBar};

  @media (min-width: 550px) {
    justify-content: space-around;
  }
`;

export const TitleWrapper = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  padding-inline: 1rem;

  h2 {
    color: #1a1a1a;
    ${({ theme }) => theme.text.subtitle2};
  }

  a {
    color: ${({ theme }) => theme.colors.blue[400]};
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    line-height: 130%;

    :hover {
      text-decoration: underline;
    }
  }
`;

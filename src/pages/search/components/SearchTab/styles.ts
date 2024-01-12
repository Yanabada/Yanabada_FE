import styled from "@emotion/styled";

interface SubtitleProps {
  color: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 9px 16px;

  border: 1.5px solid #fff;
  border-radius: 20px;
  box-shadow: 0px 3.852px 17.142px 0px rgba(0, 0, 0, 0.1);

  transition: all 0.2s ease;
`;

export const Wrapper = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;

    &.active svg > path,
    &.active svg > circle {
      stroke: ${({ theme }) => theme.colors.blue[200]};
    }

    &.active.arrow {
      transform: rotate(180deg);
    }
  }
`;

export const SearchIcon = styled;

export const Subtitle = styled.h2<SubtitleProps>`
  width: 100%;

  padding-block: 10px;

  border: none;
  outline: none;

  ${({ theme }) => theme.text.subtitle6};
  color: ${({ color }) => color};
`;

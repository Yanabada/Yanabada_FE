import styled from "@emotion/styled";

export const UpperNavWrapper = styled.div`
  position: fixed;
  max-width: 780px;
  height: 56px;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;

  text-align: center;

  background-color: transparent;

  &.hasBorder {
    border-bottom: 1px solid ${(props) => props.theme.colors.gray[100]};
  }
`;

const UpperNavCenter = styled.div`
  display: inline-block;
  position: absolute;
  margin: 14px 0;
`;

export const TextWrapper = styled(UpperNavCenter)`
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
`;

export const LeftIconWrapper = styled(UpperNavCenter)`
  left: 14px;
`;

export const RightIconWrapper = styled(UpperNavCenter)`
  right: 14px;

  display: flex;
  gap: 14px;
`;

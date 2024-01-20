import styled from "@emotion/styled";

export const Container = styled.div`
  background-color: #fff;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  padding: 1.25rem;

  background-color: ${({ theme }) => theme.colors.gray[200]};

  h2 {
    ${({ theme }) => theme.text.subtitle2};
    color: ${({ theme }) => theme.colors.gray[900]};
  }

  p {
    ${({ theme }) => theme.text.body2};
    color: ${({ theme }) => theme.colors.gray[700]};
  }
`;

export const Title = styled.h2`
  ${({ theme }) => theme.text.subtitle3};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin: 1rem 1rem 1rem 1rem;
`;

export const SubTitle = styled.p`
  ${({ theme }) => theme.text.body2};
  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const Text = styled.p`
  ${({ theme }) => theme.text.button2};
  color: ${({ theme }) => theme.colors.gray[700]};

  &.bold {
    ${({ theme }) => theme.text.subtitle4};
  }

  &.blue {
    color: ${({ theme }) => theme.colors.blue[200]};
  }

  &.gray {
    ${({ theme }) => theme.text.caption1};
    color: ${({ theme }) => theme.colors.gray[700]};
  }

  &.gray-600 {
    color: ${({ theme }) => theme.colors.gray[600]};
  }

  &.gray-500 {
    color: ${({ theme }) => theme.colors.gray[500]};
  }

  &.center {
    text-align: center;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 1rem;
  margin-bottom: 1rem;
  gap: 1rem;

  .above,
  .bottom {
    display: flex;
  }

  .above {
    gap: 1rem;
  }

  .bottom {
    align-self: flex-end;
  }

  .info {
    display: flex;
    flex-direction: column;
  }

  .product {
    ${({ theme }) => theme.text.button1};
    color: ${({ theme }) => theme.colors.gray[900]};
  }

  .room,
  .guest {
    ${({ theme }) => theme.text.caption1};
    color: ${({ theme }) => theme.colors.gray[700]};
  }

  .date {
    ${({ theme }) => theme.text.body3};
    color: ${({ theme }) => theme.colors.gray[700]};
  }

  .check {
    ${({ theme }) => theme.text.body2};
    color: ${({ theme }) => theme.colors.gray[600]};
  }
`;

export const ImageWarpper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 5px;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 1rem;
  margin-bottom: 14px;

  h2 {
    margin: 0;
  }
`;

export const NoticeWrapper = styled.div`
  padding-inline: 1rem;
  margin-bottom: 1rem;

  color: #ff7456;
`;

export const Spacer = styled.div<{ height?: string }>`
  height: ${({ height }) => (height ? height : "1rem")};
  background-color: ${({ theme }) => theme.colors.gray[200]};

  &.border-bottom {
    margin-inline: 1rem;
    border-bottom: 1px solid #cccccc;
    background-color: transparent;
  }
`;

export const Footer = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[200]};
  padding: 1.25rem 1rem;

  ${({ theme }) => theme.text.caption1};
  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const BottomActions = styled.div`
  display: grid;
  gap: 12px;
  padding: 1rem;

  border-top: 1px solid ${({ theme }) => theme.colors.gray[300]};
  background: #fff;
  box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.25);

  .bottom {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 0.75rem;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.colors.gray[100]};
      ${({ theme }) => theme.text.button1};
      color: ${({ theme }) => theme.colors.gray[700]};

      &.blue {
        background-color: ${({ theme }) => theme.colors.blue[200]};
        color: #fff;
      }
    }
  }
`;

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1rem;

  background-color: #e6eef9;

  .logo {
    width: 100px;

    img {
      width: 100%;
    }
  }

  .desc {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    color: #38a3eb;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;

    .bold {
      color: #0751c3;
      font-size: 18px;
      font-weight: 700;
    }
  }

  & + div {
    padding-block: 1.25rem;
  }
`;

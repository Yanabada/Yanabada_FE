import { css } from "@emotion/react";

const globalStyles = css`
  * {
    margin: 0px;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  form,
  textarea,
  label,
  table {
    font-family: "Pretendard-Regular";
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    box-sizing: border-box;
  }
  html,
  body {
    height: 100%;
  }
  body {
    line-height: 1;
    background: #e6e6e6;
  }
  ol,
  ul {
    list-style: none;
  }
  button {
    font-family: "Pretendard-Regular";
    border: 0;
    background: transparent;
    cursor: pointer;
    padding: 0;
    margin: 0;
  }
  input {
    font-family: "Pretendard-Regular";
  }

  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }
`;

export default globalStyles;

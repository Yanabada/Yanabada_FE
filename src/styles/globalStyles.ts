import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p,
    a, dl, dt, dd, ol, ul, li, form, label, table {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 16px;
        vertical-align: baseline;
    }
    body {
        line-height: 1;
        font-family: Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
        background-color: #303030;
        width: 100%;
        height: 100%;
    }
    ol, ul {
        list-style: none;
    }
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
`;

export default GlobalStyles;

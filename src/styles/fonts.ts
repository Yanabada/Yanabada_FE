import { css } from "@emotion/react";

import PretendardRegular from "../fonts/Pretendard-Regular.woff";
import PretendardBold from "../fonts/Pretendard-Bold.woff";

export const fonts = css`
  @font-face {
    font-family: Pretendard;
    font-style: normal;
    font-weight: normal;
    src:
      local("Pretendard"),
      url(${PretendardRegular}) format("woff");
  }

  @font-face {
    font-family: Pretendard;
    font-style: normal;
    font-weight: 500;
    src:
      local("Pretendard"),
      url(${PretendardBold}) format("woff");
  }
`;

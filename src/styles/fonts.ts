import { css } from "@emotion/react";

import PretendardRegular from "../fonts/Pretendard-Regular.woff";
import PretendardMedium from "../fonts/Pretendard-Medium.woff";
import PretendardSemiBold from "../fonts/Pretendard-SemiBold.woff";

export const fonts = css`
  @font-face {
    font-family: Pretendard;
    font-style: normal;
    font-weight: 400;
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
      url(${PretendardMedium}) format("woff");
  }

  @font-face {
    font-family: Pretendard;
    font-style: normal;
    font-weight: 600;
    src:
      local("Pretendard"),
      url(${PretendardSemiBold}) format("woff");
  }
`;

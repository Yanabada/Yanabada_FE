import styled from "@emotion/styled";

interface ImageButtonProps {
  imageURL: string;
  width?: string;
}

interface TextWrapperProps {
  width?: string;
}

export const ImageButtonWrapper = styled.button<ImageButtonProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: ${({ width }) => width || "106px"};
  height: ${({ width }) => width || "106px"};
  flex-shrink: 0;
  background-color: lightgray;
  background-image: url(${({ imageURL }) => imageURL});
  background-size: cover;
  background-repeat: no-repeat;
  border: 2px solid #fff;
  border-radius: 25px;
`;

export const ImageButtonTextWrapper = styled.div<TextWrapperProps>`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: ${({ width }) => `calc(${width} - 4px)` || "102px"};
  height: ${({ width }) => `calc(${width} - 44px)` || "62px"};
  flex-shrink: 0;

  background: linear-gradient(0deg, #1a1a1a 0%, rgba(26, 26, 26, 0) 79.27%);

  border-radius: 23px;
`;

export const ImageButtonText = styled.p`
  /* [Button1] 버튼진하게 */
  ${({ theme }) => theme.text.button1}

  color: #fff;
  text-align: center;
  margin-bottom: 7%;

  /* 위로올라가는쉐도우 */
  text-shadow: ${({ theme }) => theme.shadows[1]};
`;

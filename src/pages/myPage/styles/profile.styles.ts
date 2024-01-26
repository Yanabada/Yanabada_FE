import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface ProfileProps {
  width?: string;
  gap?: string;
  imageURL?: string;
}

const TextLayout = css`
  display: flex;
  align-items: center;
  align-self: stretch;
`;

export const ProfileContainer = styled.div<ProfileProps>`
  width: ${({ width }) => width || "360px"};
  display: flex;
  padding: 20px 14px;
  flex-direction: column;
  gap: ${({ gap }) => gap || "0px"};

  background-color: #fff;
`;

export const ProfileWrapper = styled.div<ProfileProps>`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;

  align-items: center;
  gap: ${({ gap }) => gap || "0px"};
`;

export const ProfileImage = styled.div<ProfileProps>`
  display: flex;
  width: 96px;
  height: 96px;
  align-items: center;
  gap: -6px;
  flex-shrink: 0;

  background-color: lightgray;
  background-image: url(${({ imageURL }) => imageURL});
  background-size: cover;

  border-radius: 50%;
`;

export const ProfileTextWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 5px;
`;

export const ProfileText = styled.p`
  color: ${({ theme }) => theme.colors.gray[900]};
  text-align: center;

  /* [Subtitle4] 모달텍스트 */
  ${({ theme }) => theme.text.subtitle4}
`;

export const EmailText = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  text-align: center;

  /* [Subtitle6] 버튼리스트 */
  ${({ theme }) => theme.text.subtitle6}
`;

export const PersonalInfoWrapper = styled.div<ProfileProps>`
  display: flex;
  flex-direction: column;
  padding: 20px 0;

  gap: ${({ gap }) => gap || "0px"};
`;

export const PersonalInfoTextWrapper = styled.div`
  display: flex;
`;

export const LeftTextWrapper = styled.div`
  ${TextLayout}

  padding-right: 51px;
`;

export const PasswordWrapper = styled.div`
  ${TextLayout}

  padding-right: 39px;
`;

export const PhoneNumberWrapper = styled.div`
  ${TextLayout}

  padding-right: 27px;
`;

export const RightTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
`;

export const LeftText = styled.p`
  color: #a7a7a7;

  /* [body2]본문 */
  ${({ theme }) => theme.text.body2}
`;

export const RightText = styled.p`
  color: ${({ theme }) => theme.colors.gray[700]};
  text-align: right;

  /* [body1] 숙소이름 */
  ${({ theme }) => theme.text.body1}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  padding-left: 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;

  border-radius: 5px;
`;

export const ButtonText = styled.p`
  color: ${({ theme }) => theme.colors.blue[400]};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 18.2px */
`;

export const CheckBoxContainer = styled.div`
  display: flex;

  gap: 16px;
`;

export const CheckBoxWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`;

export const IconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  cursor: pointer;
`;

export const CheckBoxText = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};

  /* [body2]본문 */
  ${({ theme }) => theme.text.body2}
`;

export const SwitchLabel = styled.label<ProfileProps>`
  display: flex;
  width: ${({ width }) => `calc(${width} - 28px)` || "332px"};
  padding: 8px 0px;
  align-items: center;
  gap: 7px;
`;

export const LabelLeftWrapper = styled.div`
  display: flex;
  padding-right: 71.25px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 7px;
  flex: 1 0 0;
`;

export const Label = styled.div`
  color: ${({ theme }) => theme.colors.gray[900]};

  /* [Subtitle2] 메뉴 텍스트 */
  ${({ theme }) => theme.text.subtitle2}
`;

export const LabelLeftBottomText = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};

  /* [body2]본문 */
  ${({ theme }) => theme.text.body2}
`;

export const WithdrawalWrapper = styled.div<ProfileProps>`
  display: flex;
  width: ${({ width }) => `calc(${width} - 28px)` || "332px"};
  height: 50px;
  padding: 10px 0px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`;

export const EditIconWrapper = styled.div`
  display: flex;
`;

export const TextInputWrapper = styled.div<ProfileProps>`
  width: ${({ width }) => width || "332px"};
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

export const TextInputBottomWrapper = styled.div<ProfileProps>`
  display: flex;
  width: ${({ width }) => width || "332px"};
  justify-content: flex-end;
  align-items: flex-start;
  gap: 8px;
  margin-top: 16px;
`;

export const FormWrapper = styled.div<ProfileProps>`
  width: ${({ width }) => width || "332px"};
`;

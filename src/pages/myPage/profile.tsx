import UpperNavBar from "@components/navBar/upperNavBar";
import * as S from "./styles/profile.styles";
import ProfileImg from "@assets/icons/profileImg.svg?react";
import EditIcon from "@assets/icons/editIcon.svg?react";
import { Spacer } from "@pages/purchase/styles/styles";
import CheckIcon from "@assets/icons/checkbox_Check.svg?react";
import { Input, Icon } from "@components/input/Checkbox/allConsentCheckbox.style";
import SwitchButton from "@components/buttons/SwitchButton";
import ArrowForwardIcon from "@assets/icons/arrowForwardIconLight.svg?react";

interface ProfileProps {
  width?: string;
  imageURL?: string;
}

const Profile = ({ width }: ProfileProps) => {
  return (
    <>
      <UpperNavBar title="내 정보 관리" type="back" />
      <S.ProfileContainer width={width}>
        <S.ProfileWrapper gap="16px">
          {/* FIXME: 추후 DB에서 받아온 이미지로 변경 예정 */}
          {/* <S.ProfileImage imageURL={imageURL} /> */}
          <ProfileImg />
          <S.ProfileTextWrapper>
            <S.ProfileText>강쥐사랑해</S.ProfileText>
            <EditIcon />
          </S.ProfileTextWrapper>
          <S.EmailText>email*****@gmail.com</S.EmailText>
        </S.ProfileWrapper>

        <Spacer width={width} />

        <S.PersonalInfoWrapper gap="16px">
          <S.Label>개인정보</S.Label>
          <S.PersonalInfoTextWrapper>
            <S.LeftTextWrapper>
              <S.LeftText>아이디</S.LeftText>
            </S.LeftTextWrapper>
            <S.RightTextWrapper>
              <S.RightText>email*****@gmail.com</S.RightText>
            </S.RightTextWrapper>
          </S.PersonalInfoTextWrapper>

          <S.PersonalInfoTextWrapper>
            <S.LeftTextWrapper>
              <S.LeftText>이메일</S.LeftText>
            </S.LeftTextWrapper>
            <S.RightTextWrapper>
              <S.RightText>email*****@gmail.com</S.RightText>
            </S.RightTextWrapper>
          </S.PersonalInfoTextWrapper>

          <S.PersonalInfoTextWrapper>
            <S.PasswordWrapper>
              <S.LeftText>비밀번호</S.LeftText>
            </S.PasswordWrapper>
            <S.RightTextWrapper>
              <S.RightText>**********</S.RightText>
            </S.RightTextWrapper>
            <S.ButtonWrapper>
              <S.ButtonText>수정하기</S.ButtonText>
            </S.ButtonWrapper>
          </S.PersonalInfoTextWrapper>

          <S.PersonalInfoTextWrapper>
            <S.PhoneNumberWrapper>
              <S.LeftText>휴대폰번호</S.LeftText>
            </S.PhoneNumberWrapper>
            <S.RightTextWrapper>
              <S.RightText>010****1234</S.RightText>
            </S.RightTextWrapper>
            <S.ButtonWrapper>
              <S.ButtonText>수정하기</S.ButtonText>
            </S.ButtonWrapper>
          </S.PersonalInfoTextWrapper>
        </S.PersonalInfoWrapper>

        <Spacer width={width} />

        <S.PersonalInfoWrapper gap="16px">
          <S.Label>광고성 정보 수신동의</S.Label>
          <S.CheckBoxContainer>
            <S.CheckBoxWrapper>
              <S.IconWrapper>
                <Input id="agreement" type="checkbox" checked={true} />
                <Icon>
                  <CheckIcon />
                </Icon>
              </S.IconWrapper>
              <S.CheckBoxText>E-mail</S.CheckBoxText>
            </S.CheckBoxWrapper>

            <S.CheckBoxWrapper>
              <S.IconWrapper>
                <Input id="agreement" type="checkbox" checked={true} />
                <Icon>
                  <CheckIcon />
                </Icon>
              </S.IconWrapper>
              <S.CheckBoxText>문자</S.CheckBoxText>
            </S.CheckBoxWrapper>
          </S.CheckBoxContainer>
        </S.PersonalInfoWrapper>

        <Spacer width={width} />

        <S.PersonalInfoWrapper gap="16px">
          <S.SwitchLabel>
            <S.LabelLeftWrapper>
              <S.Label>푸시알림</S.Label>
              <S.LabelLeftBottomText>브라우저에서도 알림을 허용해주세요!</S.LabelLeftBottomText>
            </S.LabelLeftWrapper>
            <SwitchButton />
          </S.SwitchLabel>
        </S.PersonalInfoWrapper>

        <Spacer width={width} />

        <S.PersonalInfoWrapper gap="16px">
          <S.WithdrawalWrapper>
            <S.Label>회원탈퇴</S.Label>
            <ArrowForwardIcon />
          </S.WithdrawalWrapper>
        </S.PersonalInfoWrapper>
      </S.ProfileContainer>
    </>
  );
};

export default Profile;

import UpperNavBar from "@components/navBar/upperNavBar";
import * as S from "./styles/profile.styles";
import ProfileImg from "@assets/icons/profileImg.svg?react";
import EditIcon from "@assets/icons/editIcon.svg?react";
import { Spacer } from "@pages/purchase/styles/styles";
import CheckIcon from "@assets/icons/checkbox_Check.svg?react";
import { Input, Icon } from "@components/input/Checkbox/allConsentCheckbox.style";
import SwitchButton from "@components/buttons/SwitchButton";
import ArrowForwardIcon from "@assets/icons/arrowForwardIconLight.svg?react";
import { useState } from "react";
import TextInput from "@components/input/TextInput";
import ManipulationChip from "@components/chips/ManipulationChip";
import CancelIcon from "@assets/icons/cancelIcon.svg?react";
import { useForm } from "react-hook-form";

interface ProfileProps {
  width?: string;
  imageURL?: string;
}

const Profile = ({ width }: ProfileProps) => {
  const [isEditIconClicked, setIsEditIconClicked] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (errors.nickName) return;
    // FIXME: API 연동
    console.log("submit");

    const nickName = getValues("nickName");
    console.log("nickName", nickName);
  };

  const {
    register,
    formState: { errors },
    getValues,
    setValue
  } = useForm({
    mode: "onBlur"
  });

  return (
    <>
      <UpperNavBar title="내 정보 관리" type="back" />
      <S.ProfileContainer width={width}>
        <S.ProfileWrapper gap="16px">
          {/* FIXME: 추후 DB에서 받아온 이미지로 변경 예정 */}
          {/* <S.ProfileImage imageURL={imageURL} /> */}
          <ProfileImg />
          {isEditIconClicked ? (
            <S.FormWrapper width={width}>
              <form onSubmit={onSubmit}>
                <S.TextInputWrapper width={width}>
                  <TextInput
                    variant="move"
                    label="닉네임"
                    rightElement={<CancelIcon />}
                    onRightElementClick={() => setValue("nickName", "")}
                    {...register("nickName", {
                      required: true,
                      pattern: {
                        value: /^[가-힣a-zA-Z0-9]{2,8}$/,
                        message: "2~8자 한글/영문/숫자만 가능합니다."
                      }
                    })}
                    errorMessage={errors.nickName && `${errors.nickName?.message}`}
                  />
                </S.TextInputWrapper>
                <S.TextInputBottomWrapper width={width}>
                  <ManipulationChip
                    buttonType={!errors.nickName ? "abledDefault" : "disabledDefault"}
                    type="submit"
                  >
                    확인
                  </ManipulationChip>
                  <ManipulationChip buttonType="disabledDefault">취소</ManipulationChip>
                </S.TextInputBottomWrapper>
              </form>
            </S.FormWrapper>
          ) : (
            <>
              <S.ProfileTextWrapper>
                <S.ProfileText>강쥐사랑해</S.ProfileText>
                <S.EditIconWrapper onClick={() => setIsEditIconClicked(true)}>
                  <EditIcon />
                </S.EditIconWrapper>
              </S.ProfileTextWrapper>
              <S.EmailText>email*****@gmail.com</S.EmailText>
            </>
          )}
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

import Notice from "@components/notice";
import * as S from "./searchNotice.style";

const SearchNotice = () => {
  return (
    <S.Container>
      <Notice type="info" content="인원 미선택시 기본 성인 2명이 적용됩니다" />
    </S.Container>
  );
};

export default SearchNotice;

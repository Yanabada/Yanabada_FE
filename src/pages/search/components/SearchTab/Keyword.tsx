import * as S from "./keyword.style";
import ImageButton from "@components/buttons/ImageButton";
import KeywordStore from "@pages/search/stores/KeywordStore";

const keywordList = [
  {
    id: 1,
    name: "정동진",
    url: "https://s3-alpha-sig.figma.com/img/1bb1/9c37/10e00e7cb39397ff62ab12a96e16b39c?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GZ60xOcNiTFMgPxfarAxMeg3z31XZKaXSVXwu18pDbx5ozQfvj~CwiFtfg8eP0OmKMtNn0PKyRLWYjskDwUlPODgttk65fnjuoIXmyFjfGDrylHpGferC9UMeq5RrSK4NMM-jRlLjSo6pDerlMX1o0gFfEMKFaIR7k2hXB5ahAyyOvmH~4--gh4sj~EvGH78vD5NPIlJ0Awez5sUNGd9fAae2PVLbHPFlKVHgEOSsvp3txN1ulB3vtG3yx1fKFHleeGhQrZr0iVY-f4yM9r6M3NPmfjlABVdkM3EhlMwvgQIzH6QX7So~Qq3Qj0-1rAw6h014h10W1pXt8q-7sT9YQ__"
  },
  {
    id: 2,
    name: "여수",
    url: "https://s3-alpha-sig.figma.com/img/0640/7a71/6cdb1f8e14a941eabe6fb7ef1078dd48?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KS47gcu2UNMaXbEBeZA-BVUwNq3nYYOgHAAoUlnwTD1KWKky~WllTztwTGgKWD3xN1~zkaQ5aRcPdrFcXZHxlyUBUQHToi0JDTsTxLm3jFIcJ9y1tuMBEAiCJ4P~krQcbPdeszi6jPm8HvsxGVQMIt4oFggleGfvSBFMJbbh5bOXA4BYCnav2F0NaNMpm86qDaZ6Fk388QKyS993E7bVBBIYzr9H7Rkvez0SaSkV4ptz0mmrmyrqzGWOLx6Xm8aVUDLcgd-FsYYr-CDBd1PYZ5Tstk02D-bVJtty08wVi8Sl~dC~vrRBpbWPU40KB0MVeFDMYVF4ODYNrFc964oKlw__"
  },
  {
    id: 3,
    name: "제주",
    url: "https://s3-alpha-sig.figma.com/img/907d/1c58/370fd6be6666be0f2b0b59f8b7929e64?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PdaJNnfNr7yHmdQELaXTS13cfCFUmpUT-TSB~1OFIAkwHp4tAZvrrqpNjh24dyOfqzjhsJ9CFjaXbkBlzRSit7Zi76h5fTA06nm5BtZTODBNdY7A7LpMrJ3BI9DqikOhRJptOAWgpZNP6oYnxBVdVqzzSbu3Z8N70XpZYFHTxOs6mzyIwlklJeFCzKBtrWpr7dEuaK3y1Rd-DhEtp2wpPgQpRsJ-FqJQcSAMoFcAtrRtcEljgX~Z4B76Qm0YvFBIDhdaUa1VmerQMpFCbzL05jLA~uK8NUxzv57MoNoGaGrTwI1mm7McRm2FuP1sLIXnhwXfU0AaNclOFpxtmbFc7w__"
  },
  {
    id: 4,
    name: "남해",
    url: "https://s3-alpha-sig.figma.com/img/a912/7c30/d242ac2af85718caba8d7b748442a350?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PCy~Cw4YWvwfWEzfqnnH9gpSDe0IE3jH2eik1NedpyynkEcc5pzeyX-azAn~6UBMNC6w9cKoedD8QLboDDDHKRtAWouepeII5Z7L2fO~CA-mHdzhYVOZUl6tB9Uad4jdRF7ffpx~qWY~5f25QvUjzqlxbb22OAnLrcQDiOraZfWDkCeLwDlUPlYAoLo~r-M2iVDTzgRgBZEb6541G8bfFnOEpMkfKVsd8hmfQV5SYVItfg0IuRiOaJMtXATEpMMFUyLKnprCwuCNrWjifUfCTTCoWTTMDsZIgnD6xiJDOz8YYFrxZFb2UWUysOY-O3ONcnz-i5uiK2P0gkAe3j4IVA__"
  },
  {
    id: 5,
    name: "부산",
    url: "https://s3-alpha-sig.figma.com/img/549c/1e77/9a38333df938d8368bdf4120ded9b432?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qo6a8iZ1ABmE9vbTzTHUfo-RQKWPIA5X-M6IhfrnIflqN9KHlI1OkzpDoXYkAoqZjpgATy2JRGgOw4Y7wDBlkND6ZI0Okg2PQzGfJctdtSGtZNt6zKELDUoVgKJkxsOUGI2NkkhxaHTvJ9kohpiIidA1GZa7zpzvYuEV97NFZiL2ZBLB6MN0~Par311dN0tkSrFDVqFD1vn4quIuN6u0ow5obPTI5-C7cTYqJvxH7fWdX10XrRAkMPf0i3R824rYWp0iRtDa-Ze68wpBTOqPO-e5e53yrcEVfLVpWy360UTNe8OJ0Cds~dO0JqOMGtcbOaby75DFPtBt2dG3kQRLlg__"
  },
  {
    id: 6,
    name: "서울",
    url: "https://s3-alpha-sig.figma.com/img/4b00/ce1b/4c8a81157b55969a03e962f10b9defc0?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SwNf74Tsd3qFhKXfE39mR7~l4bCvtY1y5omQazyjmXX-K61hzDRbSAMPtIx11t7SsaeitHAB7ehsSXf2-EDXpgkz2CMNG7PyGL25YINBZD9trd5E9CV3HezYMsfP~DUucsI6LeBR65sakmb2oDPxRNdmoQCuq7XXpilLlpsBzapg0rN-N6UUgptb8CCL~SwhlztdjeetOMjY6DQb~uysEVafb9HRVrJhK8gB375MMDIAfq97b2oIcdy5BQ-s3CWFN9L5Oy8mce0tzWGhygsu4G9WD35zD3CN5R0vsu~qLTvPfc1B49EndY2KT05VGp-wxX6T8VY0-DhWi64SCtjPHQ__"
  }
];

const Keyword = () => {
  const { locationName, setLocationName } = KeywordStore();

  return (
    <S.Container>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <S.InputLabel>
          <S.Input
            placeholder="위치 장소 등을 입력해보세요"
            onChange={(event) => setLocationName(event.target.value)}
            value={locationName === "전체 지역" ? "" : locationName}
          />
        </S.InputLabel>
      </form>
      <S.Text>추천 키워드</S.Text>
      <S.ImageContainer>
        {keywordList.map((keyword) => (
          <div key={keyword.id} onClick={() => setLocationName(keyword.name)}>
            <ImageButton imageURL={keyword.url} children={keyword.name} width="5.8rem" />
          </div>
        ))}
      </S.ImageContainer>
    </S.Container>
  );
};

export default Keyword;

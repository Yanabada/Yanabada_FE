import * as S from "./styles/styles";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import Cookies from "js-cookie";

import UpperNavBar from "@components/navBar/upperNavBar";
import Notice from "@components/notice";
import AuthenticationButton from "@components/buttons/AuthenticationButton";
import Modal from "@components/modal";
import { getDayOfWeek } from "@utils/getDayOfWeek";
import NoItemsLogo from "@assets/noitems-logo.png";

import getSellList from "./apis/getSellList";
import { SellListData } from "./types/sellListData";
import LoadingAnimation from "@components/checkAnimation";

const Sell = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [sellList, setSellList] = useState<SellListData[]>([]);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const isLoggedIn = Cookies.get("isLoggedIn") === "yes";
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const loginModalProps = {
    title: "회원가입 또는 로그인 후 사용할 수 있습니다.",
    leftBtnText: "로그인하기",
    rightBtnText: "돌아가기",
    isVisible: isLoginModalVisible,
    setIsVisible: setIsLoginModalVisible,
    leftAction: () => navigate("/login"),
    rightAction: () => navigate(-1)
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const sellListData = await getSellList();
        setSellList(sellListData);
      } catch (error) {
        console.error("Error fetching sell list:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (isLoggedIn) {
      fetchData();
    } else {
      setIsLoginModalVisible(true);
      setIsLoading(false);
    }
  }, [isLoggedIn]);

  const handleRadioChange = (index: number) => {
    setSelectedCard(index);
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <>
      <UpperNavBar title="양도하기" type="back" customBack={goToHome} isCustom={true} />
      <S.ProductListWrap>
        <S.NoticeTitle>
          판매할 숙소의 예약 내역을 선택하세요 <span>(필수)*</span>
        </S.NoticeTitle>
        <Notice
          type="yanolja"
          content="야나바다에서는 야놀자에서 인증된 숙소 매물만을 거래할 수 있습니다."
          shape="lineDark"
        />
        <S.ListWrap>
          {isLoading ? (
            <LoadingAnimation />
          ) : sellList.length > 0 ? (
            sellList.map((sellItem) => (
              <S.ListCard
                key={`index-${sellItem}`}
                initial={{
                  border: "1px solid #ddd"
                }}
                animate={{
                  borderImage:
                    selectedCard === sellItem.id
                      ? "linear-gradient(90deg, rgba(58,200,244,1) 0%, rgba(94,155,243,1) 100%) 1"
                      : "none",
                  borderWidth: selectedCard === sellItem.id ? "3px" : "1px"
                }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                <label htmlFor={"select" + sellItem.id}>
                  <div className="list-card">
                    <p className="list-card__title">
                      {sellItem.accommodationName}
                      <input
                        type="radio"
                        id={"select" + sellItem.id}
                        name="ProductList"
                        onChange={() => handleRadioChange(sellItem.id)}
                        checked={selectedCard === sellItem.id}
                      />
                    </p>
                    <div className="list-card__body">
                      <p className="title">숙소 예약 번호 {sellItem.code}</p>
                      <div className="inner">
                        <div className="img-bx">
                          <img src={sellItem.image} alt="썸네일" />
                        </div>
                        <div className="txt-bx">
                          <p className="tit">{sellItem.roomName}</p>
                          <p className="date">
                            {sellItem.checkInDate} ({getDayOfWeek(sellItem.checkInDate)}) -{" "}
                            {sellItem.checkOutDate} ({getDayOfWeek(sellItem.checkOutDate)})
                          </p>
                          <p className="time">
                            체크인 {sellItem.checkInTime} | 체크아웃 {sellItem.checkOutTime}
                          </p>
                        </div>
                      </div>
                      <Link to={`/sell/detail/${sellItem.id}`}>
                        <AuthenticationButton buttonType="disabled" width="100%">
                          상세보기
                        </AuthenticationButton>
                      </Link>
                    </div>
                  </div>
                </label>
              </S.ListCard>
            ))
          ) : (
            <S.NoListWrap>
              <div className="no-list">
                <img src={NoItemsLogo} alt="로고" />
                <p className="no-list__tit">양도 가능한 상품이 없어요.</p>
                <p className="no-list__desc">
                  야나바다에서는 야놀자에서 구매하신 숙소 중<br />
                  무료 취소가 불가능한 상품만
                  <br />
                  양도 거래가 가능합니다.
                </p>
              </div>
            </S.NoListWrap>
          )}
        </S.ListWrap>
        {selectedCard ? (
          <motion.div
            style={{
              position: "fixed",
              bottom: "56px",
              left: "50%",
              maxWidth: "780px",
              width: "100%",
              translateX: "-50%"
            }}
            initial={{ y: "48px" }}
            animate={{ y: "0" }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <S.ListButton>
              <Link to={`/sell/register/${selectedCard}`}>
                상품 등록하기 <FaChevronRight />
              </Link>
            </S.ListButton>
          </motion.div>
        ) : null}
        <Modal {...loginModalProps} />
      </S.ProductListWrap>
    </>
  );
};

export default Sell;

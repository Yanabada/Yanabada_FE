import * as S from "./styles/style";
import UpperNavBar from "@components/navBar/upperNavBar";
import DetailInfo from "./components/DetailInfo";
import SellerSay from "./components/SellerSay";
import Location from "./components/Location";
import Information from "./components/Information";
import ServiceInfo from "./components/ServiceInfo";
import DetailNotice from "./components/DetailNotice";
import Footer from "./components/Footer";
import NegoButton from "./components/NegoButton";
import useProductDetail from "./hooks/useProductDetail";

const ProductDetail = () => {
  const {
    getDetailQuery: { data: detailData }
  } = useProductDetail();

  return (
    <S.Container>
      <UpperNavBar title="상품 상세" type="back" />
      {detailData && (
        <>
          <DetailInfo data={detailData} />
          <SellerSay seller={detailData.seller} description={detailData.description} />
          <Location accommodationInfo={detailData.accommodationInfo} />
          <Information accommodationInfo={detailData.accommodationInfo} />
          <ServiceInfo
            accommodationInfo={detailData.accommodationInfo}
            roomInfo={detailData.roomInfo}
          />
          <DetailNotice roomInfo={detailData.roomInfo} />
          <Footer phoneNumber={detailData.accommodationInfo.phoneNumber} />
          <NegoButton data={detailData} />
        </>
      )}
    </S.Container>
  );
};

export default ProductDetail;

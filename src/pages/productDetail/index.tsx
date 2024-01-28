import * as S from "./styles/style";
import UpperNavBar from "@components/navBar/upperNavBar";
import DetailInfo from "./components/DetailInfo";
import SellerSay from "./components/SellerSay";
import Location from "./components/Location";
import Information from "./components/Information";
import Review from "./components/Review";
import ServiceInfo from "./components/ServiceInfo";
import DetailNotice from "./components/DetailNotice";
import Footer from "./components/Footer";
import NegoButton from "./components/NegoButton";
import useProductDetail from "./hooks/useProductDetail";
import { useParams } from "react-router-dom";
import { useMapState } from "@pages/products/stores/mapStore";
import { CustomOverlayMap, Map } from "react-kakao-maps-sdk";
import PositionIcon from "@assets/icons/product_position_mark.svg?react";
import LoadingCircle from "@components/loading";

const ProductDetail = () => {
  const { productId } = useParams();
  const { isMapOpen, setMapOpen } = useMapState();

  const {
    getDetailQuery: { data: detailData, isLoading }
  } = useProductDetail(Number(productId));

  if (isLoading) return <LoadingCircle></LoadingCircle>;

  return (
    <>
      <UpperNavBar
        title={isMapOpen ? "지도" : "상품 상세"}
        type={isMapOpen ? "backClose" : "back"}
        isCustom={isMapOpen}
        {...(isMapOpen && { customBack: setMapOpen })}
      />
      {isMapOpen ? (
        <>
          <S.MapContainer>
            <Map
              style={{ width: "100%", height: "100%" }}
              center={{
                lat: detailData.accommodationInfo.latitude,
                lng: detailData.accommodationInfo.longitude
              }}
            >
              <CustomOverlayMap
                position={{
                  lat: detailData.accommodationInfo.latitude,
                  lng: detailData.accommodationInfo.longitude
                }}
              >
                <PositionIcon />
              </CustomOverlayMap>
            </Map>
          </S.MapContainer>
        </>
      ) : (
        <S.Container>
          <DetailInfo data={detailData} />
          <SellerSay seller={detailData.seller} description={detailData.description} />
          <Location accommodationInfo={detailData.accommodationInfo} />
          <Review />
          <Information accommodationInfo={detailData.accommodationInfo} />
          <ServiceInfo
            accommodationInfo={detailData.accommodationInfo}
            roomInfo={detailData.roomInfo}
          />
          <DetailNotice roomInfo={detailData.roomInfo} />
          <Footer phoneNumber={detailData.accommodationInfo.phoneNumber} />
          <NegoButton data={detailData} />
        </S.Container>
      )}
    </>
  );
};

export default ProductDetail;

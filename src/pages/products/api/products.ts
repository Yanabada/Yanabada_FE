import axios from "axios";
import qs from "qs";
import { GetProductResponseData } from "../types/productsType";

type OrderState = "RECENT" | "END_DATE_ASC" | "SALES_PERCENTAGE_DESC" | "PRICE_ASC" | "RATING_DESC";
type Category = "HOTEL_RESORT" | "MOTEL" | "PENSION" | "GUESTHOUSE" | "POOL_VILLA";
type Option = "SAUNA" | "ROOF_TOP" | "POOL" | "GYM" | "LOUNGE_BAR" | "PARKING" | "PARTY_ROOM";
export interface GetProductsRequestParams {
  keyword: string;
  checkInDate: Date;
  checkOutDate: Date;
  adult: number;
  child: number;
  smallX: number;
  smallY: number;
  bigX: number;
  bigY: number;
  isHidingSoldOut: boolean;
  order: OrderState;
  category: Category;
  option: Option[];
  page: number;
  size: number;
}

const getProducts = async (params: Partial<GetProductsRequestParams> = { size: 20 }) => {
  // FIXME: 나중에 instance로 연결 필요
  const response = await axios.get<GetProductResponseData>("http://test.yanabada.com/products", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlbWFpbDIyMkBlbWFpbC5jb20iLCJyb2xlIjoiUk9MRV9VU0VSIiwicHJvdmlkZXIiOiJFTUFJTCIsImlhdCI6MTcwNTg5NDkzOCwiZXhwIjoxNzA1ODk2NzM4fQ.8f-D252STnWoP0d-iUSGCoipSnPVoLhLiKsyvMgjd0o"
    },
    params,
    paramsSerializer: (params) => {
      return qs.stringify(params, { arrayFormat: "repeat" });
    }
  });
  return response.data;
};

export default getProducts;

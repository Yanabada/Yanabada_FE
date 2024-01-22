import axios from "axios";
import qs from "qs";
import { GetProductResponseData } from "../types/productsType";

export type OrderState =
  | "RECENT"
  | "END_DATE_ASC"
  | "SALES_PERCENTAGE_DESC"
  | "PRICE_ASC"
  | "RATING_DESC";
export type Category = "HOTEL_RESORT" | "PENSION" | "GUESTHOUSE" | "POOL_VILLA" | "CAMPING";
export type Option =
  | "SAUNA"
  | "ROOF_TOP"
  | "POOL"
  | "GYM"
  | "LOUNGE_BAR"
  | "PARKING"
  | "PARTY_ROOM";
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
  options: Option[];
  page: number;
  size: number;
}

const getProducts = async (params: Partial<GetProductsRequestParams> = { size: 20 }) => {
  // FIXME: 나중에 instance로 연결 필요
  const response = await axios.get<GetProductResponseData>("http://test.yanabada.com/products", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlbWFpbDIyMkBlbWFpbC5jb20iLCJyb2xlIjoiUk9MRV9VU0VSIiwicHJvdmlkZXIiOiJFTUFJTCIsImlhdCI6MTcwNTkwMzE1OSwiZXhwIjoxNzA1OTA0OTU5fQ.JTKudbFCzwt05uY-DEwnYFRRrLqBDRpatHdo3BWvIrQ"
    },
    params,
    paramsSerializer: (params) => {
      return qs.stringify(params, { arrayFormat: "repeat" });
    }
  });
  return response.data;
};

export default getProducts;

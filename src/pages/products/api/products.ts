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
  const response = await axios.get<GetProductResponseData>("/api/products", {
    params,
    paramsSerializer: (params) => {
      return qs.stringify(params, { arrayFormat: "repeat" });
    }
  });
  return response.data;
};

export default getProducts;

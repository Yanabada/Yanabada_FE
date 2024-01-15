import axios from "axios";

const getProducts = async () => {
  try {
    const response = await axios.get("/api/products");
    return response.data[0].data.products;
  } catch (err) {
    console.error("getProducts: ", err);
  }
};

export default getProducts;

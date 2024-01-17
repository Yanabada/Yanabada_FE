import axios from "axios";

const getDetail = async () => {
  try {
    const response = await axios.get("/api/products/:id");
    return response.data[0].data;
  } catch (err) {
    console.error("getProducts: ", err);
  }
};

export default getDetail;

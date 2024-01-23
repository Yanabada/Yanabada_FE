import instance from "@apis/instance";

const getDetail = async (productId: number) => {
  try {
    const response = await instance.get(`http://test.yanabada.com/products/${productId}`);
    return response.data.data;
  } catch (err) {
    console.error("getProducts: ", err);
  }
};

export default getDetail;

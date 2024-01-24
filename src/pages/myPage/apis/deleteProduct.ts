import { instance } from "@apis/instance";

const deleteProduct = async (productId: number | undefined) => {
  const deleteProductURL = `/products/${productId}`;

  const response = await instance.delete(deleteProductURL);

  console.log(response.data.data);

  return response.data.data;
};

export default deleteProduct;

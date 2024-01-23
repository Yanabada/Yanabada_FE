import axios from "axios";

const deleteProduct = async (productId: number) => {
  const deleteProductURL = `/products/${productId}`;

  const response = await axios.delete(deleteProductURL);

  return response.data;
};

export default deleteProduct;

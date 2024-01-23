import axios from "axios";

const deleteProduct = async (productId: number | undefined) => {
  const deleteProductURL = `/products/${productId}`;

  const response = await axios.delete(deleteProductURL);

  return response.data;
};

export default deleteProduct;

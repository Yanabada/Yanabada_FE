import instance from "@apis/instance";

const getSellResult = async ({ id }: { id: string }) => {
  const response = await instance.get(`/products/${id}`);
  return response.data;
};

export default getSellResult;

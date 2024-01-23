import instance from "@apis/instance";

const getSellResult = async ({ id }: { id: string }) => {
  const response = await instance.get(`${import.meta.env.VITE_API_BASE_URL}/products/${id}`);
  return response.data;
};

export default getSellResult;

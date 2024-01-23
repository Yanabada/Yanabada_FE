import instance from "@apis/instance";

const getSellDetail = async ({ id }: { id: string }) => {
  const response = await instance.get(`${import.meta.env.VITE_API_BASE_URL}/orders/${id}`);
  return response.data;
};

export default getSellDetail;

import instance from "@apis/instance";

const getSellDetail = async ({ id }: { id: string }) => {
  const response = await instance.get(`/orders/${id}`);
  return response.data;
};

export default getSellDetail;

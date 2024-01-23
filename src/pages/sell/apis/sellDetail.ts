import instance from "@apis/instance";

const getSellDetail = async ({ id }: { id: string }) => {
  const response = await instance.get(`http://test.yanabada.com/orders/${id}`);
  console.log(response.data);
  return response.data;
};

export default getSellDetail;

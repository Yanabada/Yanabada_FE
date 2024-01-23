import instance from "@apis/instance";

const getSellList = async () => {
  const response = await instance.get(`${import.meta.env.VITE_API_BASE_URL}/orders/can-sell`);
  console.log(response.data);
  return response.data;
};

export default getSellList;

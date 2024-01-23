import instance from "@apis/instance";

const getSellList = async () => {
  const response = await instance.get(`http://test.yanabada.com/orders/can-sell`);
  console.log(response.data);
  return response.data;
};

export default getSellList;

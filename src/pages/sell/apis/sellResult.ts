import instance from "@apis/instance";

const getSellResult = async ({ id }: { id: string }) => {
  const response = await instance.get(`http://test.yanabada.com/products/${id}`);
  console.log(response);
  return response.data;
};

export default getSellResult;

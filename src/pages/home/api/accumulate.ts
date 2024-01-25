import instance from "@apis/instance";

const getAccumulate = async () => {
  try {
    const response = await instance.get("/payments/admin");
    return response.data.data;
  } catch (err) {
    console.error("getAccumulate: ", err);
  }
};

export default getAccumulate;

import axios from "axios";

const getAccumulate = async () => {
  try {
    const response = await axios.get("/payments/admin");
    return response.data.data;
  } catch (err) {
    console.error("getAccumulate: ", err);
  }
};

export default getAccumulate;

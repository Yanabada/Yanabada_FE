import axios from "axios";

const getAccumulate = async () => {
  try {
    const response = await axios.get("/payments/admin", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlbWFpbEBlbWFpbC5jb20iLCJyb2xlIjoiUk9MRV9VU0VSIiwicHJvdmlkZXIiOiJFTUFJTCIsImlhdCI6MTcwNTg0NDAxMiwiZXhwIjoxNzA2NDQ4ODEyfQ.1eLZM-jjI42emTMtZGGGkmqHOq3Y4fkq89MY6bUIebM"
      }
    });
    return response.data.data;
  } catch (err) {
    console.error("getAccumulate: ", err);
  }
};

export default getAccumulate;

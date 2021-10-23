import axios from "axios";
export const sendGetRequest = async (url) => {
  try {
    const response = await axios.get(`http://localhost:8082/${url}`);
    const data = await response.data;
    return {
      data: data,
      error: undefined,
      loading: false,
    };
  } catch (error) {
    return {
      data: undefined,
      error: error.message,
      loading: false,
    };
  }
};

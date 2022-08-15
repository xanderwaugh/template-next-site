import axios from "axios";

const getExampleData = async () => {
  const res = await axios.get("https://randomuser.me/api");
  const data = await res.data;

  return {
    data,
  };
};

export { getExampleData };

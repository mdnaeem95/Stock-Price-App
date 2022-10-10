import axios from "axios";

const TOKEN = "cd1ov9iad3i7tm8s1ch0cd1ov9iad3i7tm8s1chg";

export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: { token: TOKEN },
});

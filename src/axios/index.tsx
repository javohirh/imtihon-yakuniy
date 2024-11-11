import axios from "axios";
const BASE_URL = "https://66cca080a4dd3c8a71b847c8.mockapi.io/api";
const request = axios.create({
  baseURL: BASE_URL,
});

export default request;

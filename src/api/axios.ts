import axios from "axios";

export const axiosBase = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

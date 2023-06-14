import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'https://api.mydopaclass.com/api/dopa/',
})
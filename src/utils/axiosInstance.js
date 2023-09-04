import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.mydopaclass.com/api/dopa/",
});


// export const axiosInstance = axios.create({
//   baseURL: "http://localhost:8085/api/dopa/",
// });

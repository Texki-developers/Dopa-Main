import axios from "axios";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

console.log(publicRuntimeConfig.strapiUrl, "this is strapi url");
export const starpiInstance = axios.create({
  baseURL: publicRuntimeConfig.strapiUrl,
});

import axios from "axios";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const starpiInstance = axios.create({
  baseURL: publicRuntimeConfig.strapiUrl,
});

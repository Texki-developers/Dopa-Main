import axios from "axios";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const starpiInstance = axios.create({
  baseURL: publicRuntimeConfig.strapiUrl,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPIE_TOKEN}`
  }
});

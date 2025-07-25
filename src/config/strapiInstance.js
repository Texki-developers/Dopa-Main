import axios from "axios";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

// Base instance for non-authenticated calls  
export const starpiInstance = axios.create({
  baseURL: publicRuntimeConfig.strapiUrl,
});

// Create a separate instance for authenticated calls
export const authenticatedStrapiInstance = axios.create({
  baseURL: publicRuntimeConfig.strapiUrl,
  headers: {
    "Authorization": `Bearer ${process.env.NEXT_PUBLIC_STRAPIE_TOKEN}`,
    "Content-Type": "application/json"
  }
});

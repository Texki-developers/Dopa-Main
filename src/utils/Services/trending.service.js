import { axiosInstance } from "../axiosInstance";

export const getLanding = async () => {
  return await axiosInstance.get("landing");
};

export const saveLeads = async (body) => {
  return await axiosInstance.post("landing/leads", {
    body,
  });
};

import { axiosInstance } from "../axiosInstance";

export const getLanding = async () => {
  return await axiosInstance.get("landing");
};

export const getEnquiryLanding = async () => {
  return await axiosInstance.get("enquiry-landing");
};
 
export const saveEnquiryLeads = async () => {
  return await axiosInstance.get("landing/enquiry-leads");
};

export const saveLeads = async (body) => {
  return await axiosInstance.post("landing/leads", {
    body,
  });
};

export const saveThrissurLeads = async (body) => {
  return await axiosInstance.post("thrissur/leads", {
    body,
  });
};
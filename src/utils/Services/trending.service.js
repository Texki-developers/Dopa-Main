import { axiosInstance } from "../axiosInstance";

export const getLanding = async () => {
  return await axiosInstance.get("landing");
};

export const getEnquiryLanding = async () => {
  return await axiosInstance.get("landing/enquiry-landing");
};
 
export const saveEnquiryLeads = async () => {
  return await axiosInstance.get("landing/enquiry-leads");
};

export const saveLeads = async (body) => {
  return await axiosInstance.post("landing/leads", {
    body,
  });
};

export const saveForms = async (body) => {
  return await axiosInstance.post("landing/form", {
    body,
  });
};
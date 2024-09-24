import axios from "axios";
import { getValue } from "./Storage";

const LIVE = "https://earningcommunitybd.com/apis";

const createAxiosInstance = async () => {
  const token = await getValue("token");
  const fcm = await getValue("fcm");
  const ip = await getValue("ip");
  const os = await getValue("os");
  const id = await getValue("id");

  // Setting default headers for all requests
  const headers = {
    Authorization: `Bearer ${token}`,
    PUSH_TOKEN: fcm,
    IP: ip,
    OS: os,
    DEVICE_ID: id,
  };

  const API = axios.create({
    baseURL: LIVE,
    headers: headers,
  });

  // Adding interceptors for error handling
  API.interceptors.response.use(
    (response) => response,
    (error) => {
      // Handle error
      console.error("API Error:", error);
      return Promise.reject(error);
    }
  );

  return API;
};

const getApi = async (url, params) => {
  const axiosInstance = await createAxiosInstance();
  const response = await axiosInstance.get(url, { params });
  return response.data;
};

const postApi = async (url, data) => {
  const axiosInstance = await createAxiosInstance();
  const response = await axiosInstance.post(url, data);
  return response.data;
};

const putApi = async (url, data) => {
  const axiosInstance = await createAxiosInstance();
  const response = await axiosInstance.put(url, data);
  return response.data;
};

const deleteApi = async (url, params) => {
  const axiosInstance = await createAxiosInstance();
  const response = await axiosInstance.delete(url, { params });
  return response.data;
};

export { getApi, postApi, putApi, deleteApi };

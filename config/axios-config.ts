import axios from "axios";

// import { type } from 'ramda'
import config from "./app-config";
import { iAxios } from "../interfaces/axios.interface";
import { z } from "zod";
//import Exception from "@components/common/ExceptionHandle";
import { Store } from "react-notifications-component";
// import {
//   bearerToken,
//   getCurrentUserTenants,
//   logout,
//   removePermissions,
// } from "@helpers/authHelper";

export const axiosInstance = axios.create({
  baseURL: config.BACKEND_API_BASE_URL,
  // withCredentials: true,
  // crossDomain: true
});

export const getAxios = <T extends z.ZodTypeAny>(
  info: iAxios<any | FormData, any>,
  responseSchema: T | null = null
): Promise<z.infer<T>> => {
  // console.log({info});
  return new Promise((resolve, reject) => {
    const { url, params = {}, data = {}, method = "get" } = info;
    // const withCredentials = true;

    let dataType = "application/json";

    // console.log("Data type:", data instanceof FormData);
    // console.log("Data type:", data.get("file"));

    if (data instanceof FormData) {
      dataType = "FormData";
    }
    // const tenant = getCurrentUserTenants();
    const headers = {
      //   Authorization: "Bearer " + bearerToken(),
      //'Content-Type': "application/json;charset=UTF-8",
      // "x-tenant": getCurrentUserTenants(),
      "Content-Type":
        dataType === "FormData"
          ? "multipart/form-data"
          : "application/json;charset=UTF-8",
    };

    // axiosInstance.withCredentials = true;
    //console.log("Axios data:",headers)
    axiosInstance
      .request({ method, url, data, headers, params })
      .then((response) => {
        resolve(
          !!responseSchema ? responseSchema.parse(response.data) : response.data
        );
      })
      .catch((error) => {
        // console.log("in the error");
        if (error.response.status === 401) {
          // logout();
          // removePermissions();
          // window.location.href = '/login';
          // Store.addNotification({
          //     title: "Failed!",
          //     message: "Session expired, please login again",
          //     type: "danger",
          //     insert: "bottom",
          //     container: "bottom-right",
          //     animationIn: ["animate__animated", "animate__fadeIn"],
          //     animationOut: ["animate__animated", "animate__fadeOut"],
          //     dismiss: {
          //         duration: 3000,
          //         onScreen: true,
          //         click: true,
          //         showIcon: true,
          //     }
          // });
        }
        reject(error);
      });
  });
};

export const API_SERVICE = axios.create({
  baseURL: config.BACKEND_API_BASE_URL,
});

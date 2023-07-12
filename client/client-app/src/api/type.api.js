import axiosClient from "./AxiosClient";

export class TypeApi {
  static getDataAll(params) {
    const url = "/api/v1/type/getAllType";
    return axiosClient.get(url, params);
  }
}
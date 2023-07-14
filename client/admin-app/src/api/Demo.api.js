import axiosClient from "./AxiosClient";

export class DemoApi {
  //get demo data
  static getDataAll(params) {
    const url = "api/v1/demo";
    return axiosClient.get(url, params);
  }

  static getById(id, params) {
    const url = `api/v1/demo/${id}`;
    return axiosClient.get(url, params);
  }

  //post
  //path
  //delete
}

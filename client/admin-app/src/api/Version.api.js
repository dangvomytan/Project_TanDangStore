import axiosClient from "./AxiosClient";

export class VersionApi {
//get theo id product
  static getByIdProduct(id, params) {
    const url = `api/v1/version/getVersionByProduct/${id}`;
    return axiosClient.get(url, params);
  }

  //post
  //path
  //delete
}

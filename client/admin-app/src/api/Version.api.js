import axiosClient from "./AxiosClient";

export class VersionApi {
//get theo id product
  static getByIdProduct(id, params) {
    const url = `api/v1/version/getVersionByProduct/${id}`;
    return axiosClient.get(url, params);
  }

  //add
  static createVersion( params) {
    const url = `/api/v1/version/addVersion`;
    return axiosClient.post(url, params);
  }
  //path
  static updateVersion( params) {
    const url = `/api/v1/version/updateVersion`;
    return axiosClient.patch(url, params);
  }
  //delete
  static deleteVersion(id, params) {
    const url = `/api/v1/version/deleteVersion/${id}`;
    return axiosClient.delete(url, params);
  }
}

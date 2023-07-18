import axiosClient from "./AxiosClient";

export class CartApi {
  //get demo data
  static getDataCart(params) {
    const url = "api/v1/Cart/getAllCart";
    return axiosClient.get(url, params);
  }

  static getDataCartById(id,params) {
    const url = `api/v1/Cart/getAllById/${id}`;
    return axiosClient.get(url, params);
  }
}

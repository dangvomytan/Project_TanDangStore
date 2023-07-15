import axiosClient from "./AxiosClient";

export class ProductApi {
  static getDataAllProduct(params) {
    const url = "/api/v1/product/getAllProduct";
    return axiosClient.get(url, params);
  }
}
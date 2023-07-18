import axiosClient from "./AxiosClient";

export class ProductApi {
  static getDataAllProduct(params) {
    const url = "/api/v1/product/getAllProduct";
    return axiosClient.get(url, params);
  }

  static createProduct( params) {
    const url = `/api/v1/product/addProduct`;
    return axiosClient.post(url, params);
  }

  static updateProduct(params) {
    const url ="api/v1/product/updateProduct";
    return axiosClient.patch(url, params);
  }

  static deleteProduct(id, params) {
    const url = `/api/v1/product/deleteProduct/${id}`;
    return axiosClient.delete(url, params);
  }
}
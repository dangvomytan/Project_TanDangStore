import axiosClient from "./AxiosClient";

export class ProductApi {
  static getDataAllProduct(params) {
    const url = "/api/v1/product/get_product_version_image_pecifications_like_productName";
    return axiosClient.get(url, params);
  }
}
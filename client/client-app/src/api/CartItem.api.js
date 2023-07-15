import axiosClient from "./AxiosClient";

export class CartItemApi {

  static getCartItem(params) {
    const url = "api/v1/cartitem/getCartItem";
    return axiosClient.get(url, params);
  }
  static getCartItemById(id,params) {
    const url = `api/v1/cartitem/addCartItemById/${id}`;
    return axiosClient.get(url, params);
  }

  static AddCartItem(params) {
    const url = "api/v1/cartitem/addCartItem";
    return axiosClient.post(url, params);
  }
}
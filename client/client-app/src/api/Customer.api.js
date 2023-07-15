import axiosClient from "./AxiosClient";

export class CustomerApi {
     //get demo data
     static getDataAll(params) {
       const url = "api/v1/customers";
       return axiosClient.get(url, params);
     }
   
     static getById(id, params) {
       const url = `getCustomersById/${id}`;
       return axiosClient.get(url, params);
     }
   
     //post
     static registerCustomer( params ) {
          const url = `api/v1/customers/register`;
          return axiosClient.post(url, params);
        }

        static loginCustomer( params ) {
          const url = `api/v1/customers/login`;
          return axiosClient.post(url, params);
        }
     //path
     //delete
   }
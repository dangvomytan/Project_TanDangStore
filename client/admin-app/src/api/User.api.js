import axiosClient from "./AxiosClient";

export class UserApi {
     //get demo data
     static getDataAllUser(params) {
       const url = "api/v1/users/getAllUsers";
       return axiosClient.get(url, params);
     }
   
     static getUserById(id, params) {
       const url = `api/v1/users/${id}`;
       return axiosClient.get(url, params);
     }
   
     //post
     static registerUser( params ) {
          const url = `api/v1/users/register`;
          return axiosClient.post(url, params);
        }

        static loginUser( params ) {
          const url = `api/v1/users/login`;
          return axiosClient.post(url, params);
        }
     //path
     static updateUser( params ) {
      const url = `api/v1/users/updateUsers`;
      return axiosClient.patch(url, params);
     }

     //delete
     static deleteUser(id, params ) {
      const url = `api/v1/users/deleteUsers/${id}`;
      return axiosClient.delete(url, params);
     }
   }
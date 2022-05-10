import axios from "axios";

import Routess from "../service/routess";
// let baseURL='https://nodeapiiiii.herokuapp.com'
const baseURL = 'http://localhost:4000'


const apis = axios.create({
  baseURL: baseURL
})
apis.interceptors.response.use(
  response => {
    console.log(response);
   
    return response;
  },
  (error: any) => {
    switch (error.response.status) {
      case 401:
      console.log(error.response.status);
      localStorage.removeItem('token')
      localStorage.removeItem('userData')
      console.log("logOut");
      window.location.href = '/singin';
      // Routess("/singin");
      setTimeout(() => {
        
      }, 600);

      return ;

      default:
        break;
    }

    return Promise.reject(error);
  }
);



apis.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem('token')
    let headers: any = {
      Authorization: "Basic " + token,
    };
    // console.log(config,headers);
    config.headers = headers
    return config;
  },
  (error) => {
    console.log(error);

    return Promise.reject(error);
  }
);




export default { apis, baseURL };
function getUserLocalStorage() {
  throw new Error("Function not implemented.");
}


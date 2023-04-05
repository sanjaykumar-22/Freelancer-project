import axios from 'axios';
const CancelToken = axios.CancelToken;
let cancel;
let urlForCancel;
//axios.defaults.withCredentials = false;

export const API_URL = "http://localhost:5000";   
export function post(url, params, extraParam = {}) {
   cancel && urlForCancel === url && cancel();
   // cancel() cancels the old request if the executor have same request.
   // This change is to avoid race condition of api call while typing. It improves performance as well.
   return axios.post(url, params, {
       cancelToken: new CancelToken(function executor(c) {
           urlForCancel = url;
           cancel = c;
       }),
       ...extraParam,
   })
       .then((response) => {
           // console.log('API - Post res', response);
           return response.data;
       })
       .catch((err) => {
           // console.log('API - Post err', err);
           return err;
       })
}

export function get(url, params) {
   return axios.get(url, params)
       .then((response) => {
           // console.log('API - Get res', response);
           return response.data
       })
       .catch((err) => {
           // console.log('API - Get err', err);
           throw err;
       })
}

export function put(url, params) {
   return axios.put(url, params)
       .then((response) => {
           // console.log('API - Put res', response);
           return response.data;
       })
       .catch((err) => {
           // console.log('API - Put err', err);
           return err;
       })
}

export function remove(url, params) {
   return axios.delete(url, { data: params })
       .then((response) => {
           // console.log('API - Delete res', response);
           return response.data;
       })
       .catch((err) => {
           // console.log('API - Delete err', err);
           return err;
       })
}

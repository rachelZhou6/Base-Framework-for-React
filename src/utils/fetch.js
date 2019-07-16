import axios from 'axios';

// 创建axios实例
const service = axios.create({
  // baseURL: '/api',  // api的base_url
  // timeout: 15000 // 请求超时时间
});

// Add a request interceptor 
axios.interceptors.request.use(config => {
  // Do something before request is sent 
  return config;
}, error => {
  // Do something with request error 
  return Promise.reject(error);
});

// Add a response interceptor 
axios.interceptors.response.use(response => {
  // Do something with response data 
  return response;
}, error => {
  // Do something with response error 
  return Promise.reject(error);
});

export default service;

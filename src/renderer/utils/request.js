import axios from "axios";
import router from "router";
import Element from "element-ui";

export function request(config){
  const instance = axios.create({
    baseURL: "",
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  })

  // 请求拦截器
  instance.interceptors.request.use( config => {
    return config
  }, error => {})

  // 响应拦截器
  instance.interceptors.response.use( response => {
    console.log('response => ' + response);

    let r = response.data

    if(r.code != 200){
      Element.Message.error(!r.message ? '系统异常' : r.msg)
      return Promise.reject(r.msg)
    }
    return response
  }, error => {
    console.log('error => ' + error);
    
  })

  return instance(config)
}
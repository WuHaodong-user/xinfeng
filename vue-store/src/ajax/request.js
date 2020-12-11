import axios from "axios";
import api from './api'
import {Toast} from 'vant'
import router from '../router'

class HttpRequest {
  get(url, config) {
    return this.request({ method: "GET", url, ...config });
  }
  post(url, config) {
    return this.request({ method: "POST", url, ...config });
  }

  // 构建请求
  request(config) {
    // 1.创建请求实例
    const instance = axios.create();
    // 2.添加拦截
    this.interceptor(instance);
    // 3.发送请求
    return instance(config);

    // 等价于 axios.request({method: 'POST'})  axios.get()   axios.post()
  }

  // 拦截器
  interceptor(instance) {
    // 拦截请求
    instance.interceptors.request.use(
      config => {
        //jwt 添加token
        const token = localStorage.getItem("token");
        if (token) {
          config.headers.common["token"] =  token;
        }
        config.baseURL = api.BASE_URL;
        return config;
      },
      error => {
        Toast(error.code);
        return Promise.reject(error);
      }
    );

    // 拦截响应
    instance.interceptors.response.use(
      response => {
        const {
          data: { resultCode ,message}
        } = response;
        if (resultCode === 200) {
          //成功
          return Promise.resolve(response.data);
        } else {
          //失败
          if (message) Toast.fail(message)
          if (resultCode == 416) {
            router.push({ path: '/login' })
          }
          return Promise.reject();
        }
      },
      error => {
        Toast(error.code);
        return Promise.reject(error);
      }
    );
  }
}

export default HttpRequest;

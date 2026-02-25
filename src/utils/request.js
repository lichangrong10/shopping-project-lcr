import store from '@/store'
import axios from 'axios'
import { Toast } from 'vant';

const instance = axios.create({
  baseURL: 'https://smart-shop.itheima.net/index.php?s=/api',
  timeout: 5000,
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  //显示加载中提示框
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
    duration: 0
  });
  //如果token存在，就在请求头中添加token
  if (store.getters.token) {
    config.headers['Access-Token'] = store.getters.token;
    config.headers.platform = 'H5'
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  //如果响应状态码不是200，就提示错误信息，并返回一个被拒绝的Promise对象，状态码是200就清除加载中提示框
  if (response.data.status !== 200) {
    Toast(response.data.message)
    return Promise.reject(response.data.message)
  } else {
    Toast.clear()
  }
  return response.data;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default instance
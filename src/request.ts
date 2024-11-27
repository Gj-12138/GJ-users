// 引入axios库
import axios from "axios";

// 创建一个axios实例，用于发送HTTP请求
const myAxios = axios.create({
  // 设置请求的基础URL，所有请求都会基于这个URL进行
  baseURL: "http://localhost:8080",
  // 设置请求超时时间（毫秒）
  timeout: 10000,
  // 是否允许发送跨站请求时携带凭证（cookies）
  withCredentials: true,
});

// 添加请求拦截器
myAxios.interceptors.request.use(
  function (config) {
    // 在请求发送之前做一些处理，比如添加认证token等
    // 这里暂时不添加任何处理，直接返回配置对象
    return config;
  },
  function (error) {
    // 对请求错误做些什么，比如显示错误信息
    // 这里选择直接拒绝这个Promise，让错误被后续的.catch捕获
    return Promise.reject(error);
  }
);

// 添加响应拦截器
myAxios.interceptors.response.use(
  function (response) {
    // 对响应数据做些什么，比如统一处理错误状态码
    console.log(response); // 打印整个响应对象

    // 从响应对象中提取数据部分
    const { data } = response;
    console.log(data); // 打印数据部分

    // 检查返回的数据中是否包含特定的错误代码（例如40100表示未登录）
    if (data.code === 40100) {
      // 检查当前请求是否不是获取用户信息的接口，也不是登录页面
      // 如果是，则跳转到登录页面，并带上当前页面的URL作为重定向参数
      if (
        !response.request.responseURL.includes("user/current") && // 检查请求URL是否不包含获取用户信息的接口
        !window.location.pathname.includes("/user/login") // 检查当前页面路径是否不包含登录页面
      ) {
        window.location.href = `/user/login?redirect=${window.location.href}`; // 跳转到登录页面，并带上重定向参数
      }
    }
    // 返回响应对象，以便后续的处理可以继续进行
    return response;
  },
  function (error) {
    // 对响应错误做些什么，比如显示错误信息
    // 这里选择直接拒绝这个Promise，让错误被后续的.catch捕获
    return Promise.reject(error);
  }
);

// 导出axios实例，以便在其他文件中使用
export default myAxios;

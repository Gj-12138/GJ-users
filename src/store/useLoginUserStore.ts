
// 导入 Pinia 的 defineStore 函数
import { defineStore } from "pinia";
// 导入 Vue 的 ref 函数，用于创建响应式引用
import { ref } from "vue";
// 导入自定义的 API 函数，用于获取当前用户信息
import { getCurrentUser } from "@/api/user";
// 导入 Axios 的响应类型定义
import { AxiosResponse } from "axios";

// 定义一个名为 'LoginUser' 的 store，用于管理登录用户的状态
export const useLoginUserStore = defineStore('LoginUser', () => {
  // 使用 ref 创建一个响应式引用，用于存储登录用户的信息
  // 初始值设置为一个包含 userName 属性的对象，userName 的初始值为 "未登录"
  const LoginUser = ref<any>({
    username: "未登录",
  });

  // 定义一个异步函数，用于从 API 获取当前登录用户的信息
  async function fetchLoginUser() {
    // 调用 getCurrentUser API 函数，并等待其响应
    const res: AxiosResponse<any, any> = await getCurrentUser();
    // 检查响应的数据部分，如果 code 为 0 且存在 data，则更新 LoginUser 的值
    if (res.data.code === 0 && res.data.data) {
      LoginUser.value = res.data.data;
    }
    //测试
    // else {
    //   setTimeout(()=>{
    //     LoginUser.value = {username :"桀桀桀" ,id :1}
    //   } , 1000);
    // }
  }

  // 定义一个函数，用于设置登录用户的信息
  function setLoginUser(newLoginUser: any) {
    // 直接更新 LoginUser 的值为传入的新用户信息
    LoginUser.value = newLoginUser;
  }

  // 返回 store 的状态和方法，使它们可以在组件中通过 useLoginUserStore 钩子访问
  return { LoginUser, fetchLoginUser, setLoginUser };
});


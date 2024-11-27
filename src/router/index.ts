import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import UserLoginPage from "@/pages/user/UserLoginPage.vue";
import UserRegisterPage from "@/pages/user/UserRegisterPage.vue";
import userManagePage from "@/pages/admin/UserManagePage.vue";

// Array<RouteRecordRaw> 表示路由配置数组，其中每个元素都符合RouteRecordRaw类型定义
// 定义路由配置数组
const routes: Array<RouteRecordRaw> = [
  // 首页路由配置
  {
    path: "/", // 路由路径，当用户访问根路径时匹配
    name: "home", // 路由名称，用于编程式导航
    component: HomePage, // 对应的组件，当用户访问此路由时渲染的Vue组件
  },
  // 用户登录页路由配置
  {
    path: "/user/login", // 路由路径
    name: "userLogin", // 路由名称
    component: UserLoginPage, // 对应的组件
  },
  // 用户注册页路由配置
  {
    path: "/user/register", // 路由路径
    name: "userRegister", // 路由名称
    component: UserRegisterPage, // 对应的组件
  },
  // 管理员用户管理页路由配置
  {
    path: "/admin/userManage", // 路由路径
    name: "adminUserManage", // 路由名称
    component: userManagePage, // 注意：这里应该是UserManagePage，除非在别处定义了小写形式的变量
  },
];

// 创建Vue Router实例
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // 使用HTML5的History API来实现页面的前进后退，不刷新页面
  routes, // 传入上面定义的路由配置数组
});

// 导出router实例，以便在Vue应用中使用
export default router;

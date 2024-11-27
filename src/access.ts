import { message } from "ant-design-vue"; // 从ant-design-vue库中导入message组件，用于显示消息提示
import router from "@/router"; // 从项目的router配置文件中导入router实例，用于路由跳转
import { useLoginUserStore } from "@/store/useLoginUserStore"; // 从Vuex或Pinia的store中导入useLoginUserStore方法，用于访问登录用户的状态

/**
 * 全局权限校验
 * 在每次路由跳转前执行此函数，用于检查用户是否有权限访问目标路由
 */
router.beforeEach(async (to, from, next) => { // 使用router的beforeEach全局守卫来拦截路由跳转
  const loginUserStore = useLoginUserStore(); // 调用useLoginUserStore方法获取登录用户的状态管理实例
  const loginUser = loginUserStore.LoginUser; // 从状态管理实例中获取当前登录的用户信息
  const toUrl = to.fullPath; // 获取目标路由的完整路径

  // 如果目标路由以"/admin"开头，表示需要管理员权限
  if (toUrl.startsWith("/admin")) {
    // 如果没有登录用户信息，或者登录用户的角色不是管理员（假设管理员角色ID为1）
    if (!loginUser || loginUser.userRole !== 1) {
      // 显示错误消息提示
      message.error("没有权限");
      // 重定向到登录页面，并附带一个redirect参数，记录原本想要访问的路由
      next(`/user/login?redirect=${to.fullPath}`);
      return; // 终止后续执行
    }
  }
  // 如果目标路由不需要特殊权限，或者用户有权限访问，则正常放行
  next();
});
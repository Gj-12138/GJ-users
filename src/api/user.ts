// 从"@/request"路径导入myAxios实例，这个实例应该是在项目的某个地方被创建并导出的
import myAxios from "@/request";
/**
 * 用户注册函数
 * @param params - 包含注册所需信息的对象（如用户名、密码等）
 */
export const userRegister = async (params: any) => {
  // 使用myAxios发送POST请求到/api/user/register端点，携带用户注册信息
  return myAxios.request({
    url: "/api/user/register", // 注册接口的URL
    method: "POST", // 使用POST方法发送请求
    data: params, // 将注册信息作为请求体发送
  });
};

/**
 * 用户登录函数
 * @param params - 包含登录所需信息的对象（如用户名、密码等）
 */
export const userLogin = async (params: any) => {
  // 使用myAxios发送POST请求到/api/user/login端点，携带用户登录信息
  return myAxios.request({
    url: "/api/user/login", // 登录接口的URL
    method: "POST", // 使用POST方法发送请求
    data: params, // 将登录信息作为请求体发送
  });
};

/**
 * 用户注销函数
 * @param params - 通常可能包含一些额外的注销信息，但在这个例子中未使用
 */
export const userLogout = async (params: any) => {
  // 使用myAxios发送POST请求到/api/user/logout端点，可能携带一些额外的注销信息
  // 注意：在实际应用中，注销请求可能不需要携带额外的数据，只需要发送一个请求即可
  return myAxios.request({
    url: "/api/user/logout", // 注销接口的URL
    method: "POST", // 使用POST方法发送请求
    data: params, // 可能携带的额外信息（在这里未明确使用）
  });
};

/**
 * 获取当前用户信息的函数
 */
export const getCurrentUser = async () => {
  // 使用myAxios发送GET请求到/api/user/current端点，获取当前用户的信息
  return myAxios.request({
    url: "/api/user/current", // 获取当前用户信息的接口URL
    method: "GET", // 使用GET方法发送请求
  });
};

/**
 * 搜索用户列表的函数
 * @param username - 用于搜索的用户名（或部分用户名）
 */
export const searchUsers = async (username: any) => {
  // 使用myAxios发送GET请求到/api/user/search端点，携带用户名作为查询参数
  return myAxios.request({
    url: "/api/user/search", // 搜索用户接口的URL
    method: "GET", // 使用GET方法发送请求
    params: {
      username, // 将用户名作为查询参数发送
    },
  });
};

/**
 * 删除用户的函数
 * @param id - 要删除的用户ID
 */
export const deleteUser = async (id: string) => {
  // 使用myAxios发送POST请求到/api/user/delete端点，携带用户ID作为请求体（注意这里设置为JSON格式）
  return myAxios.request({
    url: "/api/user/delete", // 删除用户接口的URL
    method: "POST", // 使用POST方法发送请求（尽管RESTful API通常使用DELETE方法删除资源，但这里使用POST可能是出于特定设计的考虑）
    data: id, // 将用户ID作为请求体发送（注意：通常这里应该是一个对象，例如{ id: id }，但后端可能做了特殊处理来接受单个ID字符串）
    headers: {
      "Content-Type": "application/json", // 设置请求头，表明发送的是JSON格式的数据
    },
  });
};

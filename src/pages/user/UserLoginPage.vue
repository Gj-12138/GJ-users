<template>
  <div id="userLoginPage">
    <h1 class="title">用户登陆</h1>
    <a-form
      style="max-width: 480px; margin: 0 auto"
      :model="formState"
      :label-col="{ span: 4 }"
      :wrapper-col="{ span: 20 }"
      autocomplete="off"
      @finish="handleSubmit"
    >
      <a-form-item
        label="账号"
        name="userAccount"
        :rules="[{ required: true, message: '请输入账号!' }]"
      >
        <a-input
          v-model:value="formState.userAccount"
          placeholder="请输入账号！！！"
        />
      </a-form-item>

      <a-form-item
        label="密码"
        name="userPassword"
        :rules="[{ required: true, message: '请输入密码!' }]"
      >
        <a-input-password
          v-model:value="formState.userPassword"
          placeholder="请输入密码！！！"
        />
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 10, span: 16 }">
        <a-button type="primary" html-type="submit">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<style scoped>
#userLoginPage .title {
  text-align: center;
  margin-bottom: 15px;
}
</style>

<script setup lang="ts">
import { reactive } from "vue";
import { userLogin } from "@/api/user";
import { useLoginUserStore } from "@/store/useLoginUserStore";
import {  useRouter } from "vue-router";
import { message } from "ant-design-vue";

interface FormState {
  userAccount: string;
  userPassword: string;
}

const formState = reactive<FormState>({
  userAccount: "",
  userPassword: "",
});
/**
 * 表单信息
 */
// const form = reactive({
//   userAccount: "",
//   userPassword: "",
// });

/**
 * 提交表单
 */
const loginUserStore = useLoginUserStore();
const router = useRouter();
const handleSubmit = async (values: any) => {
  const res = await userLogin(values);
  if (res.data.code === 0 && res.data.data) {
    await loginUserStore.fetchLoginUser();
    message.success("登陆成功");
    router.push({
      path: "/",
      replace: true,
    });
  }else {
    message.error("登陆失败")
  }
};
</script>

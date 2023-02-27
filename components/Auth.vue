<script lang="ts" setup>
import { reactive, ref } from "vue";
import { useUser } from "~/composables/user";

const elFormRef = ref();
const loading = ref(false);
const client = useSupabaseClient();

const formData = reactive({
  username: "kevin.generic@outlook.com",
  password: "123456",
});

const rules = {
  username: { required: true, message: "请输入绑定邮箱", trigger: "blur" },
  password: { required: true, message: "请输入密码", trigger: "blur" },
};

const { updateUserInfo } = useUser();

const onLogin = async () => {
  try {
    await elFormRef.value?.validate();

    loading.value = true;

    const { data, error } = await client.auth.signInWithPassword({
      email: formData.username,
      password: formData.password,
    });
    loading.value = false;

    if (error || data.user === null) {
      ElNotification.error({
        title: "提示",
        message: error?.message || "登录失败",
        duration: 1500,
      });
      return;
    }

    updateUserInfo(data.user);
    navigateTo("/");
  } catch (error) {
    loading.value = false;

    console.log(error);
  }
};
</script>

<template>
  <div flex="~ col" items-center justify-center h-screen overflow="auto" class="view-account">
    <div max-w="400px" min-w="320px">
      <div class="view-account-form">
        <el-form
          ref="elFormRef"
          label-placement="left"
          size="large"
          :model="formData"
          :rules="rules"
        >
          <el-form-item path="username">
            <el-input v-model:value="formData.username" placeholder="请输入用户名">
              <template #prefix>
                <icon name="ic:baseline-email"></icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item path="password">
            <el-input
              v-model:value="formData.password"
              type="password"
              show-password-on="click"
              placeholder="请输入密码"
            >
              <template #prefix>
                <icon name="ic:baseline-password"></icon>
              </template>
            </el-input>
          </el-form-item>
          <!-- <el-form-item class="default-color">
            <div class="flex justify-between">
              <div class="flex-initial">
                <el-checkbox v-model:checked="autoLogin">自动登录</el-checkbox>
              </div>
              <div class="flex-initial order-last">
                <a href="javascript:">忘记密码</a>
              </div>
            </div>
          </el-form-item> -->
          <el-form-item>
            <el-button type="primary" size="large" :loading="loading" w-full @click="onLogin">
              登录
            </el-button>
          </el-form-item>
          <el-form-item>
            <div flex justify-between items-center w-full>
              <div flex items-center>
                <span>其它登录方式</span>
                <div class="inline-flex mx-2">
                  <icon name="mdi:github" cursor-pointer></icon>
                </div>
              </div>
              <div class="flex-initial" style="margiel-left: auto">
                <a href="javascript:">注册账号</a>
              </div>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<template>
  <div class="login-container">
    <el-form
      class="login-form"
      ref="Login"
      :model="loginForm"
      :rules="loginRules"
    >
      <el-form-item prop="username">
        用户名:<el-input v-model="loginForm.username" />
      </el-form-item>

      <el-form-item prop="password">
        密码:<el-input v-model="loginForm.password" />
      </el-form-item>

      <el-form-item prop="code">
        验证码:<el-input v-model="loginForm.code" />
      </el-form-item>
    </el-form>

    <img :src="img" alt="" />
    <el-button type="primary" @click="handleLoginSubmit">登录</el-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import APIuser from '../api/user'
import { validatePassword } from './rules'

// 数据源
const loginForm = ref({
  username: 'test',
  password: '1234567',
  code: '',
  token: ''
})
// const loginToken = ref({
//   captchaImg: '',
//   token: ''
// })
const Login = ref(null)
// 验证规则
const loginRules = ref({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名为必填项'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword()
    }
  ],
  code: [
    {
      required: true,
      trigger: 'blur',
      message: '验证码为必填项'
    }
  ]
})

const img = ref('')
APIuser.getcaptcha().then((res) => {
  console.log(res)
  img.value = res.data.data.captchaImg
  loginForm.value.token = res.data.data.token
  localStorage.setItem('token', res.data.data.token)
})

const router = useRouter()
const handleLoginSubmit = () => {
  Login.value.validate(async (valid) => {
    if (valid) {
      alert('成功!')
      console.log(loginForm.value)
      const res = await APIuser.Login(loginForm.value)
      console.log(res)
      console.log(res.headers.authorization)
      localStorage.setItem('gettoken', res.headers.authorization)
      if (res.status === 200) {
        router.push('/')
      }
      console.log(res)
    } else {
      console.log('用户名或密码错误!!')
      return false
    }
  })
}
</script>

<style lang="scss" scoped>
.login-container {
  width: 600px;
  height: 500px;
  margin: auto;
}
</style>

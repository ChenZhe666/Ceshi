<template>
  <div class="login-container">
    <el-form
      class="login-form"
      ref="Loginform"
      :model="loginForm"
      :rules="loginRules"
    >
      <el-form-item prop="username">
        用户名:<el-input v-model="loginForm.username" />
      </el-form-item>

      <el-form-item prop="password">
        密码:<el-input v-model="loginForm.password" />
      </el-form-item>

      <el-form-item prop="yzm">
        验证码:<el-input v-model="loginForm.yzm" />
      </el-form-item>
    </el-form>

    <img :src="img" alt="" />
    <el-button type="primary" @click="handleLoginSubmit">登录</el-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import APIuser from '../api/user'
import { validatePassword } from './rules'

// 数据源
const loginForm = ref({
  username: '',
  password: '',
  yzm: ''
})
// const loginToken = ref({
//   captchaImg: '',
//   token: ''
// })
const Loginform = ref(null)
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
  yzm: [
    {
      required: true,
      trigger: 'blur',
      message: '验证码为必填项'
    }
  ]
})
const img = ref('')
// const yzm = ref('')
APIuser.getcaptcha().then((res) => {
  console.log(res)
  img.value = res.data.captchaImg
  // yzm.value = res.data.store.commit('rawValue', res)
})

// console.log(res.data.captchaImg)
// const store = useStore()
const router = useRouter()
// const sss = ref([])
const handleLoginSubmit = () => {
  Loginform.value.validate(async (valid) => {
    if (valid) {
      alert('成功!')
      await APIuser.Login(loginForm.value)
      router.push('/home')
      // sss.value =  await APIuser.getcaptcha(loginToken.value)
      // console.log(sss._rawValue.data);
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

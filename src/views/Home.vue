<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="1">
            <el-icon><document /></el-icon>
            <span>首页</span>
          </el-menu-item>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><location /></el-icon>
              <span>系统管理</span>
            </template>
            <el-menu-item-group title="">
              <el-menu-item index="1-1">用户管理</el-menu-item>
              <el-menu-item index="1-2">角色管理</el-menu-item>
              <el-menu-item index="1-3">菜单管理</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon><location /></el-icon>
              <span>系统工具</span>
            </template>
            <el-menu-item-group title="">
              <el-menu-item index="2-1">数字字典</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <span>Vueadmin后台管理系统</span>

          <el-dropdown trigger="click" @command="handleCommand">
            <span class="el-dropdown-link">
              <!-- <el-avatar shape="square" :size="40" :src="avatarUrl" /> -->
              <span class="text">text</span>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="home">首页</el-dropdown-item>
                <el-dropdown-item command="profile">课程主页</el-dropdown-item>
                <el-dropdown-item command="logout" divided
                  >退出登录</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import APIuser from '../api/user'
import { useRouter } from 'vue-router'
APIuser.getleftmenu().then((res) => {
  console.log(res)
})

const router = useRouter()
const handleCommand = (command) => {
  console.log(command)
  switch (command) {
    case 'home':
      handleToHome()
      break
    case 'logout':
      handleLogout()
      break
  }
}

const handleToHome = () => {
  router.push('/')
}

const handleLogout = () => {
  router.push('/login')
}
</script>

<style lang="scss" scoped>
.el-header {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
}
.text {
  display: inline-block;
  width: 50px;
  height: 50px;
  background-color: gray;
  line-height: 50px;
  text-align: 50px;
  color: white;
  font-size: 25px;
}
</style>

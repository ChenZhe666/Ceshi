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
          router
        >
          <el-menu-item index="/">
            <el-icon><document /></el-icon>
            <span>首页</span>
          </el-menu-item>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><location /></el-icon>
              <span>系统管理</span>
            </template>
            <el-menu-item-group title="">
              <el-menu-item index="/sys/users">用户管理</el-menu-item>
              <el-menu-item index="/sys/roles">角色管理</el-menu-item>
              <el-menu-item index="/sys/menus">菜单管理</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon><location /></el-icon>
              <span>系统工具</span>
            </template>
            <el-menu-item-group title="">
              <el-menu-item index="/sys/dicts">数字字典</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div>
            <span>Vueadmin后台管理系统</span>
            <el-dropdown trigger="click" @command="handleCommand">
              <span class="el-dropdown-link">
                <!-- <el-avatar shape="square" :size="40" :src="avatarUrl" /> -->
                <span class="text">text</span>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item command="home">首页</el-dropdown-item>
                  <el-dropdown-item command="profile"
                    >课程主页</el-dropdown-item
                  >
                  <el-dropdown-item command="logout" divided
                    >退出登录</el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
          <div class="tags-view-container">
            <ul>
              <li
                class="tags"
                @click="handleSelectTag(item.path)"
                :class="{ active: $route.path === item.path }"
                v-for="(item, index) in tagsView"
                :key="item"
              >
                {{ item.title }}
                <span @click.stop="handleCloseTag(index)">
                  <svg-icon
                    v-if="!($route.path === item.path)"
                    icon="close"
                  ></svg-icon>
                </span>
              </li>
            </ul>
          </div>
        </el-header>
        <el-main> <router-view /> </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import APIuser from '../api/user'
import { useStore } from 'vuex'
import { computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const store = useStore()
const route = useRoute()
watch(
  () => router.currentRoute.value.path,
  (toPath) => {
    const obj = {
      title: route.meta.title,
      path: route.path
    }
    store.commit('tagsview/setTagsView', obj)
  },
  { immediate: true, deep: true }
)

const tagsView = computed(() => {
  return store.getters.tagsview
})

const handleSelectTag = (path) => {
  router.push(path)
}

const handleCloseTag = (index) => {
  store.commit('tagsview/removeTagItem', index)
}
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
.tags-view-container {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);

  .tags {
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 26px;
    line-height: 26px;
    border: 1px solid #d8dce5;
    color: #495060;
    background: #fff;
    padding: 0 8px;
    font-size: 12px;
    margin-left: 5px;
    margin-top: 4px;
  }

  .tags.active {
    background-color: rgb(48, 65, 86);
    color: #fff;
  }
}
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

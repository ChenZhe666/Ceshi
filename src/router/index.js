import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 访问的白名单, 可以直接通行
// const whiteList = ['/login']
// router.beforeEach((to, from, next) => {
//   // 访问的路径在白名单
//   if (localStorage.getItem('token')) {
//     next()
//   } else {
//     if (to.path == '/login') {
//       next()
//     } else {
//       next('/login')
//     }
//   }
// })

export default router

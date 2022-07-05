import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/sys/dicts',
        name: 'dicts',
        component: () => import('../views/sys/dicts')
      },
      {
        path: '/sys/menus',
        name: 'menus',
        component: () => import('../views/sys/menus')
      },
      {
        path: '/sys/roles',
        name: 'roles',
        component: () => import('../views/sys/roles')
      },
      {
        path: '/sys/users',
        name: 'users',
        component: () => import('../views/sys/users')
      }
    ]
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
// const Login = ['/login']
// router.beforeEach((to, from, next) => {
//   // const newHeader = localStorage.getItem('token')
//   if (localStorage.getItem('token')) {
//     if (to.path === '/login') {
//       next(from.path)
//     } else {
//       next()
//     }
//   } else {
//     if (Login.includes(to.path)) {
//       next()
//     } else {
//       next('/login')
//     }
//   }
// })
router.beforeEach((to, from, next) => {
  // 访问的路径在白名单
  if (localStorage.getItem('gettoken')) {
    next()
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})

export default router

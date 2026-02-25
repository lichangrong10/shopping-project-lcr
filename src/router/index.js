import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/login'
import Layout from '@/views/layout'
import MyOrder from '@/views/myorder'
import Pay from '@/views/pay'
import ProDetail from '@/views/prodetail/index.vue'
import Search from '@/views/search'
import Home from '@/views/layout/home.vue'
import Cart from '@/views/layout/cart.vue'
import Category from '@/views/layout/category.vue'
import User from '@/views/layout/user.vue'
import store from '@/store'
import SearchList from '@/views/search/list.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    //路由重定向，访问根路径时，自动跳转到/home
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: '/home',
        component: Home
      },
      {
        path: '/cart',
        component: Cart
      },
      {
        path: '/category',
        component: Category
      },
      {
        path: '/user',
        component: User
      },
    ]
  },
  {
    path: '/myorder',
    component: MyOrder
  },
  {
    path: '/pay',
    component: Pay
  },
  {
    path: '/prodetail/:id',
    component: ProDetail
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/searchlist',
    component: SearchList
  },
]

const router = new VueRouter({
  routes
})

//路由前置守卫
//此处用于判断用户是否登录，未登录则跳转到登录页
router.beforeEach((to, from, next) => {
  const pathArr = ['/pay', '/myorder']
  if (!pathArr.includes(to.path)) {
    next()
  } else {
    const token = store.getters.token
    if (token) {
      next()
    } else {
      next('/login')
    }
  }
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index-i.vue'
import Layout from '@/views/Layout/index-i.vue'
import Home from '@/views/Home/index-i.vue'
import Category from '@/views/Category/index-i.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      // 二级路由设置
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: 'category/:id',
          component: Category
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }

  ]
})

export default router

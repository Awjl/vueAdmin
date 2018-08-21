import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

import Layout from '../views/layout/Layout'

export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      name: 'dashboard',
      meta: { title: '首页', icon: 'dashboard', noCache: true }
    }]
  },
  {
    path: '',
    component: Layout,
    redirect: 'home',
    children: [{
      path: 'home',
      component: () => import('@/views/homeAdmin/index'),
      name: 'home',
      meta: { title: '网站管理', icon: 'guide', noCache: true }
    }]
  },
  {
    path: '',
    component: Layout,
    redirect: 'Member',
    children: [{
      path: 'Member',
      component: () => import('@/views/Member/index'),
      name: 'Member',
      meta: { title: '会员管理', icon: 'user', noCache: true }
    }]
  },
  {
    path: '',
    component: Layout,
    redirect: 'shopping',
    children: [{
      path: 'shopping',
      component: () => import('@/views/shopping/index'),
      name: 'shopping',
      meta: { title: '商城管理', icon: 'shoppingCard', noCache: true }
    }]
  },
  {
    path: '',
    component: Layout,
    redirect: 'integralshopping',
    children: [{
      path: 'integralshopping',
      component: () => import('@/views/integralshopping/index'),
      name: 'integralshopping',
      meta: { title: '积分商城管理', icon: 'nested', noCache: true }
    }]
  },
  {
    path: '',
    component: Layout,
    redirect: 'order',
    children: [{
      path: 'order',
      component: () => import('@/views/order/index'),
      name: 'order',
      meta: { title: '订单管理', icon: 'form', noCache: true }
    }]
  },
  {
    path: '',
    component: Layout,
    redirect: 'discount',
    children: [{
      path: 'discount',
      component: () => import('@/views/discount/index'),
      name: 'discount',
      meta: { title: '优惠券管理', icon: 'money', noCache: true }
    }]
  },
  {
    path: '',
    component: Layout,
    redirect: 'service',
    children: [{
      path: 'service',
      component: () => import('@/views/service/index'),
      name: 'service',
      meta: { title: '服务管理', icon: 'email', noCache: true }
    }]
  },
  {
    path: '',
    component: Layout,
    redirect: 'admin',
    children: [{
      path: 'admin',
      component: () => import('@/views/admin/index'),
      name: 'admin',
      meta: { title: '管理员管理', icon: 'component', noCache: true }
    }]
  },
  {
    path: '',
    component: Layout,
    redirect: 'system',
    children: [{
      path: 'system',
      component: () => import('@/views/system/index'),
      name: 'system',
      meta: { title: '系统管理', icon: 'lock', noCache: true }
    }]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})


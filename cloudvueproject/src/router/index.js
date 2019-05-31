import Vue from 'vue'
import Router from 'vue-router'
import menus from '@/config/menu-config'
import login from '@/components/Login/Login'
import container from '@/components/MainFrame/Container'

Vue.use(Router)


const routes = [
  {
    path: '/',
    component: login,
  },
  {
    path: '/login',
    component: login,
  },
  {
    path: '/home',
    name: 'home',
    component: container,
    children: []
  }
]

menus.forEach((item) => {
  item.sub.forEach((sub) => {
    routes[2].children.push({
      path: `/${sub.componentName}`,
      name: sub.componentName,
      component: () => import(`@/components/${sub.componentName}`)
    })
  })
})


export default new Router({ routes })
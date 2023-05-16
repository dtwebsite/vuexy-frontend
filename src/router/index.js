import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import { isUserLoggedIn } from '@/auth/utils'
//routes
import systemManagement from './systemManagement'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  // base: process.env.VUE_APP_BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'full',
        redirectIfLoggedIn: true,
      },
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        pageTitle: 'menus.home',
        breadcrumb: [
          {
            text: 'menus.home',
            active: true,
          },
        ],
      },
    },
    ...systemManagement,
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

router.beforeEach((routeTo, _, next) => {

  const redirectIfLoggedIn = routeTo.matched.some((route) => route.meta.redirectIfLoggedIn)

  const isLoggedIn = isUserLoggedIn()

  if (redirectIfLoggedIn && !isLoggedIn) return next()

  // Redirect to login if not logged in
  if (!isLoggedIn) {
    return next({ name: 'login' })
  }else{
    if(routeTo.name == 'login'){
      return next({ name: 'home' })
    }
  }
  store.dispatch('auth/checkUser')
  return next()
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router

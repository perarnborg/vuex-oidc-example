import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import OidcCallback from './views/OidcCallback.vue'
import OidcCallbackError from './views/OidcCallbackError.vue'
import { vuexOidcCreateRouterMiddleware } from 'vuex-oidc'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        isPublic: true
      }
    },
    {
      path: '/protected',
      name: 'protected',
      component: () => import(/* webpackChunkName: "protected" */ './views/Protected.vue')
    },
    {
      path: '/signin-oidc', // Needs to match redirect_uri in you oidcSettings
      name: 'oidcCallback',
      component: OidcCallback,
      meta: {
        isOidcCallback: true,
        isPublic: true
      }
    },
    {
      path: '/signin-oidc-error', // Needs to match redirect_uri in you oidcSettings
      name: 'oidcCallbackError',
      component: OidcCallbackError,
      meta: {
        isPublic: true
      }
    }
  ]
})

router.beforeEach(vuexOidcCreateRouterMiddleware(store))

export default router

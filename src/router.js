import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import OidcCallback from './views/OidcCallback.vue'
import OidcPopupCallback from './views/OidcPopupCallback.vue'
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
      path: '/oidc-callback', // Needs to match redirectUri in you oidcSettings
      name: 'oidcCallback',
      component: OidcCallback
    },
    {
      path: '/oidc-popup-callback', // Needs to match popupRedirectUri in you oidcSettings
      name: 'oidcPopupCallback',
      component: OidcPopupCallback
    },
    {
      path: '/oidc-callback-error', // Needs to match redirect_uri in you oidcSettings
      name: 'oidcCallbackError',
      component: OidcCallbackError,
      meta: {
        isPublic: true
      }
    }
  ]
})

router.beforeEach(vuexOidcCreateRouterMiddleware(store, 'oidcStore'))

export default router

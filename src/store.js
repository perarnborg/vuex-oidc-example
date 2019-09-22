import Vue from 'vue'
import Vuex from 'vuex'
import { vuexOidcCreateStoreModule } from 'vuex-oidc'
import { oidcSettings } from './config/oidc'
// NOTE: If you want to customize how tokens are stored you can use WebStorageStateStore from oidc-client (see bellow)
// Default storage is window.localStorage
// import { WebStorageStateStore } from 'oidc-client'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    oidcStore: vuexOidcCreateStoreModule(
      oidcSettings,
      // NOTE: If you do not want to use localStorage for tokens, in stead of just passing oidcSettings, you can
      // spread your oidcSettings and define a userStore of your choice
      // {
      //   ...oidcSettings,
      //   userStore: new WebStorageStateStore({ store: window.sessionStorage })
      // },
      // Optional OIDC store settings
      {
        namespaced: true,
        dispatchEventsOnWindow: true
      },
      // Optional OIDC event listeners
      {
        userLoaded: (user) => console.log('OIDC user is loaded:', user),
        userUnloaded: () => console.log('OIDC user is unloaded'),
        accessTokenExpiring: () => console.log('Access token will expire'),
        accessTokenExpired: () => console.log('Access token did expire'),
        silentRenewError: () => console.log('OIDC user is unloaded'),
        userSignedOut: () => console.log('OIDC user is signed out'),
        oidcError: (payload) => console.log('OIDC error', payload)
      }
    )
  }
})

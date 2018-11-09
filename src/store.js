import Vue from 'vue'
import Vuex from 'vuex'
import { vuexOidcCreateStoreModule } from 'vuex-oidc'
import { oidcSettings } from './config/oidc'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    oidcStore: vuexOidcCreateStoreModule(
      oidcSettings,
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
        userSignedOut: () => console.log('OIDC user is signed out')
      }
    )
  }
})

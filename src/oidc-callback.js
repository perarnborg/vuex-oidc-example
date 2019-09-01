import 'core-js/fn/promise'
import { vuexOidcProcessSignInCallback } from 'vuex-oidc'
import { oidcSettings } from './config/oidc'

vuexOidcProcessSignInCallback(oidcSettings)
  .then(redirectPath => {
    document.location = '/#' + redirectPath
  })
  .catch(error => {
    console.error('Authentication failed', error)
  })

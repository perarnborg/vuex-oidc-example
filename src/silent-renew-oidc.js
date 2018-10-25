import 'core-js/fn/promise'
import { vuexOidcProcessSilentSignInCallback } from 'vuex-oidc'
import { oidcSettings } from './config/oidc'

vuexOidcProcessSilentSignInCallback(oidcSettings)

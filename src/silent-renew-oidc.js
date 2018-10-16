import 'core-js/fn/object/assign'
import 'core-js/fn/array/find'
import 'core-js/fn/array/find-index'
import 'core-js/fn/promise'
import { vuexOidcProcessSilentSignInCallback } from 'vuex-oidc'
import { oidcSettingsChef } from './config/oidc'

vuexOidcProcessSilentSignInCallback(oidcSettingsChef)

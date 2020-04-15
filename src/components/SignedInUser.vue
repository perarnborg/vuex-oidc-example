<template>
  <div
    v-if="oidcIsAuthenticated"
  >
    <p>
      You are signed in as:
    </p>
    <div style="width:100%;max-width:640px;height: 200px;margin: 0 auto;font-family: monospace;" v-html="userDisplay"></div>

    <div v-for="tokenProperty in ['oidcIdToken', 'oidcAccessToken', 'oidcRefreshToken']" :key="tokenProperty" class="token-box">
      <p>
        {{tokenProperty}}
      </p>
      <p v-if="dynamicGet(tokenProperty)">
        <span v-if="dynamicGet(`${tokenProperty}Exp`)">
          expires {{ new Date(dynamicGet(`${tokenProperty}Exp`)).toISOString() }}
        </span>
        <span v-else>
          Expiration of {{tokenProperty}} is unknown.
        </span>
        <br>
        <textarea  readonly style="width:100%;max-width:640px;height: 200px;margin: 0 auto;font-family: monospace;">{{dynamicGet(tokenProperty)}}</textarea>
      </p>
      <p v-else>
        There is no {{tokenProperty}} in the store.
      </p>
    </div>


    <p>
      <button @click="authenticateOidcSilent">Reauthenticate silently</button>
    </p>
  </div>

  </div>
  <p v-else-if="oidcAuthenticationIsChecked">You are not signed in</p>
  <p v-else>Silent renew is in progress...</p>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import jsonMarkup from 'json-markup'

export default {
  name: 'SignedInUser',
  computed: {
    ...mapGetters('oidcStore', [
      'oidcIsAuthenticated',
      'oidcAuthenticationIsChecked',
      'oidcUser',
      'oidcIdToken',
      'oidcIdTokenExp',
      'oidcAccessToken',
      'oidcAccessTokenExp',
      'oidcRefreshToken',
      'oidcRefreshTokenExp',
    ]),
    userDisplay: function () {
      return jsonMarkup(this.oidcUser)
    },
  },
  methods: {
    ...mapActions('oidcStore', ['authenticateOidcSilent']),
    // this[property] does not work in v-for as context is shifted
    dynamicGet(property) {
      return this[property]
    }
  }
}
</script>

<style>
.json-markup {
  color: transparent;
}
.json-markup span {
  color: black;
  float: left;
}
.json-markup .json-markup-key {
  clear: left;
}

.token-box {
  background-color: lightgray;
  padding: 30px;
  margin: 50px;
}
</style>

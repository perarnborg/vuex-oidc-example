<template>
  <div id="app">
    <div
      v-if="hasAccess"
      id="nav"
    >
      <router-link to="/">Home</router-link> |
      <router-link to="/protected">Protected</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters('oidcStore', [
      'oidcIsAuthenticated'
    ]),
    hasAccess: function () {
      return this.oidcIsAuthenticated || this.$route.meta.isPublic
    }
  },
  methods: {
    authenticationListener: function () {
      console.log('I am listening to another authentication event')
    }
  },
  mounted () {
    window.addEventListener('vuexoidc:wasauthenticated', this.authenticationListener)
  },
  destroyed () {
    window.removeEventListener('vuexoidc:wasauthenticated', this.authenticationListener)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

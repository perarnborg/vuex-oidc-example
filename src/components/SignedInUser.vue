<template>
  <div
    v-if="oidcIsAuthenticated"
  >
    <p>
      You are signed in as:
    </p>
    <div style="width:100%;max-width:640px;height: 200px;margin: 0 auto;font-family: monospace;" v-html="userDisplay"></div>
  </div>
  <p v-else>You are not signed in</p>
</template>

<script>
import { mapGetters } from 'vuex'
import jsonMarkup from 'json-markup'

export default {
  name: 'SignedInUser',
  computed: {
    ...mapGetters([
      'oidcIsAuthenticated',
      'oidcUser'
    ]),
    userDisplay: function () {
      return jsonMarkup(this.oidcUser)
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
</style>

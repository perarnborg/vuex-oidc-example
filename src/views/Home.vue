<template>
  <div
    class="home"
  >
    <h1>This route is public</h1>

    <button @click="authenticateOidcSilent">Authenticate silent</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Home',
  methods: {
    ...mapActions(['authenticateOidcSilent'])
  }
}
</script>

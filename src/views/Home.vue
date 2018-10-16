<template>
  <div
    class="home"
  >
    <h1>This route is public</h1>
    <SignedInUser />

    <button @click="authenticateOidcSilent">Authenticate silent</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import SignedInUser from '@/components/SignedInUser'

export default {
  name: 'Home',
  components: { SignedInUser },
  methods: {
    ...mapActions(['authenticateOidcSilent'])
  }
}
</script>

<template>
  <div
    v-if="oidcIsAuthenticated"
    class="protected"
  >
    <h1>This route requires authentication</h1>
    <SignedInUser />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import jsonMarkup from 'json-markup'
import SignedInUser from '@/components/SignedInUser'

export default {
  name: 'Protected',
  components: { SignedInUser },
  computed: {
    ...mapGetters('oidcStore', [
      'oidcIsAuthenticated',
      'oidcUser'
    ]),
    userDisplay: function () {
      return jsonMarkup(this.oidcUser)
    }
  }
}
</script>

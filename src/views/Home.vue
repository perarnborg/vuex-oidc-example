<template>
  <div
    class="home"
  >
    <h1>This route is public</h1>
    <SignedInUser />
  </div>
</template>

<script>
import SignedInUser from '@/components/SignedInUser'

export default {
  name: 'Home',
  components: { SignedInUser }
}
</script>

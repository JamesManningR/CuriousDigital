<script setup lang="ts">

</script>

<template lang="pug">
#app
  AppHeader

  slot

  AppFooter
</template>

<style lang="scss">
body {
  background-color: var(--black);
  color: var(--white);
}
</style>
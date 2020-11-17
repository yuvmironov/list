<template>
  <div class="Footer">
    Подвал {{ version }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      version: process.env.VUE_APP_VERSION
    }
  }
}
</script>

<style lang="stylus">
.Footer
  border-top 1px solid #0500E5
</style>

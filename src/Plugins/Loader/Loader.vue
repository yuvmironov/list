<template>
  <div class="MainLoader" v-if="flagShowLoader">
    <img class="Loader" src="../../assets/loader.svg" alt="">
  </div>
</template>

<style lang="stylus">
  .Loader
    height 150px
    width 150px
  .MainLoader
    position fixed
    top 0
    bottom 0
    right: 0
    left: 0
    background-color white
    display flex
    align-items center
    justify-content center
    z-index 9999
</style>

<script>
export default {
  computed: {
    flagShowLoader: function () {
      return this.$store.getters.getLoaderFlag
    }
  }
}
</script>

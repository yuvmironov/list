<template>
  <div id="app" class="Home">
    <Header class="Home-Header"/>
    <router-view class="Home-Content"/>
    <Footer class="Home-Footer"/>
    <loader-component/>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    Header: () => import('@/components/Header.vue'),
    Footer: () => import('@/components/Footer.vue')
  }
}
</script>

<style lang="stylus">
@import 'Global.styl'
.Home
  height 100vh
  display flex
  flex-direction column
  justify-content space-between
</style>

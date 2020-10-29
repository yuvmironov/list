<template>
  <div class="ErrText" v-if="flagShow">{{ text }}</div>
</template>

<style lang="stylus">
  .ErrText
    color red
</style>

<script>
export default {
  props: [
    'flagShow',
    'text'
  ]
}
</script>

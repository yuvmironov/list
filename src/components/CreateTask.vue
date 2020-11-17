<template>
  <div class="CreateTask" v-show="flagShow" @click="closeWindow">
    <div class="CreateTask-Content">
      <span class="CreateTask-Close" @click="closeWindow">X</span>
      <form action="" class="CreateTask-Form">
        <label class="CreateTask-Label" for="NameTask">Название задачи</label>
        <input class="CreateTask-Input" type="text" id="NameTask" placeholder="Введите название задачи">
        <label class="CreateTask-Label" for="DescriptionTask">Описание задачи</label>
        <textarea class="CreateTask-TextArea" id="DescriptionTask" placeholder="Введите описание задачи"></textarea>
        <div class="CreateTask-Buttons">
          <button>Сохранить</button>
          <button>Очистить</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    flagShow: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closeWindow () {
      this.$emit('closeWindow', false)
    }
  }
}
</script>

<style lang="stylus">
.CreateTask
  position fixed
  background-color rgba(0, 0, 0, 0.5)
  top 0
  bottom 0
  left 0
  right 0
  display flex
  align-items center
  justify-content center
  &-Content
    position relative
    background-color #fff
    padding 20px
  &-Close
    cursor pointer
    position absolute
    top 5px
    right 5px
  &-Form
    display flex
    flex-direction column
  &-TextArea
    resize none
    width 200px
    height 100px
</style>

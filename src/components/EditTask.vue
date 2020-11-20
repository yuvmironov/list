<template>
  <div class="EditTask" v-show="flagShow">
    <div class="EditTask-Content">
      {{ taskChange }}
      <span class="EditTask-Close" @click="closeWindow">X</span>
      <form action="" class="EditTask-Form">
        <label class="EditTask-Label" for="NameTaskChange">Название задачи</label>
        <input v-model="taskChange.nameTask"
               class="EditTask-Input"
               type="text"
               id="NameTaskChange"
               placeholder="Введите название задачи">
        <!--<div class="Err-Message"
             :class="{ 'Err-Message_Err' : !empty.status, 'Err-Message_Suc' : empty.status }"
        >{{ empty.text }}</div>-->
        <label class="EditTask-Label" for="DescriptionTaskChange">Описание задачи</label>
        <textarea v-model="taskChange.description" class="EditTask-TextArea" id="DescriptionTaskChange" placeholder="Введите описание задачи"></textarea>
        <div class="EditTask-Buttons">
          <button @click="saveTask">Сохранить</button>
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
    },
    task: {
      type: Object,
      required: true
    }
  },
  methods: {
    closeWindow () {
      this.$emit('closeWindow', false)
    },
    saveTask () {
      this.$emit('saveTask', this.taskChange)
    }
  },
  computed: {
    taskChange () {
      return this.task
    }
  }
}
</script>

<style lang="stylus">
.EditTask
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

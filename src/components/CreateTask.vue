<template>
  <div class="CreateTask" v-show="flagShow">
    <div class="CreateTask-Content">
      <span class="CreateTask-Close" @click="closeWindow">X</span>
      <form action="" class="CreateTask-Form">
        <label class="CreateTask-Label" for="NameTask">Название задачи</label>
        <input v-model="taskName"
               @keyup="validEmpty"
               class="CreateTask-Input"
               type="text"
               id="NameTask"
               placeholder="Введите название задачи">
        <div class="Err-Message"
             :class="{ 'Err-Message_Err' : !empty.status, 'Err-Message_Suc' : empty.status }"
        >{{ empty.text }}</div>
        <label class="CreateTask-Label" for="DescriptionTask">Описание задачи</label>
        <textarea v-model="taskDesc" class="CreateTask-TextArea" id="DescriptionTask" placeholder="Введите описание задачи"></textarea>
        <div class="CreateTask-Buttons">
          <button @click="saveTask">Сохранить</button>
          <button>Очистить</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
function createDate () {
  const date = new Date()
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
}
export default {
  props: {
    flagShow: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      taskName: '',
      taskDesc: '',
      empty: {
        status: Boolean,
        text: ''
      }
    }
  },
  methods: {
    validEmpty () {
      const validResult = this.$NewValid({ type: 'empty', data: this.taskName })
      this.empty.status = validResult.status
      this.empty.text = validResult.text
    },
    closeWindow () {
      this.$emit('closeWindow', false)
    },
    saveTask () {
      if (this.taskName) {
        this.$emit('saveTask', {
          nameTask: this.taskName,
          description: this.taskDesc,
          dateCreate: createDate(),
          completeStatus: false,
          arhive: false
        })
        this.taskName = ''
        this.taskDesc = ''
      } else {
        this.empty.status = false
        this.empty.text = 'Не все обязательные поля заполнены'
      }
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

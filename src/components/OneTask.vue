<template>
  <div class="OneTask">
    <p class="OneTask-Name" @click="showDecs" :class="{ 'OneTask-Name_Complete' : data.completeStatus }">{{data.dateCreate}} {{ data.nameTask }}</p>
    <div class="OneTask-Control">
      <img class="OneTask-Edit ControlElement" @click="editTask(data)" src="@/assets/image/writing.svg">
      <input :id="data._id" :checked="data.completeStatus" :disabled="data.completeStatus" class="OneTask-Complete ControlElement" @change="changeStatus" type="checkbox">
      <label class="OneTask-Label" :for="data._id"></label>
      <img class="OneTask-Delete ControlElement" @click="deleteTask(data)" src="@/assets/image/delete.svg">
      <img class="OneTask-Arhive ControlElement" @click="arhiveTask(data)" src="@/assets/image/verified.svg">
    </div>
    <div class="OneTask-Desc" v-if="descShow">{{ data.description }}</div>
  </div>
</template>

<script>
export default {
  props: [
    'data'
  ],
  data () {
    return {
      descShow: false
    }
  },
  methods: {
    showDecs () {
      this.descShow = !this.descShow
    },
    changeStatus (e) {
      this.$emit('changeStatus', e)
    },
    editTask (task) {
      if (!task.completeStatus) {
        this.$emit('editTask', task._id)
      }
    },
    deleteTask (task) {
      if (!task.completeStatus) {
        this.$emit('deleteTask', task._id)
      }
    },
    arhiveTask (task) {
      if (task.completeStatus) {
        this.$emit('arhiveTask', task._id)
      }
    }
  }
}
</script>

<style lang="stylus">
.ControlElement
  cursor pointer
  width 20px
.OneTask
  display flex
  flex-wrap wrap
  width 800px
  justify-content space-between
  padding 10px
  border 1px solid black
  border-radius 5px
  box-shadow 0 0 6px 1px rgba(5, 0, 229, 0.3)
  &:not(last-child)
    margin-bottom 10px
  &-Desc
    flex-basis 100%
    border-top 1px solid black
    margin-top 4px
    padding-top 4px
  &-Name
    cursor pointer
    &_Complete
      text-decoration line-through
  &-Control
    flex-basis 15%
    display flex
    justify-content space-between
    align-items center
  &-Label
    display: block;
    width: 20px;
    height: 20px;
    border: 2px solid black;
    border-radius: 4px;
  &-Complete
    display none
    &:checked + .OneTask-Label
      border-color green
      position relative
      &:after, &:before

        content: ''
        position absolute
        display block
        height 2px
        background-color green
        bottom 8px
      &:after
        transform: rotate(55deg);
        width: 10px;
        bottom: 6px;
        left: 1px;
      &:before
        transform: rotate(-55deg);
        width: 16px;
        left: 5px;
</style>

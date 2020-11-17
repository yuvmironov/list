<template>
  <div class="Content">
    <menu class="Content-Menu">
      <p @click="changeFlagCreateTask(true)">Создать задачу</p>
      <p>Архив задач</p>
      <p>Выход</p>
    </menu>
    <div class="Content-Tasks">
      <OneTask v-for="item in dataForComponent"
               :key="item.id"
               :data="item"
               @changeStatus="changeT"
               @editTask="editT"
               @deleteTask="deleteT"
               @arhiveTask="arhiveT"
               class="Home-OneTask"
      />
    </div>
    <CreateTask :flagShow = 'flagCreateTask'
                @closeWindow="changeFlagCreateTask"
                @saveTask = "createNewTask"
    />
  </div>
</template>

<style lang="stylus">
.Content
  display flex
  padding 15px
  &-Menu
    flex-basis 10%
  &-Tasks
    flex-basis 100%
    display flex
    flex-direction column
    align-items center
</style>

<script>
export default {
  name: 'Home',
  data () {
    return {
      dataForComponent: [],
      flagCreateTask: false
    }
  },
  components: {
    OneTask: () => import('@/components/OneTask.vue'),
    CreateTask: () => import('@/components/CreateTask')
  },
  methods: {
    changeFlagCreateTask (data) {
      this.flagCreateTask = data
    },
    createNewTask (data) {
      this.$store.commit('setLoaderFlag', true)
      const dataT = {
        user: localStorage.getItem('user'),
        task: data
      }
      this.$store.dispatch('createTask', dataT)
        .then(response => {
          if (response.data.status === 200) {
            this.flagCreateTask = false
            this.getData()
          } else {
            // TODO: Проработать ошибку создания
          }
        })
        .catch(() => {
          // TODO: Проработать ошибку создания
        })
    },
    changeT (e) {
      this.$store.commit('setLoaderFlag', true)
      for (let i = 0; i < this.dataForComponent.length; i++) {
        if (this.dataForComponent[i]._id === e.target.id) {
          this.$store.dispatch('endTask', { user: localStorage.getItem('user'), id: e.target.id })
            .then(response => {
              console.log(response)
              if (response.data.status === 200) {
                this.dataForComponent[i].completeStatus = true
              }
            })
            .finally(() => {
              this.$store.commit('setLoaderFlag', false)
            })
        }
      }
    },
    editT (id) {
      console.log('Edit task', id)
    },
    deleteT (id) {
      this.$store.commit('setLoaderFlag', true)
      this.$store.dispatch('deleteTask', { id: id, user: localStorage.getItem('user') })
        .then(response => {
          if (response.data.status === 200) {
            this.dataForComponent = this.dataForComponent.filter(item => item._id !== id)
          } else {
            console.log('не удалось')
          }
        })
        .catch(() => {
          console.log('Не удалось')
        })
        .finally(() => {
          this.$store.commit('setLoaderFlag', false)
        })
    },
    arhiveT (id) {
      console.log(id)
    },
    getData () {
      this.$store.dispatch('getData', { collection: localStorage.getItem('user') })
        .then(response => {
          console.log(response)
          this.dataForComponent = response.data.data
        })
        .finally(() => {
          this.$store.commit('setLoaderFlag', false)
        })
    }
  },
  mounted () {
    this.$store.commit('setLoaderFlag', true)
    this.getData()
  }
}
</script>

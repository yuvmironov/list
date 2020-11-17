import Vue from 'vue'
import Vuex from 'vuex'
import taskWork from '@/store/taskWork.js'
import autorisedTask from '@/store/autorisedTask'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    taskWork,
    autorisedTask
  },
  state: {
    loader: false
  },
  getters: {
    getLoaderFlag: state => state.loader
  },
  mutations: {
    setLoaderFlag: (state, flag) => { state.loader = flag }
  }
})

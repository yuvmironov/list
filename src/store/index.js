import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loader: false
  },
  getters: {
    getLoaderFlag: state => state.loader
  },
  mutations: {
    setLoaderFlag: (state, flag) => { state.loader = flag }
  },
  actions: {
    getData (context, collection) {
      return axios({
        method: 'GET',
        params: collection,
        url: 'https://limitless-headland-64818.herokuapp.com/loadDocuments',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept-Language': 'ru-RU'
        }
      })
        .then(response => {
          return response
        })
    },
    loginAction (context, data) {
      return axios({
        method: 'GET',
        url: 'https://limitless-headland-64818.herokuapp.com/login',
        params: data,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept-Language': 'ru-RU'
        }
      })
        .then(response => {
          return response
        })
    },
    registrationAction (context, data) {
      return axios({
        method: 'POST',
        url: 'https://limitless-headland-64818.herokuapp.com/registration',
        data: data,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept-Language': 'ru-RU'
        }
      })
        .then(response => {
          return response
        })
    },
    deleteTask (context, data) {
      return axios({
        method: 'POST',
        url: 'https://limitless-headland-64818.herokuapp.com/deleteTask',
        data: data,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept-Language': 'ru-RU'
        }
      })
        .then(response => {
          return response
        })
    }
  },
  modules: {
  }
})

import axios from 'axios'

const actions = {
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
  },
  createTask (context, data) {
    return axios({
      method: 'POST',
      url: 'https://limitless-headland-64818.herokuapp.com/createTask',
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
  endTask (context, data) {
    return axios({
      method: 'POST',
      url: 'https://limitless-headland-64818.herokuapp.com/endTask',
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
  updateTask (context, data) {
    return axios({
      method: 'POST',
      url: 'https://limitless-headland-64818.herokuapp.com/updateTask',
      data: data,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept-Language': 'ru-RU'
      }
    })
  }
}

export default {
  actions
}

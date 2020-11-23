import axios from 'axios'

const actions = {
  getData (context, collection) {
    return axios({
      method: 'GET',
      params: collection,
      url: 'https://listnode.herokuapp.com/loadDocuments',
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
      url: 'https://listnode.herokuapp.com/deleteTask',
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
      url: 'https://listnode.herokuapp.com/createTask',
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
      url: 'https://listnode.herokuapp.com/endTask',
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
      url: 'https://listnode.herokuapp.com/updateTask',
      data: data,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept-Language': 'ru-RU'
      }
    })
  },
  zipTask (context, data) {
    return axios({
      method: 'POST',
      // url: 'https://listnode.herokuapp.com/updateTask',
      url: 'http://localhost:3000/zipTask',
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

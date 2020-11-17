import axios from 'axios'

const actions = {
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
  }
}

export default {
  actions
}

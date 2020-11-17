export default {
  install: function (Vue) {
    console.log('Validation plugin start')
    /**
     * Валидация данных
     * @param { Object } sendingData - данные для валидации
     * @param { string } sendingData.type - Тип валидации
     * @param { string } sendingData.data - Данные для валидации
     * @returns { boolean }
     */
    Vue.prototype.$NewValid = function (param) {
      const result = {
        status: true,
        text: ''
      }
      switch (param.type) {
        case 'empty':
          console.log(param)
          if (param.data) {
            result.status = true
            result.text = ''
          } else {
            result.status = false
            result.text = 'Поле не может быть пустым'
          }
          break
        case 'login':
          if (param.data.length > 5 && param.data.match(/[A-я]/g)) {
            result.status = true
            result.text = 'Валидация пройдена'
          } else {
            result.status = false
            result.text = 'Длинна от 6 символов и только латиница'
          }
          break
        case 'email':
          if (param.data.length >= 7 && param.data.length <= 64 && param.data.match(/.+@.+\..+/i)) {
            result.status = true
            result.text = 'Валидация пройдена'
          } else {
            result.status = false
            result.text = 'Введенные данные не являются E-mail'
          }
          break
        case 'password':
          if ((param.data.length >= 8 && param.data.length <= 64) && param.data.match(/\d/g) && param.data.match(/[A-Z]/g) && param.data.match(/[a-z]/g)) {
            result.status = true
            result.text = 'Валидация пройдена'
          } else {
            result.status = false
            result.text = 'Длинна от 8 символов, цифра, большая и маленькая буква'
          }
          break
        case 'repPassword':
          if (param.data.pass === param.data.repPass) {
            result.status = true
            result.text = 'Пароли совпадают'
          } else {
            result.status = false
            result.text = 'Пароли не совпадают'
          }
          break
      }
      return result
    }
  }
}

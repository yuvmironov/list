<template>
  <div class="Main">
    <Button :text=loginButton.text :onClick='LoginShow'/>
    <Button :text=registrationButton.text :onClick='RegistrationShow'/>
    <div class="Main-Login Login" v-if="flagLogin">
      <div class="Login-Content">
        <p>Логин</p>
        <label for="Login">Имя пользователя</label>
        <input type="text"
               id="Login"
               name="Login"
               v-model="loginForm.login"
               @keyup="validLogin"
        >
        <div class="Login-Message" :class="{ 'Login-Message_Err' : !loginMessage.status, 'Login-Message_Suc' : loginMessage.status }">{{ loginMessage.text }}</div>
        <label for="Password">Пароль</label>
        <input type="password"
               id="Password"
               name="Password"
               v-model="loginForm.password"
               @keyup="validPassword"
        >
        <div class="Login-Message" :class="{ 'Login-Message_Err' : !passMessage.status, 'Login-Message_Suc' : passMessage.status }">{{ passMessage.text }}</div>
        <div class="Login-ButtonBlock">
          <Button :text=loginButton.text :onClick='Login'/>
          <Button :text=canselButton.text :onClick='LoginShow'/>
        </div>
        <ErrText :flagShow="loginErr" :text="loginErrText"/>
      </div>
    </div>
    <div class="Main-Registration Registration" v-if="flagRegistration">
      <div class="Registration-Content">
        <p>Регистрация</p>
        <label for="emailR">E-mail</label>
        <input type="email"
               id="emailR"
               name="email"
               v-model="registrationForm.email"
               @keyup="validEmail"
        >
        <div class="Login-Message" :class="{ 'Login-Message_Err' : !mailMessage.status, 'Login-Message_Suc' : mailMessage.status }">{{ mailMessage.text }}</div>

        <label for="LoginR">Имя пользователя</label>
        <input type="text"
               id="LoginR"
               name="Login"
               v-model="registrationForm.login"
               @keyup="validUserName"
        >
        <div class="Login-Message" :class="{ 'Login-Message_Err' : !userMessage.status, 'Login-Message_Suc' : userMessage.status }">{{ userMessage.text }}</div>

        <label for="PasswordR">Пароль</label>
        <input type="password"
               id="PasswordR"
               name="Password"
               v-model="registrationForm.password"
               @keyup="validPass"
        >
        <div class="Login-Message" :class="{ 'Login-Message_Err' : !passRegMess.status, 'Login-Message_Suc' : passRegMess.status }">{{ passRegMess.text }}</div>

        <label for="RepeatePassword">Пароль</label>
        <input type="password"
               id="RepeatePassword"
               name="Password"
               v-model="registrationForm.repPassword"
               @keyup="validRepPass"
        >
        <div class="Login-Message" :class="{ 'Login-Message_Err' : !passRepMess.status, 'Login-Message_Suc' : passRepMess.status }">{{ passRepMess.text }}</div>
        <ErrText :flagShow="regError" :text="regErrorText"/>
        <div class="Registration-ButtonBlock">
          <Button :text=registrationButton.text :onClick='Registration'/>
          <Button :text=canselButton.text :onClick='RegistrationShow'/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  components: {
    Button: () => import('@/components/Button.vue'),
    ErrText: () => import('@/components/ErrText.vue')
  },
  data () {
    return {
      flagLogin: false,
      flagRegistration: false,
      loginErr: false,
      regError: false,
      errConnect: false,
      loginForm: {
        login: '',
        password: ''
      },
      registrationForm: {
        login: '',
        email: '',
        password: '',
        repPassword: ''
      },
      loginButton: {
        text: 'Логин'
      },
      registrationButton: {
        text: 'Регистрация'
      },
      canselButton: {
        text: 'Отмена'
      },
      loginErrText: '',
      regErrorText: '',
      loginMessage: {
        status: Boolean,
        text: ''
      },
      passMessage: {
        status: Boolean,
        text: ''
      },
      mailMessage: {
        status: Boolean,
        text: ''
      },
      userMessage: {
        status: Boolean,
        text: ''
      },
      passRegMess: {
        status: Boolean,
        text: ''
      },
      passRepMess: {
        status: Boolean,
        text: ''
      }
    }
  },
  methods: {
    validEmail () {
      const validResult = this.$NewValid({ type: 'email', data: this.registrationForm.email })
      if (validResult.status) {
        this.mailMessage.status = validResult.status
        this.mailMessage.text = validResult.text
      } else {
        this.mailMessage.status = validResult.status
        this.mailMessage.text = validResult.text
      }
    },
    validPassword () {
      const validResult = this.$NewValid({ type: 'password', data: this.loginForm.password })
      if (validResult.status) {
        this.passMessage.status = validResult.status
        this.passMessage.text = validResult.text
      } else {
        this.passMessage.status = validResult.status
        this.passMessage.text = validResult.text
      }
    },
    validPass () {
      const validResult = this.$NewValid({ type: 'password', data: this.registrationForm.password })
      if (validResult.status) {
        this.passRegMess.status = validResult.status
        this.passRegMess.text = validResult.text
      } else {
        this.passRegMess.status = validResult.status
        this.passRegMess.text = validResult.text
      }
    },
    validLogin () {
      const validResult = this.$NewValid({ type: 'login', data: this.loginForm.login })
      if (validResult.status) {
        this.loginMessage.status = validResult.status
        this.loginMessage.text = validResult.text
      } else {
        this.loginMessage.status = validResult.status
        this.loginMessage.text = validResult.text
      }
    },
    validUserName () {
      const validResult = this.$NewValid({ type: 'login', data: this.registrationForm.login })
      if (validResult.status) {
        this.userMessage.status = validResult.status
        this.userMessage.text = validResult.text
      } else {
        this.userMessage.status = validResult.status
        this.userMessage.text = validResult.text
      }
    },
    validRepPass () {
      const validResult = this.$NewValid({ type: 'repPassword', data: { pass: this.registrationForm.password, repPass: this.registrationForm.repPassword } })
      if (validResult.status) {
        this.passRepMess.status = validResult.status
        this.passRepMess.text = validResult.text
      } else {
        this.passRepMess.status = validResult.status
        this.passRepMess.text = validResult.text
      }
    },
    LoginShow () {
      console.log('login')
      this.flagLogin = !this.flagLogin
      if (!this.flagLogin) {
        this.loginErr = false
        this.errConnect = false
      }
    },
    RegistrationShow () {
      this.flagRegistration = !this.flagRegistration
      this.regError = false
    },
    Login () {
      if (this.loginForm.login && this.loginForm.password) {
        if (this.loginMessage.status && this.passMessage.status) {
          this.$store.commit('setLoaderFlag', true)
          this.$store.dispatch('loginAction', { name: this.loginForm.login, pass: this.loginForm.password })
            .then(response => {
              if (response.data.status === 200 && response.data.data) {
                localStorage.setItem('user', this.loginForm.login)
                this.$router.push('home')
              } else {
                this.loginErr = true
                this.loginErrText = 'Пользватель не найден'
              }
            })
            .catch(() => {
              this.errConnect = true
            })
            .finally(() => {
              this.$store.commit('setLoaderFlag', false)
            })
        } else {
          this.loginErr = true
          this.loginErrText = 'Не все данные валидны'
        }
      } else {
        this.loginErr = true
        this.loginErrText = 'Не все поля заполнены'
      }
    },
    Registration () {
      if (this.passMessage.status && this.mailMessage.status && this.userMessage.status && this.passRegMess.status && this.passRepMess.status) {
        if (this.registrationForm.email && this.registrationForm.login && this.registrationForm.repPassword && this.registrationForm.password) {
          // включит лоадер
          this.$store.dispatch('registrationAction', this.registrationForm)
            .then(response => {
              console.log(response)
              if (response.data.status === 300) {
                this.regError = true
                this.regErrorText = 'Email или имя пользователя уже заняты'
              } else if (response.data.status === 200) {
                localStorage.setItem('user', this.registrationForm.login)
                this.$router.push('home')
              }
            })
        } else {
          this.regError = true
          this.regErrorText = 'Заполнены не все поля'
        }
      } else {
        this.regError = true
        this.regErrorText = 'Не все данные валидны'
      }
      console.log('registr')
    }
  }
}
</script>

<style lang="stylus">
.Login, .Registration
  &-Content
    width 420px
    display flex
    flex-direction column
    background-color white
    padding 60px
.Login
  &-Message
    &_Err
      color red
    &_Suc
      color green
.Main
  display flex
  justify-content center
  height 100%
  align-items center
  &-Login, &-Registration
    position: fixed;
    background-color: rgba(0,0,0,0.5);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
</style>

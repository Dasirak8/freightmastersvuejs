<template>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap" rel="stylesheet">

  <div class="login">
    <form @submit.prevent="login">
      <h3>Login Here</h3>

      <label for="username">Username</label>
      <input type="text" name='username' placeholder="Username" v-model="username" id="username">

      <label for="password">Password</label>
      <input type="password" name='password' placeholder="Password" v-model="password" id="password">

      <button>Log In</button>
    </form>
  </div>

</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
import router from "@/router/index";

export default {
  name: "Login",
  beforeRouteEnter(to, from, next) {
    sessionStorage.setItem('redirectedFrom', from.fullPath)
    next()
  },
  setup() {
    const username = ref('')
    const password = ref('')

    async function login() {
      try {
        const response = await axios.post('http://localhost:8081/api/auth/signin', {
          username: username.value,
          password: password.value
        })

        localStorage.setItem('accessToken', response.data.accessToken)
        localStorage.setItem('tokenType', response.data.tokenType)

        await router.push(sessionStorage.getItem('redirectedFrom'))

      } catch (error) {
        console.log(error)
      }
    }
    return {
      username,
      password,
      login
    }
  },

}
</script>

<style lang="scss" scoped>
.login{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #161432 !important;
}
* {
  padding: 0;
  box-sizing: border-box;
  &:before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  &:after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
}

form {
  height: 520px;
  width: 400px;
  background-color: rgba(255,255,255,0.13);
  position: absolute;
  transform: translate(-50%,-50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255,255,255,0.1);
  box-shadow: 0 0 40px rgba(8,7,16,0.6);
  padding: 50px 35px;
  * {
    font-family: 'Poppins',sans-serif;
    color: #ffffff;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
  }
  h3 {
    font-size: 32px;
    font-weight: 500;
    line-height: 42px;
    text-align: center;
  }
}
label {
  display: block;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
}
input {
  display: block;
  height: 50px;
  width: 100%;
  background-color: rgba(255,255,255,0.07);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
}
button {
  margin-top: 50px;
  width: 100%;
  background-color: #ffffff;
  color: #080710;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
}
@media screen and (max-width: 960px) {
  form {
    width: 95%;
  }
}

</style>
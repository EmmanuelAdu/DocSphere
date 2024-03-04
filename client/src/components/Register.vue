<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" v-model="email" placeholder="email"><br>
    <input type="password" name="password" v-model="password" placeholder="password"><br>
    <div class="error" v-html="error"/>
    <button @click="register">Register</button>
  </div>
</template>

<script>
// Send HTTP Request to the backend
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: 'abc',
      password: '12345',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error{
  color: red;
}
</style>
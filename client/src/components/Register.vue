<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" v-model="email" placeholder="email"><br>
    <input type="password" name="password" v-model="password" placeholder="password"><br>
    <button @click="register">Register</button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      email: 'abc',
      password: '12345'
    }
  },
  methods: {
    register () {
      console.log('register button was clicked', this.email, this.password)
    }
  },
  watch: {
    email (value) {
      console.log('email has changed', value)
    }
  }
}
</script>

/** Template for viewing login page */

<template>
    <div>
      <Header/>
      <div class="container">
      <div class="form-container">
        <h2>Login To Your Account</h2>
        <form @submit.prevent="register">
          <input type="email" placeholder="Email" v-model="email">
          <input type="password" placeholder="Password" v-model="password">
          <button @click="login" type="submit">Login</button>
        </form>
        <div class="social-icons">
          <span>Or login with:</span>
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-google"></i></a>
        </div>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  import Header from './Header.vue'
  import AuthenticationService from '@/services/AuthenticationService'
  
  export default {
    components: {
      Header
    },
  
    data() {
      return {
        email: '',
        password: '',
        error: null
      }
    },
    methods: {
      async login() {
        try {
          const response = await AuthenticationService.login({
            email: this.email,
            password: this.password
          })
          this.$router.push('/mainApp') // Routes to main application
          // Handle successful registration
        } catch (error) {
          this.error = error.response.data.error
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .form-container {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 30px;
    width: 350px;
    text-align: center;
  }
  
  .form-container h2 {
    margin-bottom: 20px;
    color: #333;
  }
  
  .form-container input {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }
  
  .form-container button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .form-container button:hover {
    background-color: #0056b3;
  }
  
  .social-icons {
    margin-top: 20px;
  }
  
  .social-icons a {
    color: #333;
    text-decoration: none;
    margin: 0 10px;
  }
  
  .social-icons a:hover {
    color: #007bff;
  }
  </style>
  
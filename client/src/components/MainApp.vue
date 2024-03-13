// Main Page for the application
<template>
    <div class="container">
      <SideBar />
      <Navbar />
      <!-- Other content -->
    </div>
  </template>
  
  <script>
  import SideBar from './SideBar.vue';
  import Navbar from './Navigation.vue';
  
  export default {
    components: {
      SideBar,
      Navbar
    }
  }
  </script>
  
  <style>
  .container {
    display: flex;
  }
  </style>
  
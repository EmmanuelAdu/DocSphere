// Main Page for the application
<template>
<v-app>
    <SideBar/>
    <Navbar/>
</v-app>
</template>

<script>
import SideBar from './SideBar.vue'
import Navbar from './Navigation.vue'

export default {
    name: 'MainApp',
    components: {
        SideBar,
        Navbar
    }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden; /* Prevent scrolling */
}
</style>
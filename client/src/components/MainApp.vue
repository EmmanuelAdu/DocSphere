// Main Page for the application
<template>
<v-app>
    <SideBar/>
</v-app>
</template>

<script>
import SideBar from './SideBar.vue'
export default {
    name: 'MainApp',
    components: {
        SideBar
    }
}
</script>

<style>
</style>
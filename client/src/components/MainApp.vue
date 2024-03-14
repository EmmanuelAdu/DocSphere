// Main Page for the application
<template>
    <div>
        <div class="container">
            <SideBar />
            <Navbar />
            <!-- Other content -->
        </div>
        <Contact />
        <Doctor />
    </div>
</template>
  
<script>
import SideBar from './SideBar.vue';
import Navbar from './Navigation.vue';
import Contact from './Contact.vue'
import Doctor from './Doctor.vue'

export default {
    components: {
        SideBar,
        Navbar,
        Contact,
        Doctor
    }
}
</script>
  
<style>
.container {
    display: flex;
}
</style>
  
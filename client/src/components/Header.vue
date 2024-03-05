/**
* Contains All Header tabs
*/

<template>
    <div>
        <header>
            <div class="container">
                <nav>
                    <a href="#">
                        <img src="#" alt="brand-logo">
                    </a>
                    <ul>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">HealthTips</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">SignIn</a></li>
                        <li><router-link to="/register" class="btn btn-secondary">Get Started</router-link></li>
                    </ul>
                </nav>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="css" src="../styles/header.css"></style>

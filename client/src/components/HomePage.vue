<template>
  <div>
    <!-- Header -->
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
            <li><router-link to="/login">SignIn</router-link></li>
            <li><router-link to="/register" class="btn btn-secondary">Get Started</router-link></li>
          </ul>
          <div class="menu-toggler">
            <img src="#" class="hamburger-menu" alt="">
          </div>
        </nav>
      </div>
    </header>

    <!-- Main content -->
    <main>
      <!-- Hero Section -->
      <section id="hero">
        <div class="container">
          <div class="hero_content-wrapper">
            <div>
              <h1 class="mb-2"> Connect with certified <span class="gradient-text">doctors</span> anytime, anywhere.</h1>
              <p class="mb-4">Experience the future of healthcare with our telemedicine app. Quality care, convenient access.
                Say goodbye to waiting rooms! Instantly consult with medical professionals from the comfort of your home.
                Your health, simplified. Consultations made easy, prescriptions delivered to your doorstep</p>
              <a href="#" class="btn btn-secondary">Get Started</a>
            </div>
            <div class="hero_img">
              <img src="../assets/Doctor.jpg" alt="main-image">
            </div>
          </div>
          <div class="info">
            <h3>From minor ailments to mental stress, we've got you covered</h3>
            <p>Don't let distance be a barrier to good health. Our telemedicine app connects you with top doctors in seconds.
            <span class="gradient-text">Join</span> the telemedicine revolution. Accessible, affordable, and efficient healthcare for everyone
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'HelloPage',
  // Add your script logic here
}
</script>

<style lang="css" src="../styles/header.css"></style>

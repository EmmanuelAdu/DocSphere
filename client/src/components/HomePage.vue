<template>
  <div>
    <!-- Header -->
    <header>
      <div class="container">
        <nav>
          <a href="#">
            <img src="#" alt="brand-log">
          </a>
          <ul>
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">HealthTips</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">SignIn</a></li>
            <li><a href="#" class="btn btn-secondary">Get Started</a></li>
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
              <h1 class="mb-2">Sparking their <span class="gradient-text">curiosity</span> & creativity.</h1>
              <p class="mb-4">We prepare young minds for an innovative future by igniting imagination,
                fostering essential soft skills, and providing engaging hands-on learning experiences in
                coding, STEM, and interactive classes.</p>
              <a href="#" class="btn btn-secondary">Get Started</a>
            </div>
            <div class="hero_img">
              <img src="../assets/Doctor.jpg" alt="main-image">
            </div>
          </div>
          <div class="info">
            <h3>Unleash their creativity with coding, stem & soft skills</h3>
            <p>We prepare young minds for an innovative future by igniting imagination, fostering essential soft
              skills, and providim 8i12 ng engaging hands-on learning experiences in coding, STEM, and interactive
              classes.</p>
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

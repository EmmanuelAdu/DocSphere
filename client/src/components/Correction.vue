<template>
    <div class="homepage">
      <!-- Small horizontal bar with text -->
      <div class="status-bar">
        <!-- Text with sliding transition -->
        <transition name="slide">
          <div class="status-text">HOW ARE YOU FEELING TODAY? <span class="mask-icon">😷</span></div>
        </transition>
      </div>
  
      <!-- Horizontal Header -->
      <header class="horizontal-header">
        <div class="logo">Doc<span class="logo-highlight">Sphere</span></div>
        <nav class="nav-links">
          <a href="#" class="nav-link">Services</a>
          <a href="#" class="nav-link">About</a>
          <a href="#" class="nav-link">Health Tips</a>
          <a href="#" class="nav-link">Login</a>
          <a href="#" class="nav-link">Register</a>
        </nav>
      </header>
      
      <!-- Main Content -->
      <!-- Add your main content here -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
    // Add your script logic here
  }
  </script>
  
  <style scoped>
  /* Small horizontal bar with text styles */
  .status-bar {
    background-color: #99cc99; /* Green background color */
    height: 30px; /* Adjust height as needed */
    display: flex;
    justify-content: flex-end;
    align-items: center;
    overflow: hidden; /* Hide overflow to clip text during transition */
  }
  
  /* Text with sliding transition styles */
  .status-text {
    color: #fff; /* White text color */
  }
  
  /* Slide transition animation */
  .slide-enter-active, .slide-leave-active {
    transition: all 0.5s; /* Adjust duration as needed */
  }
  
  .slide-enter, .slide-leave-to {
    transform: translateX(100%); /* Start offscreen to the right */
  }
  
  /* Horizontal Header Styles */
  .horizontal-header {
    position: fixed;
    top: 30px; /* Ensure header is below the status bar */
    left: 0;
    width: 100%;
    background-color: #66ccff; /* Light blue background color */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add shadow for depth */
    z-index: 1000; /* Ensure header stays on top */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px; /* Adjust padding as needed */
  }
  
  .logo {
    font-size: 1.5rem; /* Adjust size as needed */
    font-weight: bold;
    color: #0070f3; /* Deep blue color for logo name */
  }
  
  .logo-highlight {
    color: #008080; /* Muted teal color for 'Sphere' */
  }
  
  .nav-links {
    display: flex;
  }
  
  .nav-link {
    margin-left: 20px; /* Adjust spacing between links */
    color: #333; /* Dark gray color for links */
    text-decoration: none;
  }
  
  .nav-link:hover {
    background-color: #8ed6ff; /* Lighten background color when hovered */
    color: #000; /* Change text color when hovered */
  }
  </style>
  
<template>
    <div class="doctor-profile">
      <div class="profile-image">
        <p>Welcome</p>
        <figure>
          <img src="../assets/nosemask.jpg" class="doctor-img" alt="Doctor">
          <figcaption><b>Emmanuel Asamoah Adu</b></figcaption>
        </figure>
      </div>
      <div class="profile-details">
        <h2>{{ doctorName }}</h2>
        <div class="contact-info">
          <p>
            <span class="material-icons">phone</span>
            <span>{{ phoneNumber }}</span>
          </p>
          <p>
            <span class="material-icons">mail</span>
            <span>{{ email }}</span>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  
<script>
export default {
  name: 'Contact',
  data() {
    return {
      doctorImage: '../assets/Doctor.jpg',
      phoneNumber: '123-456-7890',
      email: 'christorenzo20@gmail.com',
    };
  },
};
</script>

<style>
.doctor-profile {
    display: flex;
    margin: 20px auto; /* Centered layout */
    border: 2px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
    background-color: #b2a7e9; /* Light background for better contrast */
    max-width: 600px; /* Optional: Set a maximum width */
  }
  
  .profile-image {
    margin-right: 20px;
  }
  
  .doctor-img {
    width: 100px;
    height: 100px;
    border-radius: 50%; /* Circular image */
    object-fit: cover; /* Ensure image fills the container */
  }
  
  .profile-details {
    flex: 1; /* Take up remaining space */
  }
  
  .profile-details h2 {
    margin: 0 0 10px 0; /* Spacing for name */
    font-size: 1.2rem; /* Adjust font size as needed */
  }
  
  .contact-info {
    display: flex;
    flex-direction: column; /* Stack contact details vertically */
  }
  
  .contact-info p {
    display: flex;
    margin-bottom: 5px;
    align-items: center; /* Align icons and text vertically */
  }
  
  .material-icons {
    font-size: 18px; /* Adjust icon size as needed */
    color: #999; /* Gray color for icons */
    margin-right: 5px; /* Spacing between icon and text */
  }
  
  /* Additional styling for readability */
  .contact-info span {
    font-weight: normal; /* Regular font weight */
  }
  
</style>

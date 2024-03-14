<template>
  <div class="doctor-info">
      <div class="img-info">
          <!-- Use semantic HTML -->
          <figure>
              <img src="../assets/Doctor.jpg" class="doctor-img" alt="Doctor">
              <figcaption>Doctor's Image</figcaption>
          </figure>
      </div>
      <div class="basic-info">
          <!-- Use appropriate semantic elements -->
          <div class="contact-info">
              <h5>Phone Number: <span>{{ phoneNumber }}</span></h5>
              <h5>Email: <span>{{ email }}</span></h5>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'DoctorInfo',
  data() {
      return {
          phoneNumber: '123-456-7890',
          email: 'doctor@example.com'
      };
  }
};
</script>

<style>
.doctor-info {
  display: flex;
  margin-left: 100px;
  /* Adjust as needed */
  border: 2px solid #ccc;
  margin-right: 400px;
  /* Border style */
  border-radius: 8px;
  /* Optional: for rounded corners */
  padding: 20px;
  box-shadow: 8px 0 0 -2px #ccc;
}

.img-info {
  margin-right: 20px;
  /* Adjust as needed */
}

.doctor-img {
  width: 100px;
  height: 100px;
}

.basic-info {
  display: flex;
}

/* Additional styling for better readability */
.contact-info h5 {
  margin: 5px 0;
}
</style>


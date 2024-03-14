<template>
    <div class="card">
        <img src="../assets/Doctor.jpg" :alt="altText">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <button ref="myButton" @mouseover="showCalendarPopup" @mouseleave="hideCalendar" class="btn">
            Book Appointment
            <span v-if="showCalendar" class="calendar-icon">
            </span>
        </button>
        <div class="calendar-container" v-if="showCalendar">
            <div :class="{'calendar-popup': 'true', 'active':'showCalender'}" :style="{ zIndex: 1000 }">
                <p>Select an appointment date:</p>
                <input type="date" v-model="selectedDate" @change="submitAppointment">
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'BlogCard',
    props: {
        imageSrc: {
            type: String,
            required: true,
        },
        altText: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            showCalendar: false,
            selectedDate: null,
        };
    },
    methods: {
        showCalendarPopup() {
            this.showCalendar = true;
            console.log('Calendar shown')
        },
        hideCalendar() {
            this.showCalendar = false;
            console.log("Calendar hidden");
        },
        submitAppointment() {
            alert('Appointment booked for ' + this.selectedDate);
            this.selectedDate = null; // Clear selected date after submission
        },
    },
};
</script>

  
<style>
.card {
    max-width: 300px;
    height: 300px;
    position: relative;
    padding: 12px;
    border-radius: 12px;
}

.card img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    margin-bottom: 1em;
    border-radius: 6px;
}

.card h2 {
    color: #1e1e1e;
    font-size: 16px;
}

.card p {
    color: #1e1e1e;
    font-size: 16px;
    margin-bottom: 10px;
}

.btn {
    width: 100%;
    padding: 16px;
    border: none;
    background: #1e1e1e;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.btn:hover {
    background-color: #3f4041;
    /* Darker shade of blue on hover */
}

.calendar-icon {
  font-family: FontAwesome; /* Assuming you're using Font Awesome */
  content: "\f073"; /* Font Awesome code for calendar icon */
  font-size: 14px;
  margin-left: 5px;
  color: #999;
}
.calendar-container {
    position: relative; /* Ensure absolute positioning is relative to this container */
}

.calendar-popup {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    border: 1px solid #ddd;
    padding: 10px;
    width: 200px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: none;
}

.calendar-popup.active {
    display: block;
}
</style>

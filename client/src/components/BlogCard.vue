<template>
    <div class="card">
        <img src="../assets/Doctor.jpg" :alt="altText">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <button class="btn">Book Appointment</button>
    </div>
</template>

<script>
export default {
    name: 'BlogCard',
    props: {
        imageSrc: {
            type: String,
            required: true
        },
        altText: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
}
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
</style>
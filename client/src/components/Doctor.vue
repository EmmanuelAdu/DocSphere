<template>
    <div>
        <h3><button class="discover-button">Search For Available Doctors</button></h3>
        <div class="Blogs">
            <BlogCard v-for="blog in Blogs" :key="blog.id" :imageSrc="blog.imageSrc" :altText="blog.altText"
                :title="blog.title" :description="blog.description" />
        </div>
    </div>
</template>

<script>
import BlogCard from './BlogCard.vue'

export default {
    name: 'Doctor',
    components: {
        BlogCard
    },
    data() {
        return {
            Blogs: [
                {
                    id: 1,
                    imageSrc: '',
                    altText: "MyImage",
                    title: "Psychiatrist",
                    description: "Dr. Jerome Agnes"
                },
                {
                    id: 2,
                    imageSrc: "../assets/Doctor.jpg",
                    altText: "MyImage",
                    title: "Physician",
                    description: "Dr. Selorm Magnus"
                },
                {
                    id: 3,
                    imageSrc: "../assets/Doctor.jpg",
                    altText: "MyImage",
                    title: "Nurse Practitioner",
                    description: "Dr. Ankrah Rosevim"
                },
                {
                    id: 4,
                    imageSrc: "../assets/Doctor.jpg",
                    altText: "MyImage",
                    title: "Speech Pathologists",
                    description: "Dr. Fred Winnerman"
                },
                {
                    id: 5,
                    imageSrc: "../assets/Doctor.jpg",
                    altText: "MyImage",
                    title: "Pharmacists",
                    description: "Dr. Joseph Sackey"
                },
                {
                    id: 6,
                    imageSrc: "../assets/Doctor.jpg",
                    altText: "MyImage",
                    title: "Dietitian",
                    description: "Dr.Lindsay Selman"
                }

            ]
        }
    }
}
</script>

<style>
.Blogs {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-left: 100px;
    background-color: rgb(193, 219, 219);
}

.discover-button {
  padding: 10px 20px;
  background-color: #646668; /* Blue color */
  color: #fff; /* White text */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.discover-button:hover {
  background-color: #0056b3; /* Darker shade of blue on hover */
}
</style>
<template>
    <div>
        <h3>Discover Your Available Doctors</h3>
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
                    title: "Psychatrist",
                    description: "Introduction to Vuejs"
                },
                {
                    id: 2,
                    imageSrc: "../assets/Doctor.jpg",
                    altText: "MyImage",
                    title: "Psychatrist",
                    description: "Introduction"
                },
                {
                    id: 3,
                    imageSrc: "../assets/Doctor.jpg",
                    altText: "MyImage",
                    title: "Psychatrist",
                    description: "Introduction to Vuejs"
                },
                {
                    id: 4,
                    imageSrc: "../assets/Doctor.jpg",
                    altText: "MyImage",
                    title: "Psychatrist",
                    description: "Introduction to Vuejs"
                },
                {
                    id: 5,
                    imageSrc: "../assets/Doctor.jpg",
                    altText: "MyImage",
                    title: "Psychatrist",
                    description: "Introduction to Vuejs"
                },
                {
                    id: 6,
                    imageSrc: "../assets/Doctor.jpg",
                    altText: "MyImage",
                    title: "Psychatrist",
                    description: "Introduction to Vuejs"
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
}
</style>
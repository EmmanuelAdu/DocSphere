/** Template for accessing team members info
 */

<template>
    <div class="team-member">
        <img src="../assets/PersonalPhoto.jpg" alt="[Emmanuel] profile picture" />
        <h3>Emmanuel Adu</h3>
        <p>Lead Developer</p>
        <ul class="social-links">
            <li v-if="[linkedin_url]">
                <a :href="[linkedin_url]" target="_blank">
                    <i class="fab fa-linkedin"></i>
                </a>
            </li>
            <li v-if="[github_url]">
                <a :href="[github_url]" target="_blank">
                    <i class="fab fa-github"></i>
                </a>
            </li>
            <li v-if="[twitter_url]">
                <a :href="[twitter_url]" target="_blank">
                    <i class="fab fa-twitter"></i>
                </a>
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    name: 'TeamMember',

    props: {
        name: String,
        role: String,
        linkedinUrl: String, // Use camelCase for props
        githubUrl: String,
        twitterUrl: String,
    },
};
</script>
  
<style scoped>
.team-member {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 20px;
}

.team-member img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
}

.team-member h3,
.team-member p {
    margin: 5px 0;
}

.social-links {
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
}

.social-links li {
    margin: 0 10px;
}

.social-links a {
    color: #000;
}

.social-links i {
    font-size: 20px;
}
</style>
  
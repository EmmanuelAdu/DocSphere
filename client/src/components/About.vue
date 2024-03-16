/** File Contains information related to the about page
 */

<template>
    <div>
        <Header />
        <section id="about" class="about">
            <div class="container">
                <h2>About Me</h2>
                <p>
                    My passion for backend development and health began 2 years ago after overcoming a health challenge.
                    I saw the potential of technology to empower individuals to manage their health and well-being, and I
                    was determined to be part of building solutions in this space.
                    Since then, I've honed my skills in Vue.js, building various projects and gaining valuable experience.
                    This
                    project serves as a portfolio piece for Holberton School, showcasing my capabilities in building
                    user-friendly and interactive web applications. You can find the project repository on Github <a
                        href="https://github.com/EmmanuelAdu/DocSphere/tree/main/client" target="_blank">here</a>.
                </p>
                <h3>Meet the Team</h3>
                <div class="team-members">
                    <TeamMember name="Emmanuel Asamoah Adu" role="Lead Developer"
                        linkedin="linkedin.com/in/emmanuel-adu-26751b259/" github="https://github.com/EmmanuelAdu"
                        twitter="https://twitter.com/adu_as10" />
                </div>
            </div>
        </section>
    </div>
</template>
  
<script>
import Header from './Header.vue' // Importing the Header for the page
import TeamMember from './TeamMember.vue'; // Importing info for all contributors

export default {
    name: 'About',

    components: {
        Header,
        TeamMember
    },
};
</script>
  
<style scoped>
.about {
    padding: 100px 0;
    text-align: center;
}

.about h2 {
    font-size: 3rem;
    margin-bottom: 20px;
}

.about p {
    font-size: 1.2rem;
    line-height: 1.5;
    margin-bottom: 40px;
}

.team-members {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 800px;
}

.team-members .team-member {
    margin: 20px;
    text-align: center;
}</style>
  
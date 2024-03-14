<template>
    <v-app-bar color="#dfe5ed" app dark flat class="navbar">
        <div class="navbar-content">
            <div class="flex items-center">
                <v-icon :style="{ 'fontSize': '36px' }" color="black">fas fa-long-arrow-alt-left</v-icon>
                <h4 class="black--text ml-3">Patient Info</h4>
            </div>
            <v-spacer></v-spacer>
            <div class="patient-history">
                <div class="appoint flex items-center">
                    <h4 :style="{ 'color': '#66D3FA', 'marginRight': '2.5px' }" class="blue--text text--lighten-2">Appointments history</h4>
                    <v-icon :style="{ 'marginRight': '10px' }" x-small color="#2784FF" class="ml-2 mr-2">fas
                        fa-caret-down</v-icon>
                    <v-btn color="#2784FF" class="withoutupercase" text>
                        <v-icon left class="white--text">fas fa-plus</v-icon>New Patient
                    </v-btn>
                </div>
                <v-badge dot color="green" class="ml-3 mr-2" dark>
                    <v-avatar tile color="#E5F1FF">
                        <v-icon color="#2784FF" class="icon-center">fas fa-bell</v-icon>
                    </v-avatar>
                </v-badge>

            </div>
        </div>
    </v-app-bar>
</template>
  
<script>
export default {
    name: 'Navbar'
}
</script>
  
<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 100px !important;
    top: 0 !important;
    position: sticky;
}

.navbar-content {
    display: flex;
    align-items: center;
}

.appoint {
    margin-right: 10px;
}

.patient-history {
    display: flex;
    margin-left: 700px;/* Push .patient-history to the far right */
}
.icon-center {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}
</style>


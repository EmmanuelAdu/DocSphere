<template>
    <v-navigation-drawer v-model="drawer" app color="#81878f" mini-variant mini-variant-width="80" style="position: fixed; top: 0; left: 0;">
        <v-avatar class="d-block text-center mx-auto mt-4 mb-4" color="" size="40">
            <v-icon :style="{ 'marginLeft': '20px', 'color': 'white !important' }" x-large>fab fa-artstation</v-icon>
        </v-avatar>
        <v-list flat class="flex-column">
            <v-list-item-group v-model="selectedItem">
                <v-list-item v-for="(item, i) in items" :key="i" active-class="border" :ripple="false" class="icon-item">
                    <v-list-item-icon>
                        <v-icon :style="{ 'fontSize': '36px', 'color': 'white !important' }" v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                </v-list-item>
            </v-list-item-group>
        </v-list>
        <div style="position: absolute; bottom: 20px; left: 0; right: 0; text-align: center;">
            <v-icon :style="{ 'fontSize': '25px', 'color': 'white !important' }" class="mb-2">fas fa-cog</v-icon>
            <v-icon :style="{ 'fontSize': '25px', 'color': 'white !important' }">fas fa-info-circle</v-icon>
        </div>
    </v-navigation-drawer>
</template>
  
<script>
export default {
    name: 'SideBar',
    data: () => ({
        selectedItem: 3,
        drawer: null,
        items: [
            { icon: "fas fa-user-nurse" },
            { icon: "fas fa-file-medical-alt" },
            { icon: "fas fa-virus" },
            { icon: "fas fa-user-md" },
            { icon: "fas fa-comment-medical" },
        ],
    }),
}
</script>
  
<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}


.border {
    margin-left: 12px;
    margin-right: 12px;
    background: #181818;
    border-radius: 50%;
    text-decoration: none;
}

.v-list-item-group .v-list-item--active {
    color: white !important;
}

.icon-item {
    margin-top: 16px;
    margin-bottom: 16px;
}

.flex-column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    /* Make the list fill the drawer height */
}</style>
  
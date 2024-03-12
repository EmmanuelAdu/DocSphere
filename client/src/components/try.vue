<template>
    <v-navigation-drawer v-model="drawer" appcolor="#2784FF" mini-variantmini-variant-width="80">
        <v-avatar class="d-block text-center mx-auto mt-4 mb-16" color="" size="40">
            <v-icon color="white" x-large>fab fa-artstation</v-icon>
        </v-avatar>
        <v-list flat class="mt-16">
            <v-list-item-group v-model="selectedItem">
                <v-list-item v-for="(item, i) in items" :key="i" active-class="border" :ripple="false">
                    <v-list-item-icon>
                        <v-icon v-text="item.icon" color="white"></v-icon>
                    </v-list-item-icon>
                </v-list-item>
            </v-list-item-group>
        </v-list>
        <div style="position: absolute; bottom: 20px; margin-left: auto; margin-right: auto; left: 0; right: 0; text-align: center;">
            <v-icon class="mb-5" color="white">fas fa-cog</v-icon>
            <br />
            <v-icon color="white">fas fa-info-circle</v-icon>
        </div>
    </v-navigation-drawer>
</template>
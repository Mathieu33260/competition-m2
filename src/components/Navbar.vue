<template>
    <div style="position: fixed; top: 0; z-index: 100; background-color: white">
        <b-row>
            <b-col cols="12" style="background-color: #65FFF9" class="p-2">

                <b-row class="d-flex justify-content-end">
                    <b-col cols="4" class="d-flex justify-content-end">
                        <div>
                            <img src="../assets/clock.svg" draggable="false" class="mr-2" style="color: black">
                            <b>
                                Le musée est ouvert de 11h à 19h aujourd’hui
                            </b>
                        </div>
                    </b-col>

                    <b-col cols="4" class="d-flex justify-content-end" style="margin-right: 100px;">
                        <div style="margin-left: 42px">
                            Vous êtes
                        </div>
                        <div style="margin-left: 42px">
                            Rechercher
                        </div>
                        <div style="margin-left: 42px">
                            EN|<b>FR</b>
                        </div>
                    </b-col>
                </b-row>

            </b-col>

            <b-col cols="6" style="border-right: 10px solid #65FFF9; height: 150px" class="d-flex align-items-center">
                <img src="./../assets/logocentre.png" style="height: 80px; margin-left: 140px; cursor: pointer"
                     @click="$router.push('/')"
                />
            </b-col>

            <b-col cols="6">
                <div class="d-flex flex-column" style="margin-right: 100px">

                    <div class="d-flex justify-content-end" style="margin-top: 60px">
                        <div style="margin-left: 42px">
                            <b style="cursor: pointer" @click="$router.push('/expo')">Expositions</b>
                        </div>
                        <div style="margin-left: 42px">
                            <b style="cursor: pointer" @click="visite = !visite">Visite</b>
                            <div v-if="visite" class="mt-2 pt-2 pl-2" style="background-color: white; border-top: 5px solid #65FFF9; border-left: 5px solid #65FFF9; position: absolute">
                                <div style="cursor: pointer" @click="changePage('/visite')">
                                    Visite immersive
                                </div>
                                <div style="cursor: pointer" @click="changePage('/virtuelle')" class="mt-2">
                                    Visite virtuelle
                                </div>
                                <div style="cursor: pointer" @click="changePage('/infos')" class="mt-2">
                                     Tarifs
                                </div>
                                <div style="cursor: pointer" class="mt-2">
                                    Accessibilité
                                </div>
                            </div>
                        </div>
                        <div style="margin-left: 42px">
                            <b style="cursor: pointer" @click="$router.push('/centre')">Le Centre</b>
                        </div>
                        <div style="margin-left: 42px;">
                            <b style="background-color: #65FFF9; border-right: 4px solid #65FFF9; border-top: 4px solid #65FFF9;">Billetterie</b>
                        </div>
                    </div>

                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: "Navbar",

        data() {
            return {
                visite: false,
            }
        },

        methods: {
            changePage(page) {
                this.visite = !this.visite;
                this.$router.push(page);
            }
        }
    }
</script>

<style scoped>

</style>

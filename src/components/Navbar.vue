<template>
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

        <b-col cols="6" style="border-right: 10px solid #65FFF9;">
            <img src="./../assets/logocentre.png" style="height: 80px; margin-left: 140px; margin-top: 50px; cursor: pointer"
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
                        <b style="cursor: pointer" @click="$router.push('/visite')">Visite</b>
                    </div>
                    <div style="margin-left: 42px">
                        <b style="cursor: pointer" @click="$router.push('/centre')">Le Centre</b>
                    </div>
                    <div style="margin-left: 42px">
                        <b style="background-color: #65FFF9">Billeterie</b>
                    </div>
                </div>

            </div>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        name: "Navbar",

        methods: {

        }
    }
</script>

<style scoped>

</style>

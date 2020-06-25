<template>
    <div>

        <b-row class="mt-5">
            <b-col cols="12" class="mt-5">
                <img src="../assets/visite.png" draggable="false" style="width: 100%"/>
            </b-col>
        </b-row>

        <b-row class="d-flex justify-content-center">
            <b-col cols="7" style="height: 200px; border-right: 10px solid #65FFF9;">

            </b-col>
        </b-row>

        <b-row>
            <b-col cols="6" class="d-flex justify-content-center">

                <div style="width: 80%">
                    <div style="font: Bold 20px/22px Gotham;" class="mt-4">
                        Des lunettes connectées, pour une immersion totale dans l’univers de l’artiste
                    </div>

                    <div class="mt-4" style="font-size: 80%">
                        Disponible depuis peu, découvrez les lunettes connectées à travers une expérience immersive. Que vous soyez seul ou en groupe, les lunettes sont faites pour vous.
                        Les lunettes connectées fonctionnent en réalité augmentée, c’est à dire que des éléments visuels viennent se superposer avec la réalité. Il est possible d’interagir avec les lunettes pour poser des questions sur les oeuvres présentes sur place ou sur un artiste en particulier. A la manière d’un guide lors d’une visite en musée, vous en apprendrez beaucoup sur les oeuvres de l’exposition et sur la démarche entreprise par les différents artistes.
                        (a dupliquer pour combler l’espace)
                    </div>

                    <div class="mt-5 d-flex flex-column justify-content-between" style="width: 60%; height: 50%; border-left: 10px solid #65FFF9;">
                        <input type="button" style="background-color: #65FFF9; width: 100%; font: Bold 16px Gotham; border: 0; height: 40px; padding-top: 10px" value="Essayer l’expérience immersive">
                        <div class="ml-1" style="font: Bold 16px/22px Gotham;">
                            2 options pour un confort maximal
                        </div>
                    </div>
                </div>

            </b-col>

            <b-col cols="6" class="d-flex justify-content-center">
                <div style="width: 90%;">
                    <img src="../assets/videovisite.png" style="width: 100%; height: auto"/>
                </div>
            </b-col>
        </b-row>

        <b-row style="margin-top: 100px">
            <b-col cols="12" class="mt-5">
                <img src="../assets/visiteend.png" draggable="false" style="width: 100%" class="mt-5"/>
            </b-col>
        </b-row>

        <b-row>
            <b-col cols="6" style="height: 200px; border-right: 10px solid #65FFF9;">

            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: "Visite",
        created() {
            this.$store.commit('setIsSonar', false);
        },
    }
</script>

<style scoped>

</style>

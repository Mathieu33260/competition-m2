<template>
    <div>

        <b-row style="margin-top: 100px">
            <b-col cols="8" style="padding-right: 0;">
                <img @click="$router.push('/expo/1')" src="../assets/chelou2.png" draggable="false" style="width: 100%; user-focus: none;"/>
            </b-col>

            <b-col cols="4" style="padding-left: 0;">
                <img src="../assets/fev2021.png" draggable="false" style="width: 30%; margin-top: 80px"/>
                <b-row class="d-flex align-content-center" style="margin-top: 50px">
                    <b-col cols="2" style="border-top: 10px solid #65FFF9; margin-left: 15px; margin-top: 10px">

                    </b-col>

                    <b-col cols="9" >
                        <div class="mb-3">
                            <b>Cyrus Kabiru</b>
                        </div>

                        <div style="font-size: 80%">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                        </div>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>

        <b-row class="ml-5 mr-5 d-flex justify-content-end">
            <b-col cols="9" style="height: 200px; border-right: 10px solid #65FFF9; margin-right: 15px">

            </b-col>
        </b-row>


        <b-row class="mt-5 ml-5 mr-5 d-flex justify-content-between">
            <b-col cols="4" class="d-flex flex-column justify-content-between p-5" style="background-color: #65FFF9">
                <b class="mt-3" style="color: white">#<span style="font: Bold 20px/22px Gotham; color: black">À Venir</span></b>
                <img src="../assets/alexander-andrews--Bq3TeSBRdE-unsplash.png" style="width: 100%; height: auto">
                <b class="mt-3" style="color: white">#<span style="font: Bold 20px/22px Gotham;">Redécouvrir</span></b>
                <div class="mt-3" style="font: Bold 20px/22px Gotham;">
                    L'espace
                </div>
                <div class="mt-3">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </div>
                <input @click="$router.push('/expo/1')" class="mt-3" type="button" style="background-color: white; width: 50%; font: Bold 16px Gotham; border: 0; height: 40px; padding-top: 10px" value="Découvrir">
            </b-col>

            <b-col cols="4" class="d-flex flex-column justify-content-between p-5">
                <b class="mt-3" style="color: #65FFF9">#<span style="font: Bold 20px/22px Gotham; color: black">ExpositionsPassées</span></b>
                <img src="../assets/Legendes_urbainesph_F_Deval_34_format_a5.png" style="width: 100%; height: auto">
                <b class="mt-3" style="color: #65FFF9">#<span style="font: Bold 20px/22px Gotham; color: #C4C4C4;">Redécouvrir</span></b>
                <div class="mt-3" style="font: Bold 20px/22px Gotham;">
                    Visite virtuelle de l'exposition
                </div>
                <div class="mt-3">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </div>
                <input @click="$router.push('/virtuelle')" class="mt-3" type="button" style="background-color: #65FFF9; width: 50%; font: Bold 16px Gotham; border: 0; height: 40px; padding-top: 10px" value="Découvrir">
            </b-col>

            <b-col cols="4" class="d-flex flex-column justify-content-end p-5">
                <img src="../assets/baloji-ouve.png" style="width: 100%; height: auto">
                <b class="mt-3" style="color: #65FFF9">#<span style="font: Bold 20px/22px Gotham; color: #C4C4C4;">Redécouvrir</span></b>
                <div class="mt-3" style="font: Bold 20px/22px Gotham;">
                    Baloji
                </div>
                <div class="mt-3">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </div>
                <input @click="$router.push('/expo/1')" class="mt-3" type="button" style="background-color: #65FFF9; width: 50%; font: Bold 16px Gotham; border: 0; height: 40px; padding-top: 10px" value="Découvrir">
            </b-col>
        </b-row>

        <b-row class="mt-5 ml-5 mr-5 d-flex justify-content-between">
            <b-col cols="4" class="d-flex flex-column justify-content-end p-5">
                <img src="../assets/Legendes_urbainesph_F_Deval_34_format_a5.png" style="width: 100%; height: auto">
                <b class="mt-3" style="color: #65FFF9">#<span style="font: Bold 20px/22px Gotham; color: #C4C4C4;">Redécouvrir</span></b>
                <div class="mt-3" style="font: Bold 20px/22px Gotham;">
                    Visite virtuelle de l'exposition
                </div>
                <div class="mt-3">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </div>
                <input class="mt-3" type="button" style="background-color: #65FFF9; width: 50%; font: Bold 16px Gotham; border: 0; height: 40px; padding-top: 10px" value="Découvrir">
            </b-col>

            <b-col cols="4" class="d-flex flex-column justify-content-end p-5">
                <img src="../assets/Legendes_urbainesph_F_Deval_34_format_a5.png" style="width: 100%; height: auto">
                <b class="mt-3" style="color: #65FFF9">#<span style="font: Bold 20px/22px Gotham; color: #C4C4C4;">Redécouvrir</span></b>
                <div class="mt-3" style="font: Bold 20px/22px Gotham;">
                    Visite virtuelle de l'exposition
                </div>
                <div class="mt-3">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </div>
                <input class="mt-3" type="button" style="background-color: #65FFF9; width: 50%; font: Bold 16px Gotham; border: 0; height: 40px; padding-top: 10px" value="Découvrir">
            </b-col>

            <b-col cols="4" class="d-flex flex-column justify-content-end p-5">
                <img src="../assets/Legendes_urbainesph_F_Deval_34_format_a5.png" style="width: 100%; height: auto">
                <b class="mt-3" style="color: #65FFF9">#<span style="font: Bold 20px/22px Gotham; color: #C4C4C4;">Redécouvrir</span></b>
                <div class="mt-3" style="font: Bold 20px/22px Gotham;">
                    Visite virtuelle de l'exposition
                </div>
                <div class="mt-3">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </div>
                <input class="mt-3" type="button" style="background-color: #65FFF9; width: 50%; font: Bold 16px Gotham; border: 0; height: 40px; padding-top: 10px" value="Découvrir">
            </b-col>
        </b-row>

        <div class="d-flex justify-content-center mt-5">
            <div>
                <input class="mt-5" type="button" style="background-color: #65FFF9; width: 250px; font: Bold 16px Gotham; border: 0; height: 40px; padding-top: 10px" value="Voir toutes les expositions">
                <b-row>
                    <b-col cols="6" style="border-right: 5px solid #65FFF9; height: 50px">

                    </b-col>

                    <b-col cols="6" style="border-left: 5px solid #65FFF9; height: 50px">

                    </b-col>
                </b-row>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Expositions"
    }
</script>

<style scoped>

</style>

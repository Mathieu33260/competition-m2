<template>
    <div>
        <b-row>
            <b-col cols="12">
                <img src="../assets/line.png" style="width: 100%">
            </b-col>
        </b-row>

        <b-row>
            <b-col cols="6" class="d-flex flex-column justify-content-around p-5">
                <div style="font: Bold 20px/22px Gotham;">
                    Préparer sa visite
                </div>

                <div>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </div>

                <input type="button" style="background-color: #65FFF9; width: 30%; font: Bold 16px Gotham; border: 0; height: 40px; padding-top: 10px" value="Billeterie">
            </b-col>

            <b-col cols="6">
                <div style="width: 90%;">
                    <img src="../assets/infos.png" style="width: 100%">
                </div>
            </b-col>
        </b-row>

        <b-row>
            <b-col cols="10" class="d-flex align-items-end">
                <div style="font: Bold 20px/22px Gotham;" class="ml-5">
                    Tarif
                </div>
            </b-col>

            <b-col cols="2" style="height: 200px; border-left: 10px solid #65FFF9;">

            </b-col>
        </b-row>

        <b-row>
            <b-col cols="8">
                <b-row class="ml-5">
                    <b-col style="border: 1px solid #65FFF9" class="pt-3 pl-0 pr-0 d-flex flex-column justify-content-between">
                        <div style="font: Bold 16px/22px Gotham;" class="text-center mt-2">
                            Plein tarif
                        </div>

                        <div class="text-center pt-2 pb-2" style="border-top: 1px solid #65FFF9">
                            13,50€
                        </div>
                    </b-col>

                    <b-col style="border: 1px solid #65FFF9" class="pt-3 pl-0 pr-0 d-flex flex-column justify-content-between">
                        <div style="font: Bold 16px/22px Gotham;" class="text-center">
                            Tarif Famille
                        </div>

                        <div style="font-size: 80%" class="text-center">
                            <span>2 adultes</span> + <span>2 enfants</span>
                        </div>

                        <div class="text-center pt-2 pb-2" style="border-top: 1px solid #65FFF9">
                            40€
                        </div>
                    </b-col>

                    <b-col style="border: 1px solid #65FFF9" class="pt-3 pl-0 pr-0 d-flex flex-column justify-content-between">
                        <div style="font: Bold 16px/22px Gotham;" class="text-center">
                            Tarif Jeune
                        </div>

                        <div style="font-size: 80%" class="text-center">
                            -25 ans
                        </div>

                        <div class="text-center pt-2 pb-2" style="border-top: 1px solid #65FFF9">
                            9€
                        </div>
                    </b-col>

                    <b-col style="border: 1px solid #65FFF9" class="pt-3 pl-0 pr-0 d-flex flex-column justify-content-between">
                        <div style="font: Bold 16px/22px Gotham;" class="text-center mt-2">
                            Tarif Réduit
                        </div>

                        <div style="font-size: 80%" class="text-center m-2">
                            Demandeur d'emploi, étudiant, carte d'invalidité...
                        </div>

                        <div class="text-center pt-2 pb-2" style="border-top: 1px solid #65FFF9">
                            11€
                        </div>
                    </b-col>

                    <b-col style="border: 1px solid #65FFF9" class="pt-3 pl-0 pr-0 d-flex flex-column justify-content-between">
                        <div style="font: Bold 16px/22px Gotham;" class="text-center">
                            Tarif Sénior
                        </div>

                        <div style="font-size: 80%" class="text-center">
                            65 ans et plus
                        </div>

                        <div class="text-center pt-2 pb-2" style="border-top: 1px solid #65FFF9">
                            12,50€
                        </div>
                    </b-col>
                </b-row>
                <div class="ml-5" style="height: 200px; border-left: 10px solid #65FFF9">

                </div>

                <div class="ml-5 mt-5 mb-5" style="font: Bold 20px/22px Gotham;">
                    Se rendre au Centre
                </div>
            </b-col>

            <b-col cols="4">
                <div style="width: 90%;">
                    <img src="../assets/immersivebleu.png" style="width: 100%">
                </div>
            </b-col>
        </b-row>

        <b-row>
            <b-col cols="8" class="pr-0">
                <GmapMap
                        :center="{lat:44.870659, lng:-0.558953}"
                        :zoom="15"
                        map-type-id="terrain"
                        style="width: 100%; height: 600px"
                        :options="{
                           backgroundColor: 'black'
                         }"
                >

                </GmapMap>
            </b-col>

            <b-col cols="4" class="pl-5">

                <div class="d-flex flex-column justify-content-around pt-5 pb-5">

                    <div style="font: Bold 20px/26px Gotham;">
                        En transport en commun
                    </div>
                    <div class="d-flex justify-content-start">
                        <div style="font-size: 80%">
                            Tram B : arrêt La Cité du vin <br>
                            TRAM C : arrêt Ravezies <br>
                            V3 : station Lucien Faure <br>
                            Bus : arrêt Latule liane 9 et 32
                        </div>
                    </div>

                </div>

                <div class="d-flex flex-column justify-content-around pt-5 pb-5">

                    <div style="font: Bold 20px/26px Gotham;">
                        En voiture
                    </div>
                    <div class="d-flex justify-content-start">
                        <div style="font-size: 80%">
                            Base sous-marine <br>
                            Boulevard Alfred Daney <br>
                            33300 Bordeaux <br><br>
                            Parking gratuit sur place
                        </div>
                    </div>

                </div>

                <div class="d-flex flex-column justify-content-around pt-5 pb-5">

                    <div style="font: Bold 20px/26px Gotham;">
                        À pied
                    </div>
                    <div class="d-flex justify-content-start">
                        <div style="font-size: 80%">
                            Depuis arrêt Cité du Vin : longer les quais lawton puis Hériot <br>
                            15 mn de marche à prévoir
                        </div>
                    </div>

                </div>

            </b-col>
        </b-row>

        <b-row class="d-flex justify-content-center">
            <b-col cols="6" style="height: 200px; border-right: 10px solid #65FFF9;">

            </b-col>
        </b-row>


    </div>
</template>

<script>
    export default {
        name: "InfosPratique"
    }
</script>

<style scoped>

</style>

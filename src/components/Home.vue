<template>
    <div style="margin-top: 150px">
        <b-row>
            <b-col cols="6">
                <img src="../assets/home1.png" draggable="false" style="width: 100%; margin-top: 40px;">
                <div class="d-flex justify-content-end" style="margin-top: 30px;">
                    <img src="../assets/clock.svg" draggable="false" class="mr-2">
                    <b>Le musée est ouvert de 11h à 19h aujourd’hui</b>
                </div>
            </b-col>

            <b-col cols="6">
                <img src="../assets/home2.png" draggable="false" style="width: 90%;">
            </b-col>
        </b-row>

        <b-row style="height: 250px; margin-top: 100px">
            <b-col cols="6" style="border-right: 10px solid #65FFF9">

            </b-col>

            <b-col cols="6">

            </b-col>
        </b-row>

        <b-row>
            <b-col cols="8" style="padding-right: 0;">
                <img src="../assets/chelou2.png" draggable="false" style="width: 100%; user-focus: none;"/>
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

        <b-row style="position:relative; height: 250px">
            <b-col cols="8" class="d-flex justify-content-end">
                <b class="align-self-end" style="font: Bold 60px Gotham; line-height: 60px">Dernières actualités</b>
            </b-col>

            <b-col cols="3" style="border-right: 10px solid #65FFF9; border-bottom: 10px solid #65FFF9; bottom: 15%; height: 110%; margin-right: 30px;">

            </b-col>
        </b-row>

        <b-row>
            <b-col cols="4">

            </b-col>

            <b-col cols="4">

            </b-col>

            <b-col cols="4">

            </b-col>
        </b-row>
    </div>
</template>

<script>
    import Slide from "./Slide";
    import Infos from "./Infos";
    export default {
        name: "Home",
        components: {Infos, Slide}
    }
</script>

<style scoped>

</style>

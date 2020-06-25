<template>
    <div>
        <b-row class="mt-5">

            <b-col cols="6" class="d-flex flex-column justify-content-around p-5">
                <div style="font: Bold 20px/22px Gotham;">
                    Vous n’avez pas eu la chance de vous déplacer ?<br>
                    Découvrez ou re-découvrez l’exposition en ligne !
                </div>

                <div>
                    Disponible depuis peu, les visites virtuelles vous permettent de découvrir ou de redécouvrir d’anciennes expositions. Une fois que l’exposition physique est terminée, une visite virtuelle de cette dernière est disponible en ligne. Une reconstitution de la salle d’exposition est faite en se basant sur l’organisation de l’exposition sur le site physique.
                </div>

                <div class="mt-5 d-flex flex-column justify-content-between" style="width: 60%; height: 200px; border-left: 10px solid #65FFF9;">
                    <input @click="$router.push('/expo/1')" type="button" style="background-color: #65FFF9; width: 100%; font: Bold 16px Gotham; border: 0; height: 40px; padding-top: 10px" value="Découvrir la dernière exposition">
                </div>
            </b-col>

            <b-col cols="6">
                <img src="../assets/visitevirtuelletext.png" style="width: 60%"/>
                <iframe src="https://app.lapentor.com/sphere/exposition-virtuelle" frameborder="0" width="100%" height="400px" scrolling="no" allow="vr,gyroscope,accelerometer" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true"></iframe>
            </b-col>
        </b-row>

        <b-row>
            <b-col cols="12" class="d-flex align-items-end">
                <div style="font: Bold 20px/22px Gotham;" class="ml-5">
                    Les expositions en ligne
                </div>
            </b-col>
        </b-row>

        <b-row class="ml-5 mr-5 d-flex justify-content-between">
            <b-col cols="4" class="d-flex flex-column justify-content-between p-5">
                <img src="../assets/Legendes_urbainesph_F_Deval_34_format_a5.png" style="width: 100%; height: auto">
                <b class="mt-3" style="color: #65FFF9">#<span style="font: Bold 20px/22px Gotham; color: #C4C4C4;">Juin 2018</span></b>
                <div class="mt-3" style="font: Bold 20px/22px Gotham;">
                    Légendes Urbaines
                </div>
                <div class="mt-3">
                    Dans le cadre de la 3e Saison Street Art organisée par la Ville de Bordeaux, la Base sous-marine de Bordeaux accueille, du 21 juin au 16 septembre 2018, l’exposition Légendes Urbaines. A cette occasion, le commissariat a été confié à Nicolas Laugero Lasserre, directeur de l’ICART et président-fondateur d’Artistik Rezo et Pierre H. Lecaroz, président-fondateur de l’association Pôle Magnetic à Bordeaux.
                </div>
                <input @click="$router.push('/expo/1')" class="mt-3" type="button" style="background-color: #65FFF9; width: 50%; font: Bold 16px Gotham; border: 0; height: 40px; padding-top: 10px" value="Découvrir">
            </b-col>

            <b-col cols="4" class="d-flex flex-column justify-content-between p-5">
                <img src="../assets/rivages-2.png" style="width: 100%; height: auto">
                <b class="mt-3" style="color: #65FFF9">#<span style="font: Bold 20px/22px Gotham; color: #C4C4C4;">Juin 2019</span></b>
                <div class="mt-3" style="font: Bold 20px/22px Gotham;">
                    Rivages et Vertigo
                </div>
                <div class="mt-3">
                    Dans le cadre de la saison culturelle Liberté ! Du siècle des Lumières à l’esprit océan, la Base sous-marine présente une exposition diptyque portant un double regard sur la mer et les rivages et tissant un dialogue entre les photographies issues de la série « Rivages » d’Harry Gruyaert, pionnier de la photographie couleur de l’agence Magnum, et l’installation vidéo, « Vertigo Sea », de l’artiste et réalisateur ghanéo-britannique John Akomfrah
                </div>
                <input @click="$router.push('/expo/1')" class="mt-3" type="button" style="background-color: #65FFF9; width: 50%; font: Bold 16px Gotham; border: 0; height: 40px; padding-top: 10px" value="Découvrir">
            </b-col>

            <b-col cols="4" class="d-flex flex-column justify-content-between p-5">
                <img src="../assets/base-sous-marine-bordeaux-clement-cogitore.png" style="width: 100%; height: auto">
                <b class="mt-3" style="color: #65FFF9">#<span style="font: Bold 20px/22px Gotham; color: #C4C4C4;">Octobre 2019</span></b>
                <div class="mt-3" style="font: Bold 20px/22px Gotham;">
                    Clément Cogitoire
                </div>
                <div class="mt-3">
                    Cette exposition monographique de l’artiste et cinéaste français Clément Cogitore est exclusivement dédiée à son travail vidéo et filmique. Si le film reste son medium de prédilection, la pratique artistique de Clément Cogitore aborde également la photographie, l’installation et la mise en scène.
                </div>
                <input @click="$router.push('/expo/1')" class="mt-3" type="button" style="background-color: #65FFF9; width: 50%; font: Bold 16px Gotham; border: 0; height: 40px; padding-top: 10px" value="Découvrir">
            </b-col>
        </b-row>

        <b-row class="ml-5 mr-5 d-flex justify-content-end">
            <b-col cols="8" style="height: 100px; border-right: 10px solid #65FFF9; margin-right: 15px">

            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: "Virtuelle",
        created() {
            this.$store.commit('setIsSonar', false);
        },
    }
</script>

<style scoped>

</style>

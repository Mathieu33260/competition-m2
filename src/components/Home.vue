<template>
    <div>
        <b-row class="mt-5">
            <b-col cols="6">
                <img src="../assets/home1.png" draggable="false" style="width: 100%; margin-top: 40px;">
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
                <img src="../assets/chelou2.png" draggable="false" style="width: 100%; user-focus: none;" @click="$router.push('/expo/1')"/>
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

                        <div style="font-size: 80%; background-color: white">
                            Né en 1984 à Nairobi, où il vit et travaille, Cyrus Kabiru est un plasticien autodidacte pluridisciplinaire. Son travail oscille entre peinture et sculpture, qu’il réalise principalement à partir de déchets et d’objets trouvés dans les rues de Nairobi.
                            Sa série de lunettes sculpturales C-Stunners lui a permis en 2011 d’attirer l’attention du monde de l’art et du design. Depuis cette dernière série, Cyrus Kabiru ne cesse de repousser les limites de la sculpture, du design, de la peinture et de la photographie.
                            Il a participé à de nombreuses foires, expositions individuelles et collectives, notamment en Afrique du Sud. Il fait partie de Kuona Trust, centre d’art visuel basé à Nairobi et participe à de nombreuses initiatives auprès des communautés locales.
                        </div>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>

        <b-row style="position:relative; height: 250px" class="mb-5">
            <b-col cols="8" class="d-flex justify-content-end">
                <b class="align-self-end" style="font: Bold 60px Gotham; line-height: 150px">Dernières actualités</b>
            </b-col>

            <b-col cols="3" style="z-index: -100; border-right: 10px solid #65FFF9; border-bottom: 10px solid #65FFF9; bottom: 35%; height: 110%; margin-right: 30px;">

            </b-col>
        </b-row>

        <b-row class="mt-5 ml-5 mr-5 d-flex justify-content-between">
            <b-col cols="3" class="d-flex flex-column justify-content-between">
                <img src="../assets/Legendes_urbainesph_F_Deval_34_format_a5.png" style="width: 100%; height: auto">
                <b class="mt-3" style="color: #65FFF9">#<span style="font: Bold 20px/22px Gotham; color: #C4C4C4;">Redécouvrir</span></b>
                <div class="mt-3" style="font: Bold 20px/22px Gotham;">
                    Légendes urbaines
                </div>
                <div class="mt-3">
                    Dans le cadre de la 3e saison street art organisée par la ville de bordeaux, la base sous-marine accueille, jusqu’au 16 septembre 2018, l’exposition légendes urbaines. Une plongée dans l’art urbain à travers des œuvres d’artistes reconnus ou émergents
                </div>
                <input @click="$router.push('/virtuelle')" class="mt-3" type="button" style="background-color: #65FFF9; width: 50%; font: Bold 16px Gotham; border: 0; height: 40px; padding-top: 10px" value="Découvrir">
            </b-col>

            <b-col cols="3" class="d-flex flex-column justify-content-between">
                <img src="../assets/baloji-ouve.png" style="width: 100%; height: auto">
                <b class="mt-3" style="color: #65FFF9">#<span style="font: Bold 20px/22px Gotham; color: #C4C4C4;">ZoomSur</span></b>
                <div class="mt-3" style="font: Bold 20px/22px Gotham;">
                    Baloji
                </div>
                <div class="mt-3">
                    Aujourd’hui, Baloji en est à son troisième album, "137 Avenue Kaniama", voyage au travers des styles qu’il affectionne et ne cesse d’explorer, entre musique traditionnelle africaine et musique afro-américaine (hip-hop, soul, funk, jazz). Il était évident pour nous d’aller à sa rencontre pour parler création artistique, double culture et rap.
                </div>
                <input @click="$router.push('/expo/1')" class="mt-3" type="button" style="background-color: #65FFF9; width: 50%; font: Bold 16px Gotham; border: 0; height: 40px; padding-top: 10px" value="Découvrir">
            </b-col>

            <b-col cols="3" class="d-flex flex-column justify-content-between">
                <img src="../assets/Digital_Abysses_Ph_F_Deval_55_format_a5.png" style="width: 100%; height: auto">
                <b class="mt-3" style="color: #65FFF9">#<span style="font: Bold 20px/22px Gotham; color: #C4C4C4;">Immersion</span></b>
                <div class="mt-3" style="font: Bold 20px/22px Gotham;">
                    Visite virtuelles
                </div>
                <div class="mt-3">
                    Disponible depuis peu, les visites virtuelles vous permettent de découvrir ou de redécouvrir d’anciennes expositions.
                </div>
                <input @click="$router.push('/visite')" class="mt-3" type="button" style="background-color: #65FFF9; width: 50%; font: Bold 16px Gotham; border: 0; height: 40px; padding-top: 10px" value="Découvrir">
            </b-col>
        </b-row>

        <b-row class="ml-5">
            <b-col cols="12">
                <div style="border-left: 10px solid #65FFF9; height: 150px">

                </div>
            </b-col>
        </b-row>

        <b-row>
            <b-col cols="6">
                <img src="../assets/espace_dexposition_ph_F_.deval_0_format_a5.png" style="width: 100%"/>
            </b-col>

            <b-col cols="6" class="d-flex flex-column justify-content-center" >
                <div>
                    <div style="font: Bold 60px/66px Gotham;">
                        Préparer sa visite au Centre
                    </div>
                    <div class="mb-3">
                        <span style="color: #65FFF9">01.</span> <b>Réserver ses billets en ligne</b>
                    </div>
                    <div class="mb-3">
                        <span style="color: #65FFF9">02.</span> <b>Choisir l’option classique, groupe et/ou immersive (lunettes connectées)</b>
                    </div>
                    <div class="mb-3">
                        <span style="color: #65FFF9">03.</span> <b>Profiter du cadre insolite du musée et de l’exposition</b>
                    </div>
                    <div class="mb-5">
                        <span style="color: #65FFF9">04.</span> <b>Redécouvrir plus tard l’exposition virtuelle en ligne</b>
                    </div>
                    <div style="width: 20%; height: 100%; border-right: 10px solid #65FFF9;">
                        <input type="button" style="background-color: #65FFF9; width: 100%; font: Bold 16px Gotham; border: 0; height: 40px; padding-top: 10px" value="Billeterie">
                    </div>
                </div>
            </b-col>
        </b-row>

        <b-row class="mt-5">
            <b-col cols="8" class="pr-0">
                <GmapMap
                        :center="{lat:44.870659, lng:-0.558953}"
                        :zoom="15"
                        map-type-id="terrain"
                        style="width: 100%; height: 400px"
                        :options="{
                           backgroundColor: 'black'
                         }"
                >

                </GmapMap>
            </b-col>

            <b-col cols="4" style="background-color: #65FFF9;" class="d-flex justify-content-center">

                <div class="d-flex flex-column justify-content-around pt-5 pb-5">
                    <div style="font: Bold 40px/50px Gotham;">
                        Adresse
                    </div>
                    <div class="d-flex justify-content-start">
                        <img src="../assets/pin.svg">
                        <div style="font: Bold 16px/26px Gotham;" class="ml-2">
                            Base sous-marine <br>
                            Boulevard Alfred Daney <br>
                            33300 Bordeaux
                        </div>
                    </div>
                    <div class="d-flex justify-content-start mt-3">
                        <img src="../assets/phone-call.svg">
                        <div style="font: Bold 16px/26px Gotham;" class="ml-2 mt-2">
                            05 56 11 11 50
                        </div>
                    </div>

                    <input @click="$router.push('/infos')" type="button" style="background-color: white; width: 100%; font: Bold 16px Gotham; border: 0; height: 40px; padding-top: 10px" value="Informations pratiques">


                </div>

            </b-col>
        </b-row>


    </div>
</template>

<script>
    export default {
        name: "Home",
        created() {
            this.$store.commit('setIsSonar', false);
        },
    }
</script>

<style scoped>

</style>

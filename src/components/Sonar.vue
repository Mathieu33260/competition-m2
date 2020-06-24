<template>
    <div>
        <b-row>
            <img src="../assets/sonarqr.png" style="width: 100%"/>
        </b-row>

        <b-row style="position: relative" class="d-flex justify-content-center">
            <b-col cols="10" style="bottom: 20px">
                <input type="button" class="mb-5" style="background-color: #65FFF9; width: 100%; font: Bold 18px/20px Gotham; border: 0; height: 40px; padding-top: 10px" value="Se rendre au Centre">
                <input type="button" style="background-color: #65FFF9; width: 100%; font: Bold 18px/20px Gotham; border: 0; height: 40px; padding-top: 10px" value="Acheter un billet">
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: "Sonar",

        created() {
            this.$store.commit('setIsSonar', true);
        },
    }
</script>

<style scoped>

</style>

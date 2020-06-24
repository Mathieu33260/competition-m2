<template>
    <div>
        <template v-if="countDown > 5">
            <img src="../assets/sonar-4.gif" style="width: 100%;"/>
        </template>

        <template v-else>
            <b-row>
                <img src="../assets/sonarqr.png" style="width: auto; max-width: 100%; height: auto; display: block; object-fit: cover"/>
            </b-row>

            <b-row style="position: relative" class="d-flex justify-content-center">
                <b-col cols="10" style="bottom: 20px">
                    <input @click="$router.push('/infos')" type="button" class="mb-5" style="background-color: #65FFF9; width: 100%; font: Bold 18px/20px Gotham; border: 0; height: 40px; padding-top: 10px" value="Se rendre au Centre">
                    <input type="button" style="background-color: #65FFF9; width: 100%; font: Bold 18px/20px Gotham; border: 0; height: 40px; padding-top: 10px" value="Acheter un billet">
                </b-col>
            </b-row>
        </template>

    </div>
</template>

<script>
    export default {
        name: "Sonar",

        data() {
            return {
                countDown : 10
            }
        },

        created() {
            this.$store.commit('setIsSonar', true);
        },

        methods: {
            countDownTimer() {
                if(this.countDown > 0) {
                    setTimeout(() => {
                        this.countDown -= 1
                        this.countDownTimer()
                    }, 1000)
                }
            }
        },

        mounted() {
            this.countDownTimer()
        }
    }
</script>

<style scoped>

</style>

<template>
    <div>
        <Slide></Slide>
        <Infos></Infos>
        <b-card
                overlay
                img-src="https://picsum.photos/1024/480/?image=1004"
                text-variant="white"
                style="border: 0"
                class=""
        >
            <div class="d-flex flex-column justify-content-center h-100">
                <div class="d-flex flex-column">
                    <div class="d-flex justify-content-around">
                        <div>
                            Découvrez l'expo en visite virtuelle
                        </div>
                    </div>
                    <div class="d-flex justify-content-around mt-3">
                        <b-button pill to="/virtuelle">
                            Visite virtuelle 360
                        </b-button>
                    </div>
                </div>
            </div>
        </b-card>
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

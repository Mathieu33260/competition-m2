<template>
    <div>
        <b-carousel
                id="carousel-fade"
                style="text-shadow: 0px 0px 2px #000"
                fade
                img-width="1024"
                img-height="400"
                :interval="2000"
        >
            <b-carousel-slide
                    caption="Expérience unique grâce aux lunettes"
                    img-src="https://picsum.photos/1024/400/?image=10"
            ></b-carousel-slide>
            <b-carousel-slide
                    caption="Expérience unique grâce aux lunettes"
                    img-src="https://picsum.photos/1024/400/?image=12"
            ></b-carousel-slide>
            <b-carousel-slide
                    caption="Expérience unique grâce aux lunettes"
                    img-src="https://picsum.photos/1024/400/?image=22"
            ></b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
    export default {
        name: "Visite"
    }
</script>

<style scoped>

</style>

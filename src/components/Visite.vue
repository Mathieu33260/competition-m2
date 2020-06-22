<template>
    <div>
        <b-carousel
                id="carousel-fade"
                style="text-shadow: 0px 0px 2px #000"
                fade
                img-width="1024"
                img-height="350"
                :interval="2000"
        >
            <b-carousel-slide
                    caption="Expérience unique grâce aux lunettes"
                    img-src="https://picsum.photos/1024/350/?image=10"
            ></b-carousel-slide>
            <b-carousel-slide
                    caption="Expérience unique grâce aux lunettes"
                    img-src="https://picsum.photos/1024/350/?image=12"
            ></b-carousel-slide>
            <b-carousel-slide
                    caption="Expérience unique grâce aux lunettes"
                    img-src="https://picsum.photos/1024/350/?image=22"
            ></b-carousel-slide>
        </b-carousel>
        <div>
            <div id="map"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Visite",

        mounted() {
            var uluru = {lat: -25.344, lng: 131.036};
            // The map, centered at Uluru
            var map = new google.maps.Map(
                document.getElementById('map'), {zoom: 4, center: uluru});
            // The marker, positioned at Uluru
            var marker = new google.maps.Marker({position: uluru, map: map});
        }
    }
</script>

<style scoped>
    #map {
        width: 100%;
        height: 400px;
        background-color: grey;
    }
</style>

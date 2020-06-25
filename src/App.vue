<template>
  <div id="app">
    <Navbar v-if="!$store.state.isSonar"></Navbar>
    <router-view style="margin-top: 250px"></router-view>
    <b-row v-if="!$store.state.isSonar" style="border-bottom: 1px solid white; background-color: #65FFF9" class="pt-5 pb-4">
      <b-col cols="4" class="d-flex justify-content-between ml-5">
        <div style="width: 50%; max-height: 50px">
          <img src="./assets/centrebleu.png" style="height: 100%">
        </div>

        <div style="width: 50%; max-height: 50px" class="text-center">
          <img src="./assets/téléchargement.png" style="height: 100%">
        </div>
      </b-col>

      <b-col cols="7" class="d-flex justify-content-end pl-5 pr-5">
        <img src="./assets/instagram.svg" style="height: 50%" class="ml-5">

        <img src="./assets/facebook.svg" style="height: 50%" class="ml-5">

        <div style="font: Bold 16px/20px Gotham;" class="ml-5 mt-2">
          Presse
        </div>

        <div style="font: Bold 16px/20px Gotham; cursor:pointer;" class="ml-5 mt-2" @click="$router.push('/infos')">
          Informations Pratiques
        </div>

      </b-col>
    </b-row>

    <b-row v-if="!$store.state.isSonar" style="background-color: #65FFF9" class="pt-5 pb-4">
      <b-col cols="4" class="d-flex justify-content-between ml-5">
        <div style="font: Bold 16px/20px Gotham;">
          Base sous-marine <br>
          Boulevard Alfred Daney <br>
          33300 Bordeaux
        </div>
      </b-col>

      <b-col cols="7" class="d-flex justify-content-between pl-5 pr-5">
        <div style="font: Bold 16px/20px Gotham;" class="mt-3">
          Le centre, Bordeaux, 2021
        </div>

        <div style="font: Bold 16px/20px Gotham;" class="mt-3">
          Mentions légales
        </div>

        <div style="font: Bold 16px/20px Gotham;" class="mt-3">
          CGV
        </div>

        <div style="font: Bold 16px/20px Gotham;" class="mt-3">
          Plan de site
        </div>

      </b-col>
    </b-row>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>

<style>
  @import './assets/style/main.css';

  .img {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
  }
</style>

<template>
  <div id="app" style="background-color: #353a40">
    <Navbar></Navbar>
    <router-view></router-view>
    <div style="background-color: black; color: white">
      <b-row class="p-5">
        <b-col lg="4" sm="*" class="d-flex justify-content-around">
          Contact
        </b-col>
        <b-col lg="4" sm="*" class="d-flex justify-content-around">
          Mentions Légales
        </b-col>
        <b-col lg="4" sm="*" class="d-flex justify-content-around">
          Plan du site
        </b-col>
      </b-row>
    </div>
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

</style>

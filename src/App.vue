<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
    <b-row style="background-color: black; height: 200px">

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

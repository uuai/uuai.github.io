<template>
  <div id="app">
    <app-footer></app-footer>
    <router-view></router-view>
  </div>
</template>

<script>
import Tabbar from "./components/Tabbar"
export default {
  name: 'App',
  components: {
     'app-footer':Tabbar
  }
}
</script>

<style>
  html,body{
    background: #f1f1f1;
  }
  #app{
    padding-bottom: 48px;
  }
</style>

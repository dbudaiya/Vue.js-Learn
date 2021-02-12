<template>
  <div id="app">
    <router-view></router-view>
    <MainTabbar></MainTabbar>
  </div>
</template>

<script>
  import MainTabbar from './components/tabbar/MainTabbar'
  export default {
  components: {
    MainTabbar
  },
};
</script>

<style  scoped>

</style>

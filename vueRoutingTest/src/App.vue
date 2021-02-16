<template>
  <div id="app">
    <!-- <router-link to="/home">首页</router-link>
      <router-link to="/about">关于</router-link> -->
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
    <!-- <router-link :to="'/user/' + userId" tag="button" replace>用户</router-link> -->

    <!-- <button @click="btn1">首页</button>
    <button @click="btn2">关于</button> -->

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    btn1() {
      this.$router.push("/home");
    },
    btn2() {
      this.$router.push("/about");
    },
  },
  data() {
    return {
      userId: 456,
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <h2>主页</h2>
    <router-link to="/home">访问home页面</router-link>
    <router-link to="/user">访问user页面</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from "./components/Home";
import User from "./components/User";

export default {
  name: 'App',
  home:Home,
  user:User,
}
</script>

<style>

</style>

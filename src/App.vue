<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h4>
    <router-link to="/test/people">People</router-link> | 
    <router-link to="/test/planets">Planets</router-link>
  </h4>
  <router-view/>
</template>

<script>


export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

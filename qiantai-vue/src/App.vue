<template>
    <div id="app">
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.container{
  width: auto;
  background-image:url(assets/uu.jpg);
  background-size: cover;
  height:100vh;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 3px;
}
.game{
  width: 1400px;
  background-image:url(assets/22.jpg);
  background-size: cover;
  height:100vh;

}
</style>

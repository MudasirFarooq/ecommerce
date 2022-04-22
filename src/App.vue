<template>
<div class="sticky">
  <hello-world/>
</div>  
  <router-view />
  
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  components:{
    HelloWorld
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
button{
  background: #0d3835 !important;
  border: none !important;
}
.sticky{
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>

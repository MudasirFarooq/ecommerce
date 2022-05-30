<template>
<div>
<div class="sticky">
  <hello-world v-if="!$route.meta.hideNavbar"/>
</div>  
<router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
  
  <!-- <router-view /> -->
  <Notificationslist/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
 import Notificationslist from "./components/Notificationslist.vue"
export default {
  components:{
    HelloWorld,
     Notificationslist
  }
}
</script>
<style>
 .fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-active {
  opacity: 0;
}
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

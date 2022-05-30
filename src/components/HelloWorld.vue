<template>
  <nav class="navbar navbar-expand-lg color ">
  <div class="container-fluid px-5">
    <a class="navbar-brand" href="#" style="color: green;">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" to="/products">Products</router-link>
        </li>
      </ul>
        <div class="d-flex">
            <router-link class="nav-link active" to="/login">Login</router-link>
            <p  class="mt-2" style="color: white; cursor:pointer" @click="$router.push({ path: '/Cart' })">{{$store.getters.cartlen}} Cart</p>
        </div>
        
    </div>
  </div>
</nav>
</template>

<script>

export default {
components:{
},
  computed: {},
  methods:{
    
  }
};
</script>

<style scoped>
.color{
  background: #0d3835 !important;
}
a{
  color: white !important;
}
</style>
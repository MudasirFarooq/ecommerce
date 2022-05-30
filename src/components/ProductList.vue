<template>
  <div> 
    <div class="row">
      
        <Cards v-for="product in products" :key="product.id" :product="product"/>
    </div>
    <pre>
    {{products}}
    </pre>
  </div>
</template> 
<script>
import Cards from "./Cards.vue"

export default {
  name: "Productlist",
  components: {
      Cards
  },
  computed:{
      products(){
          return this.$store.state.product.products
      }
  },
  mounted(){
      this.$store.dispatch('allproduct');
  },
  
};
</script>
<style>
</style>
<template>
  <div> 
      <div class="container p-5">
          <h3>All Men's clothe Products</h3>
    <div class="row">
        <Cards v-for="product in products" :key="product.id" :product="product"/>
    </div>
  </div>
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
          return this.$store.state.products
      }
  },
  mounted(){
      return this.$store.dispatch('category1')
  }
};
</script>
<style scoped>
h3{
  border-bottom: 5px solid #0d3835;
  padding: 5px 0;
  margin-bottom: 30px;
}

</style>
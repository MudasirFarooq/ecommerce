<template>
  <div class="p-5">
    <div class="row">
      <div class="col-3 col1 mt-5">
        <h3 class="head">Search by Categories</h3>
        <ul>
          <li @click="$router.push({ path: '/men' })">Men's Clothe</li>
          <li @click="category(wemen)">Women's Clothe</li>
          <li @click="$router.push({ path: '/jewelery' })">Jewelery</li>
          <li @click="category(electric)">Electronics</li>
        </ul>
      
      </div>
      
      <div class="col-9 col2">
        <h3>ALL Products</h3>
        <Productlist />
      </div>
    </div>
  </div>
</template>
<script>
import Productlist from "../components/ProductList.vue";
export default {
  data(){
    return{
      men: "men's clothing",
      wemen:"women's clothing",
      jewelery: 'jewelery',
      electric: 'electronics'

}
  },
  methods:{
    category(jewelery){
      console.log(jewelery)
      return this.$store.dispatch('category' ,jewelery)
    }
  },
  components: {
    Productlist,
  },
};
</script>
<style scoped>
.head{
  width: 275px;
  }
h3{
  border-bottom: 5px solid #0d3835;
  padding: 5px 0;
  margin-bottom: 30px;
}
.col1{
 position: fixed;
  height: 100vh;
}
.col2{
  margin-left: 350px;
  }
  li{
    cursor:pointer
  }
</style>
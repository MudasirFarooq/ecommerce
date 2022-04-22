<template>
  <div
  class="dropdown-menu" aria-labelledby="navbarDropdown"
   
    style="min-width:500px; right:0; left:auto"
  >
    <div v-for="cart in carts" :key="cart.product.id">
      <div class="px-3 d-flex justify-content-between">
        <div>
          <p>{{cart.product.title}}</p>
<span>         {{cart.quantity}} x ${{cart.product.price}}</span> 
        </div>
        <div>
          <p
            href="#"
            class="badge bg-secondary" @click="remove_item(cart.product)"
          >remove</p>
        </div>
      </div>
      <hr />
    </div>

    <div class="d-flex justify-content-between px-3">
      <span>Total: ${{$store.getters.Total}}</span>
      <a href="#" @click.prevent="clearcart" >Clear Cart</a>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
      carts(){
          return this.$store.state.cart
      }
    },
    methods:{
        clearcart(){
            return this.$store.dispatch('clearcartitem')
        },
        remove_item(product){
            return this.$store.dispatch('remove' , product.id)
            
        }
    },

  
  
};
</script>

<style scoped>
/* p{
    font-size: 16px;
    overflow: hidden;
  text-overflow: ellipsis;
  height: 30px;
} */

</style>
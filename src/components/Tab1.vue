<template >
    <div>
       <div class="container">
      <h3 class="text-center mt-5 mb-2">Shoping cart</h3>
      <p class="text-center mb-2"><b> {{$store.getters.cartlen}}</b> Items in your Cart</p>
      <table class="table table-striped">
        <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
        </tr>
        <tr v-for="cart in carts" :key="cart.product.id">
            <td class="d-flex">
                <img :src="cart.product.image" alt="">
                <p class="mt-2">{{cart.product.title}}</p>
            </td>
            <td>${{cart.product.price}}</td>
            <td>{{cart.quantity}}</td>
            <td><p
            class="badge bg-secondary pclas" @click="remove_item(cart.product)"
          >remove</p></td>
        </tr>
      </table>
      <div class="cont mt-3 text-end">
            <h5>Subtotal:</h5> 
            <h3>${{$store.getters.Total}}</h3> 
            <button @click="clearcart">Clear Cart</button>
            <button>Checkout</button>
      </div>
      <div class="mb-5">
      <router-link class="link-success pclas" to="/about"><b class="hhhh">&#8592;</b> Continue Shoping</router-link>
      </div>
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
}
</script>
<style scoped>
   img{
     width: 70px;
     height: 70px;
 }
 table , .cont{
     width: 80%;
     margin: auto;
 }
 b{
     color: #0d3835;
 }
 button{
     color: white;
     padding: 8px 20px;
     border-radius: 5px;
 }
 .pclas{
     cursor: pointer;
    text-decoration: none;

 }
 .hhhh{
     font-size: 25px;
     width: 8px;
 }
 button{
     background: white !important;
     color: black;
     border: 3px solid #0d3835 !important;
     padding: 5px 20px;
     margin-left: 10px;

 }
 button:hover{
     color: white !important;
     padding: 5px 20px ;
     border-radius: 5px;
     background: #0d3835 !important;
 }
 
</style>
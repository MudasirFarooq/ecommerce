<template>
  
    <div class="col-3 mt-3 ">
      <div class="card h-100 text-center border-0">
        <img class="w-100" :src="product.image" alt=""  @click="redirect(product.id)"/>
        <div class="card-body">
          <h4 class="card-title px-0 my-0">
            <p class="nav-link active" 
              >{{product.title}}</p><span>${{product.price}}</span>           
          </h4>
        </div>
        <div class="px-4 pb-3 mt-0 ">
          <button class="btn btn-primary px-5" @click="addtocart()">Add to cart</button>
        </div>
      </div>
    </div>

</template>
<script>
export default {
  name: "Cards",
  props:['product'],
  methods:{
      redirect(id){
        this.$router.push({ path: '/productd/'+id })
    },
    addtocart(){
        
        this.$store.dispatch('addtocart' ,{
            product :this.product,
            quantity: 1
        })
    }
  }
};
</script>
<style scoped>
img{
    height: 220px;
    cursor: pointer;
}
p{
    font-size: 16px;
    overflow: hidden;
  text-overflow: ellipsis;
  height: 30px;
}
</style>
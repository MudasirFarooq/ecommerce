<template>
    <div class="row m-5">
       <div class="col-4">
            <img class="w-100 " :src="product.image" alt="">
        </div>
        <div class="col-7 mt-5">
            <h4>{{product.title}}</h4>
            <h3>${{product.price}}</h3>
            <p class="mt-4"> {{product.description}}</p>
            <button class="btn btn-primary">Add to cart</button>
        </div> 
    </div>
</template>
<script>
export default {
    name:"Productd",
    props:['id'],
    computed:{
        product(){
            return this.$store.state.product.product
        }
    },
    mounted(){
        this.$store.dispatch('getproduct' , this.id)
    }
}
</script>
<style>
    
</style>
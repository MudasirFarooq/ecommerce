import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    products:[],
    product:[],
    cart:[],
    category:''
  },
  mutations: {
    SETproduct(state , products){
      state.products = products
    },
    singleProduct(state , product){
      state.product = product
    },
    ADD_CART(state ,{product ,quantity}){
      let productincart = state.cart.find(item =>{
      return  item.product.id === product.id
      })
      if(productincart){
        productincart.quantity += quantity
        return;
      }
      state.cart.push({
        product,
        quantity
      }) 
    },
    CLEAR(state){
      state.cart = []
    },
    REMOVE_item(state , product){
      state.cart= state.cart.filter(item =>{
       return item.product.id !== product
      })
    },
    CATEGORIES(state){
      //console.log(data)
      state.products = state.products.filter(item =>{
        return item.category == 'jewelery'
      })
    },
    CATEGORIES1(state){
      //console.log(data)
      state.products = state.products.filter(item =>{
        return item.category == "men's clothing"
      })
    }
  },
  actions: {
    allproduct({commit}){
      axios.get("https://fakestoreapi.com/products")
      .then((response) =>{
        commit('SETproduct' , response.data)
      })
    },
    getproduct({commit} , productid){
      axios.get("https://fakestoreapi.com/products/"+productid)
      .then(response =>{
        commit('singleProduct' , response.data)
      })
    },
    addtocart({commit} , {product , quantity}){
        commit('ADD_CART' , {product , quantity})
    },
    clearcartitem({commit}){
        commit('CLEAR')
    },
    remove({commit} , product){
      commit('REMOVE_item' , product)
    },
    category({commit}){
      commit('CATEGORIES')
    },
    category1({commit}){
      commit('CATEGORIES1')
    },
    
  },
  getters: {
    cartlen(state){
      return state.cart.length
    },
    Total(state){
      let total = 0;
      state.cart.forEach(item=>{
        total += item.product.price * item.quantity
      })
      return total.toFixed(2)
    }
  },
});

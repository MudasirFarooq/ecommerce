import { createStore } from "vuex";
import axios from "axios";

import product from "./modules/product"
export default createStore({
  state: {
    
    cart:[],
    category:[],
    notification:[]

  },
  mutations: {
   
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
    CATEGORIES(state ,data){
      console.log(data)
      state.products= data
      // state.products = state.products.filter(item =>{
      //   return item.category == 'jewelery'
      // })
    },
    CATEGORIES1(state){
      //console.log(data)
      state.products = state.products.filter(item =>{
        return item.category == "men's clothing"
      })
    },
    Push_noti(state , notification){
      state.notification.push({
        ...notification,
        id: Math. floor(Math. random() * 100)
      })
    },
    REMOVE_noti(state ,notificationRemove){
      state.notification = state.notification.filter(notification =>{
        return notification.id != notificationRemove.id
      })
    }
  },
  actions: {
   
    addtocart({commit,dispatch} , {product , quantity}){
        commit('ADD_CART' , {product , quantity})
dispatch('addnotification' ,{
  type:'success',
  message: "product add to cart"
})

    },
    clearcartitem({commit,dispatch}){
        commit('CLEAR')
        dispatch('addnotification' ,{
          type:'info',
          message: "All product removed"
        })          
    },
    remove({commit ,dispatch} , product){
      commit('REMOVE_item' , product)
      dispatch('addnotification' ,{
        type:'danger',
        message: "product remove from cart"
      })
      
    },
    category({commit} , name){
      
      axios.get("https://fakestoreapi.com/products/category/"+name)
      .then(response =>{
        commit('CATEGORIES' ,  response.data)
      })
    },
    category1({commit}){
        commit('CATEGORIES1')
    
      
    },
    addnotification({commit} , notification){
      commit("Push_noti" ,notification )
    },
    removenoti({commit} , notification){
      commit("REMOVE_noti",notification)
    }
    
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
  modules:{
    product
  }
});

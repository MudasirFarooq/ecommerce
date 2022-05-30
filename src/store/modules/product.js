import axios from "axios";

export default{
   state:{
    products:[],
    product:[],
   },
   mutations:{
    SETproduct(state , products){
        state.products = products
      },
      singleProduct(state , product){
        state.product = product
      },
   },
   actions:{
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
   },

}
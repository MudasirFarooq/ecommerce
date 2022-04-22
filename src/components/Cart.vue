<template >
  <div>
      <div class="container p-5">
          <div class="cont">
      <button @click="activetab = 'tab1'" :class="activetab == 'tab1' && 'colored'" >Cart Details</button>
      <button @click="activetab = 'tab2'" :class="activetab == 'tab2' && 'colored'" >Personal Info</button>
      <button @click="activetab = 'tab3'" :class="activetab == 'tab3' && 'colored'" >Payment Info</button>
      <button @click="activetab = 'tab4'" :class="activetab == 'tab4' && 'colored'" >Finish</button> 
          </div>

     <component :is="activetab"></component>     
    <!-- <Tab1 v-show="activetab == 'tab1'"/>
    <Tab2 v-show="activetab == 'tab2'"/>
    <Tab3 v-show="activetab == 'tab3'"/>
    <Tab4 v-show="activetab == 'tab4'"/> -->
      </div>
  </div>
  
</template>
<script>
import Tab1 from "./Tab1.vue"
import Tab2 from "./Tab2.vue"
import Tab3 from "./Tab3.vue"
import Tab4 from "./Tab4.vue"

export default {
    name:"Cart",
    data(){
        return{
            activetab : 'tab1'
        }
    },
    components:{
        Tab1,
         Tab2,
         Tab3,
         Tab4
    },
   
};
</script>
<style scoped>
 button{
     color: white;
     padding: 8px 20px;
     margin-left: 5px;
 }
 .cont{
     width: 80%;
     margin: auto;
     box-sizing: border-box;

 }
 .colored{
     background: white !important;
     color: black;
     border: 3px solid #0d3835 !important;
     padding: 5px 20px;

 }
</style>
<template>
    <div :class="typeclass" class="alert  alert-dismissible fade show" role="alert">
        {{notification.message}}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
  </button>
</div>
</template>
<script>
import {mapActions} from "vuex"
export default {
    props:['notification'],
    data() {
        return {
            set_timeout: null
        }
    },
    computed:{
        typeclass(){
            return `alert-${this.notification.type}`
        }
    },
    created() {
        this.set_timeout = setTimeout(()=>{
            this.removenoti(this.notification);
        },3000)
    },
    beforeUnmount() {
        clearTimeout(this.set_timeout)
    },
    methods:{ ...mapActions(['removenoti'])}
    
}
</script>
<style scoped>
button{
    padding: 10px 10px !important;
    background: none !important;
}
span{
    color: black !important;
    font-size: 26px !important;
    margin: 10px 20px 0 0 !important;
}
    
</style>
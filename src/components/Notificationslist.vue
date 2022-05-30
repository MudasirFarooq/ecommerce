<template>
    <div class="noti">
        
        <Notificationmessage v-for="noti in Notifications" :key="noti.id" :notification="noti"/>
    </div>
</template>
<script>
import Notificationmessage from "./Notificationmessage.vue"
export default {
    computed:{
        Notifications(){
            return this.$store.state.notification
        }
    },
    components:{
        Notificationmessage
    }
}
</script>
<style scoped>
    .noti{
        position: fixed;
        bottom: 0;
        right: 0;
        margin-right: 15px;
        width: 350px;

    }
</style>
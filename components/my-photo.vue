<style scoped>
    .time{
        font-size: 14px;
        font-weight: bold;
    }
    .content{
        padding-left: 5px;
       
    }

    .my-photo-container{
        padding-left:30px; 
        height: 100%;
    }
</style>
<template>
    <div id='my-photo-container' class='my-photo-container'>
        <MyPhotoItem></MyPhotoItem>
    </div>
</template>
<script>
import MyPhotoItem from '../components/my-photo-item.vue'
    export default {
        components:{
            MyPhotoItem
        }
    }
</script>

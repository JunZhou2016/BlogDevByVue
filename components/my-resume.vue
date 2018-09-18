<style scoped>
    .time{
        font-size: 14px;
        font-weight: bold;
    }
    .content{
        padding-left: 5px;
    }
</style>
<template>
    <div id='resume-container'>
        <MyResumeItem></MyResumeItem>
    </div>
</template>
<script>
import MyResumeItem from '../components/my-resume-item.vue'
    export default {
        components:{
            MyResumeItem
        }
    }
</script>

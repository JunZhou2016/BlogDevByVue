<template>
    <div class="demo-avatar">
        <Avatar :src="myImgSRC" />
        <span>&nbsp;</span>
        <slot name='des-about-me'></slot>
    </div>
</template>
<script>
    // 我的个人图像在线网址;
    const myImgURL = 'http://ouuy81imh.bkt.clouddn.com/zj001.jpg';
    export default {
        data(){
            return {
                myImgSRC:myImgURL
            }
        }
    }
</script>

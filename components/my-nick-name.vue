
<style scoped>
    #my-nick-name-container{
        color: red;
        text-align: center;
        background: #FFFFFF;
    }

    #my-nick-log{
         width: 100%;
         border-radius:50%; 
         overflow:hidden;
         box-shadow:0 0 20px 0 #000000;
    }

    h2{
        color: #C4C4C4;
        font-family:cursive;
        text-shadow:6px 2px 2px #DBDBDB;
        font-size: 24px;
        width: 100%;
        overflow:hidden;
    }

</style>

<template>
    <div id="my-nick-name-container">
        <!-- <h2>
            Pursue
        </h2> -->
        <Card>
            <div style="text-align:center;">
                <img src="../imgs/litten.png" id='my-nick-log'>
                <h2>
                    <a title="To ZhouJun's Blog" href="https://junzhou2016.github.io/">
                        Pursue
                    </a>
                </h2>
            </div>
        </Card>
    </div>
</template>
<script>
// 我的昵称模块:包含用户头像、联系方式、座右铭等基本信息;
export default {
    
}
</script>

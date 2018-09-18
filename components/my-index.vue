<style scoped>
    img{
        height: 500px;
        margin-top: 10px;
        margin-left: 24px;
        text-align: center;
        overflow: hidden;
        z-index: -9999;
    }

    div .demo-carousel{
        position:relative;
    }

    div .demo-carousel div{
        position:absolute; 
        font-family:cursive;
        text-shadow:6px 2px 2px #333;
        font-size: 24px;
        text-align: center;
        top:250px;
    }

    #img-des-module-01{
        color:#E5E5E5;
        left:250px; 
    }

    #img-des-module-02{
        color:#E5E5E5;
        left:280px; 
    }

    #img-des-module-03{
        color:#FFF8F0;
        left:30px; 
    }

    #img-des-module-04{
        color:#F3C479;
        left:100px; 
    }
</style>
<template>
    <Carousel autoplay v-model="value2" loop>
        <CarouselItem>
           <div class="demo-carousel">
                <div id='img-des-module-01'>
                    这个世界几乎不合所有人的梦想。只是有些人可以学会遗忘，有些人却坚持。
                </div>
                <img src="../imgs/index_bg.jpg">
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
           <div id='img-des-module-02'>
                     坚持最初的梦想，哪怕是白日做梦，也在所不辞!
                </div>
            <img src="../imgs/index-bg-01.png">
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
            <div id='img-des-module-03'>
                             很多的人，总分不清理想和梦想的不同。
                             <br>
            理想是一种可能实现也可能不实现的观念，这要天时，地利，加上人和和三大条件才能略知成功成功与否的一二。
                            <br>
                         而梦想，可以想的天花乱坠，随人怎么想，要实现起来，大半是不成的。
                </div>
            <img src="../imgs/index-bg-02.png">
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
            <div id='img-des-module-04'>
                    我听到了一个发自内心的声音：“嘿，你为什么要在这里等机会呢?
                    <br>
                    你年轻，还有梦想，你能为自己决策。
                    <br>
                    那个有决策权的你为什么不给有梦想的你一个机会呢?你为什么不让他去试试呢?
                    <br>
                    如果连你都不肯给自己机会，谁还会给你机会呢?
                </div>
            <img src="../imgs/index-bg-03.png">
            </div>
        </CarouselItem>
    </Carousel>
</template>
<script>
    export default {
        data () {
            return {
                value2: 0,
            }
        }
    }
</script>
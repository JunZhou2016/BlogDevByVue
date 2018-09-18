
<style>
    .about-me-bg{
        background: url(../imgs/about_me_bg.png);
        height:100%;
        margin: 0px auto 0;
        padding: 0px
    }
    
    /* 
    关于我右侧模块-主体的样式;
     */
    div .ivu-drawer{
         border:1px dashed;
        border-radius:5px;
        border-color: #CDC8A5;
        border-right:none;
        border-bottom: none;
        border-top:none;
    }

    /* 
    关于我右侧模块-主体头部整体样式;
     */
    div .ivu-drawer-header{
        /* color:red; */
    }

     /* 
    关于我右侧模块-自定义头部模块的样式
     */
   
    .my-ivu-drawer-header {
    border-bottom: 1px solid #e8eaec;
    padding: 14px 16px;
    line-height: 1;
    text-align: left;
    height: 52px;
    background: url(../imgs/about_me_bg.png);
    text-shadow: 5px 5px 5px #F0D676;
    /* 头部标题部分的字体颜色 */
    color: #EADBA7;
                }
    /* 
    关于我右侧模块-主体头部整体-文本模块的样式;
     */
    div .ivu-drawer-header-inner{
        color:blueviolet;
    }
    /* 
      关于我右侧模块-内容主体的样式;
     */
    div .ivu-drawer-body{
        padding: 0;
        overflow:visible;
        text-align: center;
    }

    /* 
    名人名言模块的样式;
     */
    .my-saying{
        padding-top: 10px;
        color: #E0E3E3;
        text-shadow: 5px 5px 5px #D3D8D8;
    }
   
    
</style>

<template>
    <!-- <Button @click="value1 = true" type="primary">Open</Button>  title='About Me'-->
    <Drawer  @on-close='switchState4AbutMe'
           :closable="true"
          v-model="isShowAboutMe"
          >
          <header class='my-ivu-drawer-header'>
              <MyImg>
                <span slot='des-about-me'>About Me</span>
              </MyImg>
          </header>
        <div class="about-me-bg">
            <div id='mySaying' class='my-saying'>
                <p>我们要学会珍惜我们生活的每一天，</p>
                    <P>因为，</P>
            <P>这每一天的开始，都将是我们余下生命之中的第一天。</P>
                <p>除非我们即将死去。</p>
            </div>
        </div>
    </Drawer>
</template>
<script>
    import MyImg from './about-me-my-img.vue';
    export default {
        components:{
            MyImg
        },
        data(){
            return {
               
            }
        },
        computed:{
            isShowAboutMe:{
                get: function () {
                return this.$store.state.about_me.isShowAboutMe;
                                    },
                set: function () {
                                    }
            }
        },
        methods:{
            switchState4AbutMe(){
                this.$store.commit('switchState4AbutMe');
            }
        }
    }
</script>

<template>
    <div class="demo-avatar" style="display:inline">
    
        <!-- <Avatar :style="{background: 'url('+bgImgUrl+')',marginLeft: marginLeft}">{{ user }}</Avatar> -->
    
        <!-- <Button size="small" @click="handleChange">Change</Button> -->
    
        <img :src='bgImgUrl' :style='imgStyle' @click="handleClick">
    
    </div>
</template>
<script>
    /**
    
     * 博客log控制模块;
    
     */
    
    const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
    
    const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
    
    const MarginLeftVal = '500px';
    
    
    
    export default {
    
        data() {
    
            return {
    
                user: UserList[0],
    
                color: ColorList[0],
    
                // 设置log的左间距;
    
                marginLeft: MarginLeftVal,
    
                //设置log的背景图片;
    
                bgImgUrl: '../imgs/log4j_Pr_002.png',
    
                imgStyle: {
    
                    width: '85px',
    
                    height: '64px',
    
                    paddingTop: '5px',
    
                    cursor: 'pointer',
    
                    background: '#F7F7F7',
    
                    isClickd: false,
    
                    opacity: '0.95',
    
                    borderRadius: '100px/100px'
    
                }
    
            }
    
        },
    
        methods: {
    
            handleChange() {
    
                const index = UserList.indexOf(this.user);
    
                this.user = index < UserList.length - 1 ? UserList[index + 1] : UserList[0];
    
                this.color = index < ColorList.length - 1 ? ColorList[index + 1] : ColorList[0];
    
            },
    
            // 处理发生在元素上的点击事件; 
    
            handleClick(e) {
    
                this.imgStyle.isClickd = !this.imgStyle.isClickd;
    
                if (this.imgStyle.isClickd) {
    
                    this.imgStyle.background = '#F0F0F0';
    
                    this.imgStyle.opacity = '0.65';
    
                } else {
    
                    this.imgStyle.background = '#F7F7F7';
    
                }
    
    
    
            }
    
        }
    
    }
</script>

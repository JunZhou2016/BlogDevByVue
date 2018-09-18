<style scoped>
    #my-friendship-link{
        color: #E3E5E8;
        padding-left: 10px;
        margin-right: 20px;
        width: 100%;
    }

    #my-friendship-link span{
        width: 100%;
        margin-right: 10px;
        text-align: center;
    }

</style>

<template>
    <div id='my-friendship-link'>
        <span>
            <a title='我的大学' href="http://www.nwsni.edu.cn/">
                <Icon type="md-school" color='#D8C462' />
            </a>
        </span>
             <Divider type="vertical" />
        <span>
            <a title='我的CSDN' href="https://junzhou2016.github.io/">
                <Icon type="md-bookmarks" color='#5158E6'/>
            </a>
        </span>
             <Divider type="vertical" />
        <span>
            <a title="我的博客" href="https://my.csdn.net/my/mycsdn">
            <!-- 其实这里应该展示一片用户最得意的文章的URL -->
                <Icon type="ios-brush" color='#B9CE6F'/>
            </a>
        </span>
    </div>
</template>

<script>
export default {
    
}
</script>


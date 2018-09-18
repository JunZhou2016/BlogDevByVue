<style scoped>
    .layout {
    
        border: 1px solid #d7dde4;
    
        background: #f5f7f9;
    
        border-radius: 4px;
    
        overflow: hidden;
    
    }
    
    
    
    .layout-header-bar {
    
        background: #fff;
    
        box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
    
    }
    
    
    
    .layout-logo-left {
    
        width: 90%;
    
        height: 30px;
    
        background: #5b6270;
    
        border-radius: 3px;
    
        margin: 15px auto;
    
    }
    
    
    
    .menu-icon {
    
        transition: all .3s;
    
    }
    
    
    
    .rotate-icon {
    
        transform: rotate(-90deg);
    
    }
    
    
    
    .menu-item span {
    
        display: inline-block;
    
        overflow: hidden;
    
        width: 69px;
    
        text-overflow: ellipsis;
    
        white-space: nowrap;
    
        vertical-align: bottom;
    
        transition: width .2s ease .2s;
    
    }
    
    
    
    .menu-item i {
    
        transform: translateX(0px);
    
        transition: font-size .2s ease, transform .2s ease;
    
        vertical-align: middle;
    
        font-size: 16px;
    
    }
    
    
    
    .collapsed-menu span {
    
        width: 0px;
    
        transition: width .2s ease;
    
    }
    
    
    
    .collapsed-menu i {
    
        transform: translateX(5px);
    
        transition: font-size .2s ease .2s, transform .2s ease .2s;
    
        vertical-align: middle;
    
        font-size: 22px;
    
    }
</style>
<template>
    <div class="layout">
    
        <!--  -->
    
        <Layout style="position: absolute;top: 0px;bottom: 0px;left: 0px;right: 0px;">
    
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
    
               <!-- 我的昵称模块 -->
               <MyNickName></MyNickName>

                <Menu  theme="dark" width="auto" :class="menuitemClasses">
                        <!-- active-name="1-1" -->
                    <MenuItem name="1-1">
    
                    <Icon type="ios-navigate"></Icon>
                   
                   <span url='/index' @click="leftMenuItemClickHandler">
                        <router-link to="/index">
                            主页
                        </router-link>
                   </span>
    
                    </MenuItem>
    
                    <MenuItem name="1-2">
    
                    <Icon type="ios-pricetag" />
    
                    <span url='/myArticle' @click="leftMenuItemClickHandler">
                        <router-link to="/myArticle">
                             随笔
                        </router-link>
                    </span>
    
                    </MenuItem>
    
                    <MenuItem name="1-3">
    
                    <Icon type="md-photos" />
    
                    <span url='/photo' @click="leftMenuItemClickHandler">
                       <router-link to="/photo">
                           相册
                       </router-link>
                    </span>
    
                    </MenuItem>
    
                    <MenuItem name="1-4">
    
                    <Icon type="ios-bookmark" />
    
                    <span url='/photo' @click="leftMenuItemClickHandler">
                        <router-link to="/resume">
                            简历
                        </router-link>
                    </span>
    
                    </MenuItem>

                    <MenuItem name="1-5">
    
                    <Icon type="ios-swap" />
    
                    <span url='/about-me' @click="switchState4AbutMe">关于我</span>
    
                    </MenuItem>
    
                </Menu>

                <MyFrendShipLink>我的友链</MyFrendShipLink>
    
            </Sider>
             <AboutMe><!--关于我--></AboutMe> 
            <Layout>
    
                <Header :style="headerStye" class="layout-header-bar">
    
                    <!-- <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon> -->
    
                    <BlogLog @click.native="collapsedSider" :class="{on:isActive}"></BlogLog>
    
                </Header>
    
                <Content :style="{margin: '20px', background: '#fff'}">
                    <!-- 插入需要路由切换的子组件 -->
                    <router-view></router-view>
    
                </Content>
    
                <Footer :style="footerStyle">
    
                    <span :style="footerSpanStyle">
    
                             © 2018 Pursue VUE2.x 
    
                             <span v-html="footSpanGenerator(8)"></span>
    
                    <span>做你喜欢的的事，任何时候都不会太晚！</span>
    
                    <span v-html="footSpanGenerator(8)"></span> Theme Blog4J by ZhouJun</span>
    
                </Footer>
    
            </Layout>
    
        </Layout>
    
    </div>
</template>
<script>
    /**
    
     * 博客布局控制模块;
    
     */
    
    import BlogLog from './blog-log.vue';
    import AboutMe from './about-me.vue';
    import MyFrendShipLink from './my-frendship-link.vue';
    import MyNickName from './my-nick-name.vue';
    
    export default {
    
        components: {
    
            BlogLog,
            AboutMe,
            MyFrendShipLink,
            MyNickName
    
        },
    
        data() {
    
            return {
    
                isCollapsed: false,
    
                isActive: false,

                isShowAboutMe:false,//是否展示关于我的弹框;
    
                headerStye: {
    
                    padding: 0,
    
                    background: '#F7F7F7',
    
                },
    
                footerStyle: {
    
                    padding: '14px 50px'
    
                },
    
                footerSpanStyle: {
    
                    textAlign: 'center',
    
                    display: 'block',
    
                    font: 'italic bold 12px/20px arial,sans-serif',
    
                    height: '20px'
    
                },
    
                footSpanBase: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
    
            }
    
        },
    
        computed: {
    
            rotateIcon() {
    
                return [
    
                    'menu-icon',
    
                    this.isCollapsed ? 'rotate-icon' : ''
    
                ];
    
            },
    
            menuitemClasses() {
    
                return [
    
                    'menu-item',
    
                    this.isCollapsed ? 'collapsed-menu' : ''
    
                ]
    
            }
    
        },
    
        methods: {
    
            collapsedSider() {
    
                this.$refs.side1.toggleCollapse();
    
                this.isActive = !this.isActive;
    
            },
    
            footSpanGenerator(spanSize) {
    
                var spanContent = '';
    
                for (let index = 0; index < spanSize; index++) {
    
                    spanContent += this.footSpanBase;
    
                }
    
    
    
                return spanContent;
    
            },
    
            /**
    
             * 左侧菜单项点点击事件的处理函数;
    
             */
    
            leftMenuItemClickHandler(event) {
               //获取被点击的元素;
               var target = event.target;
               //获取被点击元素的属性;
                var targetAttributeURL = target.getAttribute('url')    
            },
            switchState4AbutMe(){
                //this.$store.dispatch('switchState4AbutMe'); //分发消息到actions
                this.$store.commit('switchState4AbutMe');  //提交信息到mutations
                var isShowAboutMe = this.$store.state.about_me.isShowAboutMe;
            }
    
        }
    
    }
</script>

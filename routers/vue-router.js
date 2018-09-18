import Vue from 'vue';
import VueRouter from 'vue-router';
/**
 * 使用VueRouter插件;
 */
Vue.use(VueRouter);
/**
 * 默认路由;
 * 当访问的路径不存在时，重定向到指定的组件页面;
 */
const defaultRouter = {
    path: '*',
    redirect: '/index'
};


/**
 * 路由列表;
 */
const Routers =[{
        path: '/index',
        //  meta: {
        //      title: 'Blog4Jun'
        //  },
        name:'index',
        component: (resolve) => require(['../components/blog-frame.vue'], resolve),
        children: [
            {
                path: '/index',
                name: 'index',
                component: (resolve) => require(['../components/my-index.vue'], resolve)
            },
            {
                path: '/myArticle',
                name: 'myArticle',
                component: (resolve) => require(['../components/my-article.vue'], resolve)
            },
            {
                path: '/photo',
                 name: 'photo',
                component: (resolve) => require(['../components/my-photo.vue'], resolve)
            },
            {
                path: '/resume',
                 name: 'resume',
                component: (resolve) => require(['../components/my-resume.vue'], resolve)
            }
        ]
    },
    {
        path: '/rdrawer',
        component: (resolve) => require(['../components/about-me.vue'], resolve)
    },
    defaultRouter
];

/**
 * 路由配置；
 * 路由模式和列表配置;
 */
const RouterCfg={
    mode: 'history',
    routes: Routers
}

/**
 * 创建路由实例;
 */

const RouterInstance = new VueRouter(RouterCfg);


export default RouterInstance;

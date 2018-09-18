import Vue from 'vue';
import iView from 'iview';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import './style.css';

import VueRouterInstance from './routers/vue-router'
import store from './store/about_me_store';

/**
 * 使用iView插件;
 */
 
 
Vue.use(iView);

new Vue({
    el: '#app',
    router: VueRouterInstance,
    //使用vuex;
    store: store,
    render: h => {
        return h(App)
    }
});
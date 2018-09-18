import Vue from 'vue';
import Vuex from 'vuex';

/**
 * 使用Vuex插件;
 */
Vue.use(Vuex)

/**
 * 各个组件的数据模块;
 */
const module_about_me = { //组件间流通的数据;
    state: {
        isShowAboutMe: false
    },
    mutations: { //数据更新的方法;
        switchState4AbutMe(state) {
            state.isShowAboutMe = !state.isShowAboutMe;
        }
    } //数据更新的方法;
}

/**
 * 创建Vuex.Store的实例;
 */
const store = new Vuex.Store({
    modules: {
        about_me: module_about_me
    }
});

export default store;
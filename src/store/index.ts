import Vue from 'vue';
import Vuex from 'vuex';
import Global from './global';

Vue.use(Vuex);
const store = new Vuex.Store({
    modules:{
      Global
    }
})
export default store;

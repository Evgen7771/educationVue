import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
 
export 
const store = new Vuex.Store({
    state: {
        results: []
    },
    getters: {
        todo: state => {
            return state.results;
        }
    },
    mutations: {
        set(state, { type, items }){
            state[type] = items;
        }
    },
    actions: {
        getData({ state, commit }){
            axios.get('db/test.json')
                .then(response => {
                    commit('set', {type: 'results', items: response.data});
                })
                .catch(e => {
                    console.log(e);
                });
        }
    }
});
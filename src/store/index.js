import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import Service from '@/service';
const ajax = new Service()

export default class CreateStore {
    
    constructor() {
        return new Vuex.Store({
            state: {
                dataList: []
            },
            actions: {
                fetchDataList({ commit }, params) {
                    return ajax.queryCacheData(params).then(response => {
                        commit('SETDATALIST', response.content.map(e => e.cacheData))
                    })
                }
            },
            mutations: {
                SETDATALIST(state, value) {
                    state.dataList = value;
                }
            }
        })
    }

}
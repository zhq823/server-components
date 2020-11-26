import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { fetchItem } from '../api'

export default class CreateStore {
    
    constructor() {
        return new Vuex.Store({
            state: {
                items: {}
            },
            actions: {
                fetchItem ({ commit }, id) {
                    return fetchItem(id).then(item => {
                        commit('setItem', { id, item })
                    })
                }
            },
            mutations: {
                setItem (state, { id, item }) {
                    Vue.set(state.items, id, item)
                }
            }
        })
    }

}
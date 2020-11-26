import Vue from 'vue'
import App from './App.vue'
import CreateRouter from './router'
import CreateStore from './store'
import { sync } from 'vuex-router-sync'

export default class CreateApp {

    constructor() {
        this.init()
    }

    init() {
        const router = new CreateRouter()
        const store = new CreateStore()
        sync(store, router)

        const app = new Vue({
            router,
            store,
            render: h => h(App)
        })
        this.app = app;
        this.router = router;
        this.store = store;
    }

}
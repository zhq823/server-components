import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default class CreateRouter {

    constructor() {
        return new Router({
            mode: 'history',
            routes:[{
                path: '/',
                component: () => import('@/views/Home.vue')
            }, {
                path: '/EventList',
                component: () => import('@/views/EventList.vue')
            }, {
                path: '/carList',
                component: () => import('@/components/carList')
            }, {
                path: '/mealList',
                component: () => import('@/components/mealList')
            }, {
                path: '/venueList',
                component: () => import('@/components/venueList')
            }]
        })
    }

}
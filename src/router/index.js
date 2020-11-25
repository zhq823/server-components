import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        routes:[{
            path: '/',
            component: () => import('@/views/Home.vue')
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
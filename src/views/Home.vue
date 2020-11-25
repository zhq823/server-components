<template>
    <section>
        <template v-for="(item, index) in componentList">
            <div @click="onClick(item)" :key="index" style="margin: 10px auto;padding: 8px;width: 200px;background: #4E6EF2;color: white;text-align: center;cursor:pointer;border-radius:4px">
                {{ item.label }}
            </div>
        </template>
    </section>
</template>

<script>
    import { carList, mealList, venueList } from '@/components'
    export default {
        name: 'home',
        components: {
            carList,
            mealList,
            venueList
        },
        data() {
            return {
                componentList: [{
                    label: "车供应商列表",
                    path: "/carList"
                },{
                    label: "餐供应商列表",
                    path: "/mealList"
                },{
                    label: "酒店供应商列表",
                    path: "/venueList"
                }]
            }
        },
        methods: {
            onClick(item) {
                console.log(item)
                this.$router.push({
                    path: item.path
                })
            }
        }
    }
</script>
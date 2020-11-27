<template>
    <section class="container">
        <template v-for="(item, index) in componentList">
            <div :data-props="JSON.stringify(item)" onclick="EMIT_SELECT(event)" class="itemBox" :key="index">
                {{ item.label }}
            </div>
        </template>
    </section>
</template>

<script>
    import { carList, mealList, venueList } from "@/components";
    export default {
        name: "home",
        components: {
            carList,
            mealList,
            venueList,
        },
        data() {
            return {
                componentList: [
                    {
                        label: "车供应商列表",
                        path: "/carList",
                    },
                    {
                        label: "餐供应商列表",
                        path: "/mealList",
                    },
                    {
                        label: "酒店供应商列表",
                        path: "/venueList",
                    },
                ],
            };
        }
    }
</script>

<style scoped lang="scss">
    .container {
        border: 1px solid red;
        .itemBox {
            margin: 10px auto;
            padding: 8px;
            width: 200px;
            background: #4e6ef2;
            color: white;
            text-align: center;
            cursor: pointer;
            border-radius: 4px;
            color: orange;
        }
    }
</style>
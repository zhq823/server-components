<template>
    <div class="itemBox" @click="onBack()">
        《 {{ title }}
    </div>
</template>

<script>
    export default {
        name: "mealList",
        data() {
            return {
                title: "餐供应商列表"
            }
        },
        methods: {
            onBack() {
                this.$router.push("/")
            }
        }
    }
</script>

<style scoped lang="scss">
    .itemBox {
        margin: 10px auto;
        padding: 8px;
        width: 200px;
        background: #4e6ef2;
        color: white;
        text-align: center;
        cursor: pointer;
        border-radius: 4px;
    }
</style>


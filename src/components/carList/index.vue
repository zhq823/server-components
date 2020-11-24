<template>
    <div class="containerBox">
        <div class="title">{{ title }}</div>
    </div>
</template>

<script>
export default {
    name: "carList",
    data() {
        return {
            title: "车供应商列表"
        }
    }
}
</script>

<style scoped lang='scss'>
    .containerBox {
        border: 1px solid red;
        .title {
            color: orange;
        }
    }
</style>

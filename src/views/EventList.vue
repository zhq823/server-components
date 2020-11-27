<template>
    <section class="container">
        <template v-for="(item, index) in dataList">
            <div :key="index" :data-props="JSON.stringify(item)" onclick="EMIT_SELECT(event)">{{ item.name }}</div>
        </template>
    </section>
</template>

<script>
    export default {
        asyncData(options) {
            const { route, store } = options || {};
            return store.dispatch("fetchDataList", {
                pageIndex: 1,
                pageSize: 10,
                filters: {
                    flowCode: "TMIS-Ipsen",
                    keyword: "",
                },
            });
        },
        computed: {
            dataList() {
                return this.$store.state.dataList;
            },
        },
    };
</script>

<style scoped lang="scss">
    .container {
        border: 1px solid red;
    }
</style>
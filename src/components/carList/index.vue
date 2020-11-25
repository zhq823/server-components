<template>
    <div @click="onBack()" style="margin: 10px auto;padding: 8px;width: 200px;background: #4E6EF2;color: white;text-align: center;cursor:pointer;border-radius:4px">
        《 {{ title }}
    </div>
</template>

<script>
export default {
    name: "carList",
    data() {
        return {
            title: "车供应商列表"
        }
    },
    methods: {
        onBack() {
            this.$router.push("/")
        }
    }
}
</script>

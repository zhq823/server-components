<template>
    <section>
        <car-list></car-list>
        <meal-list></meal-list>
        <venue-list></venue-list>
    </section>
</template>

<script>
    import { carList, mealList, venueList } from './components'
    export default {
        name: 'home',
        components: {
            carList,
            mealList,
            venueList
        }
    }
</script>

<style>

</style>
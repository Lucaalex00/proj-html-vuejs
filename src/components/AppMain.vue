<script>
import AppJumbotron from './AppJumbotron.vue';
import AppShowCars from './AppShowCars.vue';
export default {
    name: "AppMain",
    components: {
        AppJumbotron,
        AppShowCars,
    },
    data() {
        return {

        }
    }
}
</script>
<template>
    <AppJumbotron />
    <AppShowCars />
</template>

<style scoped>

</style>

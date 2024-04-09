<script>
import AppJumbotron from './AppJumbotron.vue';
import AppShowCars from './AppShowCars.vue';
import AppSaleCar from './AppSaleCar.vue';
import AppFeedback from './AppFeedback.vue';
export default {
    name: "AppMain",
    components: {
        AppJumbotron,
        AppShowCars,
        AppSaleCar,
        AppFeedback,
    },
    data() {
        return {
            cars:[
                {
                    path:
                        "bmw-8-series-convertible-technical-data-sp-desktop-400x300.jpg", 
                    name: "BMW M9",
                    type: "Cabrio",
                    cost: "34.000",
                    brand: "BMW",
                    alimentation: "Electric"
                },
                {
                    path: "bmw88-400x300.jpg",
                    name: "BMW M8",
                    type: "Cabrio",
                    cost: "34.000",
                    brand: "BMW",
                    alimentation: "Diesel"
                },
                {
                    path:"bmw442-400x300.jpg",
                    name: "BMW 4",
                    type: "Cabrio",
                    cost: "34.000",
                    brand: "BMW",
                    alimentation: "Gasoline"
                },
                {
                    path:"yeni-ibiza-2-400x300.jpg",
                    name: "Seat Ibiza",
                    type: "Hatchback",
                    cost: "27.000",
                    brand: "Seat",
                    alimentation: "Electric"
                },

                {
                    path:"makyajli-2022-seat-arona-1-400x300.jpg",
                    name: "Seat Arona",
                    type: "SUV",
                    cost: "68.000",
                    brand: "Seat",
                    alimentation: "Gasoline"
                },
                {
                    path:"vw-taigo3832-400x300.jpg",
                    name: "Volkswagen Taigo",
                    type: "SUV",
                    cost: "52.000",
                    brand: "Volkswagen",
                    alimentation: "Electric"
                },
                {
                    path:"2019-vw-t-cross-400x300.jpg",
                    name: "Volkswagen T-Cross",
                    type: "Suv",
                    cost: "47.000",
                    brand: "Volkswagen",
                    alimentation: "Diesel"
                },
                {
                    path:"volkswagen-passat-1280x720-1-400x300.jpg",
                    name: "Volkswagen Passat",
                    type: "Sedan",
                    cost: "32.000",
                    brand: "Volkswagen",
                    alimentation: "Diesel"
                },
            ],
            feedbackCard:
            [
                {
                    name: "Adam",
                    feedbackText: "We are a gallery vehicle dealer. Before we met this site, our sales were sluggish",
                    imgPath:"man1.png",
                },
                {
                    name: "Cristian",
                    feedbackText: "One of the quality websites i apply to rent a car. There are hundreds of different tools",
                    imgPath: "testimonial2-1.png",
                },
                {
                    name: "Robert",
                    feedbackText: "I was trying to sell my car. And i put it here and sold it for more than it was worth.",
                    imgPath: "man2.png",
                },
                {
                    name: "Elizabeth",
                    feedbackText: "A fast and reliable vehicle selling site. Rare quality website with hundreds of model vehicles",
                    imgPath: "testimonial4-1.png",
                    },
            ],
        }
    }
}
</script>
<template>
    <AppJumbotron />
    <AppShowCars :cars="cars" />
    <AppSaleCar />
    <AppFeedback :feedbackCard="feedbackCard" />
</template>

<style scoped>

</style>

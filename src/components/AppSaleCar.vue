<script>
    export default {
    name: "AppSaleCar",
    }
</script>
<template>
    <div id="site_sale_car">
        <div class="img_container">
            <img src="../assets/img/aoutcar-about-1.png" alt="Example's Car">

        </div>
        <!-- /.img_container -->
        <div class="info_container">
            <h1>Want to buy or sell a vehicle ?</h1>
            <p>You can put your vehicles for sale by registering on our website. Whether you are a dealer or sell personally, which has millions of members, you will be able to buy and sell vehicles quickly.</p>
            <img src="../assets/img/divider.jpg" alt="Divider">
        </div>
        <!-- /.info_container -->

    </div>
    <!-- /#site_sale_car -->

</template>


<style scoped>
    #site_sale_car{
        width: 60%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        >.img_container{
            width: 60%;
            background-image: url(../assets/logos/circle-auto-car-1.png);
            background-position: left;
            background-size: cover;
            >img{
                width: 100%;
            }
        };
        >.info_container{
            font-family: "Open Sans", sans-serif; 
            font-size: 0.7rem;
            width: 40%;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            letter-spacing: 1px;
            >img{
                width: 40%;
            }
        }
    }

</style>
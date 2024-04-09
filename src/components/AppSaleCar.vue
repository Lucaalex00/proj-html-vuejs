<script>
    export default {
    name: "AppSaleCar",
    }
</script>
<template>
    <div id="site_sale_car">
        <div class="img_container">
            <img src="../assets/img/aoutcar-about-1.png" alt="Example's Car">
            <div class="badge badge_top">
                <span>
                    <div class="n">24</div> Years of Experience
                </span>
            </div>
            <div class="badge badge_bottom">
                <span>
                    <div class="n">240</div> Spcial Expert Team
                </span>
            </div>
        </div>
        <!-- /.img_container -->
        <div class="info_container">
            <h1>Want to buy or sell a vehicle ?</h1>
            <p>You can put your vehicles for sale by registering on our website. Whether you are a dealer or sell
                personally, which has millions of members, you will be able to buy and sell vehicles quickly.</p>
            <img src="../assets/img/divider.jpg" alt="Divider">
            <div class="category_info">
                <div class="logo">
                    <i class="fa-solid fa-car"></i>
                </div>
                <div class="info">
                    <h3>Model Vehicles</h3>
                    <p> We are sure that you will find vehicles of suitable models on our website.</p>
                </div>
            </div>
            <!-- /.category_info -->

            <div class="category_info">
                <div class="logo">
                    <i class="fa-solid fa-car-burst"></i>
                </div>
                <div class="info">
                    <h3>2nd Hand Vehicles</h3>
                    <p> You can put your used vehicles for sale by adding them to our website</p>
                </div>
            </div>
            <!-- /.category_info -->
            <button>Get to know us <i class="fa-solid fa-arrow-right"></i></button>
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
        gap: 2rem;
        >.img_container{
            width: 50%;
            background-image: url(../assets/logos/circle-auto-car-1.png);
            background-size: cover;
            position: relative;
            >img{
                width: 100%;
            };
            >.badge{
                position: absolute;
                background-color: var(--darkest-color);
                color: var(--lighter-color);
                width: 140px;
                height: 140px;
                border-radius: 50%;
                transition: 1000ms;
                &:hover{
                    color: var(--darkest-color);
                    background-color: var(--lighter-color);
                    border: 1px solid var(--darkest-color);
                }
                >span{
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    text-align: center;
                    font-size: 0.7rem;
                    font-weight: bold;
                    >.n{
                        text-align: center;
                        font-size: 2.5rem;
                    };
                }
                &.badge_top{
                    top:0;
                    left: 0;
                }
                &.badge_bottom{
                    bottom: 0;
                    right: 0
                }
            }
        };
        >.info_container{
            font-family: "Open Sans", sans-serif; 
            font-size: 0.7rem;
            width: 50%;
            display: flex;
            flex-direction: column;
            gap: 0.2rem;
            padding: 0.5rem;
            letter-spacing: 1px;
            >img{
                margin:0.5rem 0;
                width: 30%;
            };
            .category_info{
                display: flex;
                font-size: 1rem;
                padding: 0.5rem;
                gap: 0.8rem;
                >.logo{
                    font-size: 3rem;
                }
                >.info{
                    gap: 0.5rem;
                    display: flex;
                    flex-direction: column;
                    >h3{
                        font-size: 0.9rem;
                    }
                    >p{
                        font-size: 0.7rem;
                    };
                };
            };
            >button{
                background-color: var(--darkest-color);
                color: var(--lighter-color);
                width:50%;
                padding: 1rem 0.5rem;
                cursor: pointer;
                transition: 500ms;
                font-weight: bold;
                &:hover{
                    background-color: var(--dark-color);
                    color: var(--darkest-color);
                }
            }
        };
    };

</style>
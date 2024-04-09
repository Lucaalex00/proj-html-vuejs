<script>
    export default {
    name: "showCarsComponent",
    props: {
            cars:Array,
        }
        
    }
</script>

<template>
    <div id="site_search_cars">
        <div class="select_cars">
            <div class="field">
                <a href="#">Keywords</a>
            </div>
            <div class="field">
                <a href="#">Location</a>
            </div>
            <div class="field">
                <a href="#">All Categories</a>
                <i class="fa-solid fa-caret-down"></i>
            </div>
            <div class="field">
                <a href="#">Brands</a>
                <i class="fa-solid fa-caret-down"></i>
            </div>
            <div class="field">
                <a href="#">Fuel type</a>
                <i class="fa-solid fa-caret-down"></i>
            </div>
            <div class="field">
                <a href="#">Trasmission</a>
                <i class="fa-solid fa-caret-down"></i>
            </div>
            <div class="field">
                <a href="#">Status</a>
                <i class="fa-solid fa-caret-down"></i>
            </div>
            <div class="field field_search">
                <a href="#">Search</a>
            </div>
        </div>
        <!-- /.select_cars -->
        <div class="category_container">
            <div class="card">
                <img src="../assets/img/cabrio.jpg" alt="Cabrio">
                <div>Cabrio</div>
                <div class="listings">3 Listings</div>
            </div>
            <div class="card">
                <img src="../assets/img/coupe.jpg" alt="Coupe">
                <div>Coupe</div>
                <div class="listings">0 Listings</div>
            </div>
            <div class="card">
                <img src="../assets/img/hatchback.jpg" alt="Hatchback">
                <div>Hatchback</div>
                <div class="listings">2 Listings</div>
            </div>
            <div class="card">
                <img src="../assets/img/pickup.jpg" alt="Pickup">
                <div>Pickup</div>
                <div class="listings">0 Listings</div>
            </div>
            <div class="card">
                <img src="../assets/img/sedan.jpg" alt="Sedan">
                <div>Sedan</div>
                <div class="listings">3 Listings</div>
            </div>
            <div class="card">
                <img src="../assets/img/suv.jpg" alt="Suv">
                <div>Suv</div>
                <div class="listings">4 Listings</div>
            </div>
        </div>
        <!-- /.category_container -->
        <div class="show_cars">
            <div class="row">
                <div class="card" v-for="car in cars">
                    <img :src="`../src/assets/img/${car.path}`" :alt="`${car.type}`">
                    <div> {{car.name}} <i class="fa-solid fa-circle-check"></i></div>
                    <div> {{ car.type }}</div>
                    <div class="card_details">
                        <span>
                            <i class="fa-solid fa-dollar-sign"></i>
                            <span> {{car.cost}}$</span>
                        </span>
                        <span>
                            <i class="fa-solid fa-car"></i> <span> {{ car.brand }}</span>
                        </span>
                        <span>
                            <i class="fa-solid fa-gas-pump"></i>
                            <span> {{car.alimentation}}</span>
                        </span>
                    </div>
                    <i class="fa-solid fa-heart"></i>
                </div>
            </div>
        </div>
        <!-- /.show_cars -->
        <button>Show all Cars <i class="fa-solid fa-arrow-right"></i></button>

    </div>
    <!-- /#site_search_cars -->
</template>


<style scoped>

#site_search_cars{
    width: 80%;
    margin: auto;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    >.select_cars{
        display: flex;
        justify-content: space-between;
        >.field{
            border: 1px solid var(--dark-color);
            padding: 1rem 2rem;
            position: relative;
            box-shadow: 1px 1px black;
            &:hover {
                background-color: var(--dark-color);
                border: 1px solid var(--darkest-color);
            }
            >i{
                position: absolute;
                right: 0;
                padding: 4px;
                font-size: 0.6rem;
                top: 50%;
                transform: translateY(-50%);
            }
            >a{
                text-decoration: none;
                color: var(--darkest-color);
            }
        }
        .field_search{
            background-color: var(--darkest-color);
            >a{
                color: var(--lighter-color);
            }
            &:hover>a{
                color: black;
            }
        }
    }
    >.category_container{
        display: flex;
        >.card{
            width: calc(100% / 6);
            display: flex;
            flex-direction: column;
            align-items: center;
            border: 2px solid var(--dark-color);
            &:hover{
                border: 2px solid black;
            }
            >.listings{
                font-size: 0.8rem;
                color: var(--dark-color);
            }
            >img{
                width: 100%;
            }

        }
    }
    >.show_cars{
        font-family: "Open Sans", sans-serif;
        display: flex;
        flex-wrap: wrap;
        border: 1px solid var(--box-shadow);
        box-shadow: 2px 2px var(--box-shadow);
        >.row{
            display: flex;
            flex-wrap: wrap; 
            position: relative;
            
            >.card{
                box-shadow: 2px 2px var(--box-shadow);  
                width: calc(100% / 4);
                display: flex;
                flex-direction: column;
                align-items: start;
                gap: 0.5rem;
                padding: 0.5rem;
                position: relative;
                &:active{
                    position: absolute;
                    width: 60%;
                    margin: auto;
                    background-color: black;
                    color: white;
                    z-index: 3;
                    }
                >img{
                    width: 100%;
                }
                >div{
                    font-size: 0.8rem;
                }
                >.card_details{
                    display: flex;
                    gap: 0.5rem;
                    >span{
                        display: flex;
                        gap: 0.2rem;
                        >span{
                            font-size: 0.7rem;
                        };
                    };
                };
                >i{
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    padding: 1rem;
                    color: var(--dark-color);
                    &:hover{
                        color: red;
                    }
                }
            }
        }
    }
    >button{
        font-family: "Open Sans", sans-serif;
        font-weight: bold;
        width: 20%;
        margin: auto;
        background-color: var(--darkest-color);
        color: var(--lighter-color);
        padding: 1rem;
        cursor: pointer;
        &:hover{
            color: var(--darkest-color);
            background-color: var(--dark-color);
        }
    }
}
</style>
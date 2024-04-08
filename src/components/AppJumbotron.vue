<script>
    export default {
        name:"AppJumbotron",
    }
</script>

<template>
    <div id="site_jumbo">
        <div class="jumbo_container">
            <div class="jumbo_item">
                <h1>Buy and Sell Your Car At Its Value</h1>
                <p>Find the right price and dealer</p>
                <div class="cta">
                    <div>Learn more </div>
                    <a href="#"><i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            <!-- /.jumbo_item -->
            <a class="a_right" href="#">
                <i class="fa-solid fa-arrow-right"></i>
            </a> 
            <a class="a_left" href="#">
                <i class="fa-solid fa-arrow-left"></i>
            </a>
        </div>
        <!-- /.jumbo_container -->
    </div>
    <!-- /#site_jumbo -->
</template>


<style scoped>
    #site_jumbo {
        background-image: url(../assets/img/slider-autocar-5.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position:center;
        width: calc(100wv - 50px);
        aspect-ratio: 2.3;
        
        >.jumbo_container{
            position: relative;
            height: 100%;
            >.jumbo_item{
                position: absolute;
                top: 30%;
                left:10%;
                width: 40%;
                color: var(--lighter-color);
                >h1{
                    font-size: 4.2rem;

                }
                >p{
                    font-size:1.5rem ;
                    font-weight: bold;
                }
                > .cta{
                    margin: 2rem 1rem;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    >a{
                    text-decoration: none;
                    color: var(--lighter-color);
                    }
                    i{
                        font-size: 1.2rem;
                    }
                }
            };
            >.a_left, >.a_right{
                position: absolute;
                font-size: 2rem;
                color: white;
                bottom: 50%;
                padding: 0 1rem;
                &:hover {
                        color: gray;
                };
            }
            .a_right{
                right: 0;                
            }
            
            .a_left{
                left: 0;
            }
        }
    }
</style>
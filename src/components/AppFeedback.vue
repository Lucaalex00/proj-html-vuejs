<script>
export default {
    name: "AppFeedback",
    props:{
        feedbackCard: Object,
    }
        
    }
</script>
<template>
    <div id="site_feedback">
        <div>
            <div class="info_container">
                <div class="logo">
                    <i class="fa-regular fa-thumbs-up"></i>
                    <div class="stars">
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                </div>
                <h3>What Are Our Customers Saying ?</h3>
                <p>Opinions from our happy customers.</p>
            </div>
            <div class="card_container">
                <div class="card" v-for="fCard in feedbackCard">
                    <div> {{ fCard.feedbackText }}</div>
                    <img :src="`../src/assets/img/${fCard.imgPath}`" :alt="`Image of ${fCard.name}`">
                    <div> {{ fCard.name }} </div>
                </div>
            </div>
            <div class="bar">
                <div class="left_bar"></div>
                <div class="right_bar"></div>
            </div>
        </div>
        <!-- /.info_container -->
    </div>
    <!-- /#site_feedback -->
</template>


<style scoped>
#site_feedback{
    background-image: url(../assets/img/comment-bg-autocar.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    width: calc(100wv - 50px);
    aspect-ratio: 2.3;
    padding: 2rem;
    font-family: "Open Sans", sans-serif;
    >div{
        width: 80%;
        margin: auto;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        >.info_container{
            display: flex;
            flex-direction: column;
            gap: 0.8rem;
            width: 40%;
            margin: auto;
            text-align: center;
            color: var(--lighter-color);
            >.logo{
                display: flex;
                flex-direction: column;
                margin: auto;
                >i{
                    font-size: 2rem;
                    &:hover{
                        color: rgb(236, 201, 1);
                        +.stars{
                            color:rgb(153, 130, 0);
                        }
                    }
                };
                >.stars{
                    font-size: 0.8rem;
                };
            };
            >h3{
                font-size: 1.5rem;
                font-weight: bold;
            };
            >p{
                font-size: 0.7rem;
            };
        };
        >.card_container{
            display: flex;
            width: 100%;
            gap: 1rem;
            >.card{
                width: calc(100% / 4);
                border: 1px solid var(--lighter-color);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 3rem;
                text-align: center;
                padding: 2rem;
                background-color: var(--lighter-color);
                border-radius:10px;
                height: 300px;
                &:hover{
                    border: 1px solid var(--darkest-color);
                    >img{
                        width: 60%
                    }
                    >div{
                        font-size: 0.8rem;
                    }
                }
                >div{
                    font-size: 0.7rem;
                }
                >img{
                    width: 50%;
                }
            }
        }
        >.bar{
            width: 20%;
            margin: auto;
            display: flex;
            gap: 0.5rem;
            height: 6px;
            >.left_bar{
                width: 60%;
                background-color: var(--darkest-color);
                border-radius: 10px;
                &:hover {
                        border: 1px solid var(--dark-color);
                    }
            };
            >.right_bar{
                width: 20%;
                background-color: var(--dark-color);
                border-radius: 10px;
                &:hover{
                    border: 1px solid var(--darkest-color);
                }
            }
        }
    };
};
</style>
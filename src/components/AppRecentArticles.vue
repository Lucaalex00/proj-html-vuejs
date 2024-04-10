<script>
    export default {
        name:"AppRecentArticles",
        props: {
            recentArticles: Array,
        },
    }
</script>
<template>
    <div id="site_recent_a">
        <div>
            <div class="info_container">
                <div class="logo">
                    <i class="fa-regular fa-circle"></i>
                    <div class="logo_item">
                        <i class="fa-regular fa-thumbs-up"></i>
                    </div>
                </div>
                <h3>Resent Articles</h3>
                <p>Useful information about car.</p>
            </div>
            <div class="card_container">
                <div class="card" v-for="recentA in recentArticles">
                    <div class="card_header">
                        <img :src="`../src/assets/img/${recentA.imgPath}`" :alt="`${recentA.title}`">
                        <div class="date">
                            {{ recentA.date }} - {{ recentA.site_name }}
                        </div>
                    </div>
                    <h5 class="title"> {{ recentA.title }}</h5>
                    <div class="desc"> {{ recentA.text }} </div>
                    <a> More </a>
                </div>
            </div>
        </div>
        <!-- /.info_container -->
    </div>
    <!-- /#site_recent_a -->
</template>


<style scoped>
#site_recent_a {
    padding: 2rem;
    font-family: "Open Sans", sans-serif;
    margin-bottom: 5%;

    >div {
        width: 80%;
        margin: auto;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        >.info_container {
            display: flex;
            flex-direction: column;
            gap: 0.8rem;
            width: 40%;
            margin: auto;
            text-align: center;
            color: var(--lighter-color);

            >.logo {
                width: 80px;
                height: 80px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: auto;
                position: relative;
                background-color: var(--darkest-color);
                border-radius: 50%;
                &:hover{
                    >i{
                        color: rgb(167, 119, 0);
                    };
                    >.logo_item{
                        color: rgb(202, 172, 0);
                    }
                }

                >i {
                    font-size: 3.2rem;
                    position: absolute;
                };
                >.logo_item {
                    font-size: 1.6rem;
                };
            };
            >h3 {
                font-size: 1.5rem;
                font-weight: bold;
                color: var(--darkest-color);
            };
            >p {
                font-size: 0.7rem;
                color: var(--darkest-color);
                
            };
        };
        >.card_container {
            display: flex;
            width: 100%;
            gap: 2rem;
            >.card {
                width: calc(100% / 4);
                box-shadow: 1px 1px 1px 1px var(--box-shadow);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 1rem;
                padding: 1rem;
                background-color: var(--header-color);
                border-radius: 10px;
                &:hover {
                    background-color: var(--darkest-color);
                    color: var(--lighter-color);
                    >a{
                        background-color: var(--dark-color);
                        color: var(--darkest-color)
                    };
                };
                >.title {
                    font-size: 1rem;
                };
                >.desc{
                    font-size: 0.7rem;
                }

                >.card_header{
                    text-align: center;
                    >img {
                    width: 100%;
                    }
                    >.date{
                        font-size: 0.7rem;
                    }
                };
                >a{
                    padding: 0.8rem 2rem;
                    background-color: var(--darkest-color);
                    color: var(--lighter-color);
                    border-radius: 2px;
                    border: 0;
                    cursor: pointer;
                    font-size: 0.8rem;
                    &:hover{
                        background-color: var(--dark-color);
                        color: var(--lighter-color)
                    }
                };
            };
        };
    };
};
</style>
<script>
export default {
    name: "AppHeader",
    props: {
        Info: {
            type: Array,
        },
        Cta: {
            type: Array,
        },
        Path: {
            type:Object,
        }
    },
}
</script>
<template>
    <div id="site_header">
        <div class="header_container">
            <div class="header_item" v-for="headerItem in Info">
                <div class="logo_container">
                    <!-- Logo -->
                    <img class="logo" :src="`../src/assets/logos/${Path.logoHeader_path}`" alt="Logo">
                </div>
                <!-- /.logo_container -->
                <div class="header_info">
                    <!-- Anchor Tag for every item -->
                    <a v-for="value in headerItem" :href="value" class="header_link">{{ value }}</a>
                    <!-- Actions -->
                    <div v-for="ctaItem in Cta" class="actions">
                        <a href="#" class="cta">
                            <img :src="`../src/assets/logos/${ctaItem.myAccountLogo}`" alt="">
                            <div>{{ ctaItem.myAccount
                                }}</div>
                        </a>
                        <a href="#site_search_cars" class="cta">
                            <img :src="`../src/assets/logos/${ctaItem.addCarLogo}`" alt="">
                            <div>{{ ctaItem.addCar }}</div>
                        </a>
                        <a class="cta_menu" href="#">
                            <i class="fa-solid fa-bars">

                            </i>
                        </a>
                        <a href="#" class="cta">
                            <img :src="`../src/assets/logos/${ctaItem.phoneNumberLogo}`" alt="">
                            <div>{{
                                ctaItem.phoneNumber
                                }}</div>
                        </a>
                    </div>
                </div>
            </div>
            <!-- /.header_item -->
        </div>
        <!-- /.header_container -->
    </div>
    <!-- /#site_header -->
</template>


<style scoped>
#site_header{
    background-color: var(--lighter-header-color);
    width: 100vw;
    height: 60px;
    position: fixed;
    z-index: 2;
    display: flex;
    >.header_container{
        width: 60%;
        margin: auto;
        >.header_item{
            display: flex;
            justify-content: center;
            >.logo_container{
                display: flex;
                align-items: center;
                >.logo{
                    height: 65px;
                    margin: 0 1rem;
                };
            }
            >.header_info{
               display: flex;
               align-items: center;
               font-size: 0.8rem;
               gap: 0.4rem;
               >.header_link{
                width: 50px;
                text-align: center;
               }
               >a{
                text-decoration: none;
                color: var(--darkest-color);
                &:hover{
                    color: var(--dark-color);
                    background-color: var(--darkest-color);
                }
               }
               .actions{
                display: flex;
                align-items: center;
                gap: 0.5rem;
                >.cta, cta_menu {
                    display: flex;
                    align-items: center;
                    background-color: var(--darkest-color);
                    border-radius: 2px;
                    padding: 0.5rem;
                    width: 100px;
                    gap: 0.2rem;
                    text-decoration: none;
                    color: var(--lighter-color);
                    &:last-child{
                        width: 150px;
                    }
                    &:hover{
                        color: var(--dark-color);
                    }
                        >div{
                            font-size: 0.7rem;
                            
                        }
                        >img{
                            width: 25px;
                            filter: invert(100%);
                        }
                    };
                    >.cta_menu{
                        font-size: 1rem;
                        background-color: transparent;
                        color: var(--darkest-color);
                    }
                };
            };
        };
    };
};

</style>
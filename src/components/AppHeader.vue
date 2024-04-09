<script>
export default {
    name: "AppHeader",
    props: {
        headerInfo: {
            type: Array,
        },
        headerCta: {
            type: Array,
        },
        headerPath: {
            type:Object,
        }
    },
}
</script>
<template>
    <div id="site_header">
        <div class="header_container">
            <div class="header_item" v-for="(headerItem, index) in headerInfo" :key="index">
                <div>
                    <!-- Logo -->
                    <img class="logo" :src="`../src/assets/logos/${headerPath.logoHeader_path}`" alt="Logo">
                </div>
                <!-- LOGO IMAGE -->
                <div class="header_info">
                    <!-- Link per ogni sezione -->
                    <a v-for="value in headerItem" :href="value" class="header_link">{{ value }}</a>
                    <!-- Azioni -->
                    <div v-for="ctaItem in headerCta" class="actions">
                        <a href="#" class="cta">
                            <img :src="`../src/assets/logos/${ctaItem.myAccountLogo}`" alt=""><div>{{ ctaItem.myAccount
                                }}</div>
                        </a>
                        <a href="#" class="cta">
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
        </div>
    </div>
</template>


<style scoped>
#site_header{
    background-color: var(--lighter-header-color);
    width: 100vw;
    height: 45px;
    position: fixed;
    z-index: 2;
    display: flex;
    >.header_container{
        width: 60%;
        margin: auto;
        >.header_item{
            display: flex;
            justify-content: space-around;
            .logo{
                height: 50px;
            };
            >.header_info{
               display: flex;
               align-items: center;
               font-size: 0.8rem;
               margin-bottom: 10px;
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
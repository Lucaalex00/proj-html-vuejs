<script>
import {headerInfoState} from "../store/headerInfoState"
export default {
    name: "AppHeader",
    data() {
        return {
            headerInfoState,
            hInfo: headerInfoState.headerInfo
            /* ... */
        }
    },
    mounted() {
        console.log(this.hInfo)
    }
}
</script>
<template>
    <div id="site_header">
        <div class="header_container">
            <div class="header_item" v-for="headerItem in hInfo">
                <div>
                    <img class="logo" :src="`../src/assets/logos/${headerItem.info.logoHeader_path}`" alt="Logo">
                </div>
                <div class="header_info">
                    <div>
                        {{ headerItem.info.homeString }}
                    </div>
                    <div>
                        {{ headerItem.info.aboutString }}
                    </div>
                    <div>
                        {{ headerItem.info.vehiclesString }}
                    </div>
                    <div>
                        {{ headerItem.info.dealersString }}
                    </div>
                    <div>
                        {{ headerItem.info.packagesString }}
                    </div>
                    <div>
                        {{ headerItem.info.blogString }}
                    </div>
                    <div>
                        {{ headerItem.info.contactString }}
                    </div>
                    <div class="actions">
                        <a class="cta" href="#">
                            <img :src="`../src/assets/logos/${headerItem.actions.myAccountLogo}`" alt="">{{
                            headerItem.actions.myAccount }}</a>
                        <a class="cta" href="#">
                            <img :src="`../src/assets/logos/${headerItem.actions.addCarLogo}`" alt="">{{
                            headerItem.actions.addCar }}</a>
                        <a href="#"><i class="fa-solid fa-bars"></i></a>
                        <a class="cta" href="#">
                            <img :src="`../src/assets/logos/${headerItem.actions.phoneNumberLogo}`" alt="">{{
                            headerItem.actions.phoneNumber }}</a>
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
    background-color: var(--dark-color);
    width: 100vw;
    height: 50px;
    position: fixed;
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
               gap: 1rem;
               .actions{
                display: flex;
                align-items: center;
                gap: 1rem;
                .cta{
                    display: flex;
                    gap: 0.5rem;
                    background-color: var(--darkest-color);
                    padding: 0.3rem;
                    text-decoration: none;
                    color: var(--lighter-color);
                        >img{
                            width: 15px;
                            filter: invert(100%)
                        }   
                    };
                };
            };
        };
    };
};

</style>
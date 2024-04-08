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
                        <a class="cta" href="#">{{ headerItem.actions.myAccount }}</a>
                        <a class="cta" href="#">{{ headerItem.actions.addCar }}</a>
                        <i class="fa-solid fa-bars"></i>
                        <a class="cta" href="#">{{ headerItem.actions.phoneNumber }}</a>
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
               gap: 1.2rem;
               .actions{
                display: flex;
                align-items: center;
                gap: 1rem;
               .cta{
                background-color: var(--darkest-color);
                padding: 0.5rem;
                text-decoration: none;
                color: var(--lighter-color)
                    }
                };
            };
        };
    };
};

</style>
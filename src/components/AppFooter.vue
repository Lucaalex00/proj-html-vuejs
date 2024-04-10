<script>
    export default {
    name: "AppFooter",
        props: {
            Info:Array,
            Contacts: Array,
            Path: Object,
            Socials: Array,
            MyAccount: Array,
            QuickLinks: Array,
        }
        
    }
</script>
<template>
    <div id="site_footer">
        <div class="footer_container">
            <ul v-for="contactItem in Contacts">
                <li class="contacts">
                    <img :src="`../src/assets/logos/${Path.logoFooter_path}`" alt="Logo">
                    <div class="contact_item">
                        <i v-if="contactItem.addressIcon" :class="`${contactItem.addressIcon}`"></i>
                        <div>{{ contactItem.address }}</div>

                    </div>
                    <div class="contact_item">
                        <i v-if="contactItem.phoneNumberIcon" :class="`${contactItem.phoneNumberIcon}`"></i>
                        <div>{{ contactItem.phoneNumber }}</div>
                    </div>
                    <div class="contact_item">
                        <i v-if="contactItem.emailIcon" :class="`${contactItem.emailIcon}`"></i>
                        <div>{{ contactItem.email }}</div>
                    </div>
                    <div class="socials">
                        <i v-for="social in Socials" :class="`${social}`"></i>
                    </div>
                </li>
                <!-- /.contacts -->

            </ul>
        </div>
        <!-- /.footer_container -->
    </div>
    <!-- /#site_footer -->
</template>


<style scoped>
    #site_footer{
        background-color: var(--darkest-color);
        >.footer_container{
            width: 80%;
            display: flex;
            justify-content: space-between;
            margin: auto;
            padding: 2rem 0;
            >ul{
                display: flex;
                flex-direction: column;
                >li{
                    color: var(--lighter-color);
                    >img{
                        width: 30%;
                    };
                };
                >.contacts{
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    >.contact_item{
                        display: flex;
                        gap: 1rem;
                        align-items:end;
                        >div{
                            text-decoration: none;
                            color: var(--lighter-color);
                            font-size: 0.7rem
                        };
                        >i{
                            font-size: 1.3rem;
                            color: var(--darkest-color);
                            text-shadow: 2px 2px var(--lighter-color)
                        }
                    }
                    >.socials{
                        display: flex;
                        gap: 2rem;
                    }
                };
            };
        };
    };
</style>
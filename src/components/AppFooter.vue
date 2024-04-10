<script>
    export default {
    name: "AppFooter",
        props: {
            Info:Array,
            Contacts: Array,
            Path: Object,
            Socials: Object,
            MyAccount: Array,
            QuickLinks: Array,
        }
        
    }
</script>
<template>
    <div id="site_footer">
        <div class="footer_container">
            <ul class="contacts" v-for="contactItem in Contacts">
                <li>
                    <img :src="`../src/assets/logos/${Path.logoFooter_path}`" alt="Logo">
                    <div class="contact_item">
                        <i v-if="contactItem.addressIcon" :class="`${contactItem.addressIcon}`"></i>
                        <div>{{ contactItem.address }}</div>
                    </div>
                </li>
                <li>
                    <div class="contact_item">
                        <i v-if="contactItem.phoneNumberIcon" :class="`${contactItem.phoneNumberIcon}`"></i>
                        <div>{{ contactItem.phoneNumber }}</div>
                    </div>
                </li>
                <li>
                    <div class="contact_item">
                        <i v-if="contactItem.emailIcon" :class="`${contactItem.emailIcon}`"></i>
                        <div>{{ contactItem.email }}</div>
                    </div>
                </li>
                <li>
                    <div class="socials">
                        <a href="#" v-for="social in Socials" :class="`${social}`"></a>
                    </div>
                </li>

            </ul>
            <!-- /.contacts -->
            <ul class="newsletter">
                <li class="newsletter_item">
                    <h3>Join Our Newsletter</h3>
                    <p>Subscribe to be informed about our services and products.</p>
                    <div class="actions">
                        <input type="text" placeholder="Your Email Address">
                        <button class="subscribe">Subscribe <i class="fa-solid fa-arrow-right"></i> </button>
                    </div>
                </li>
            </ul>
            <!-- /.newsletter -->
            <div class="nav_footer">
                <ul class="my_account" v-for="myAccItem in MyAccount">
                    <li>
                        <h3>My Account</h3>
                    </li>
                    <li class="my_account_item" v-for="myAccValue in myAccItem">
                        <a href="#">
                            {{myAccValue}}
                        </a>
                    </li>
                </ul>
                <ul class="quick_links" v-for="quickLinkItem in QuickLinks">
                    <li>
                        <h3>Quick Links</h3>
                    </li>
                    <li class="quick_links_item" v-for="quickLValue in quickLinkItem">
                        <a href="#">
                            {{ quickLValue }}
                        </a>
                    </li>
                </ul>
                <!-- /.my_account -->
            </div>
            <!-- /.nav_footer -->
        </div>
        <!-- /.footer_container -->
        <div class="credits">
            <i class="fa-regular fa-copyright"></i>
            2022 Autocar - All Right Reserved.
            <a href="https://github.com/Lucaalex00"
            target="_blank" id="my_credits">Made by Luca Cirio</a>
        </div>
        <!-- /.credits -->
    </div>
    <!-- /#site_footer -->
</template>


<style scoped>
    #site_footer{
        background-color: var(--darkest-color);
        font-family: "Open Sans", sans-serif;
        position: relative;
        >.footer_container{
            width: 100%;
            margin: auto;
            display: flex;
            justify-content: center;
            padding: 2rem 0;
            gap: 1rem;
            >.contacts{
                color: var(--lighter-color);
                list-style: none;
                display: flex;
                flex-direction: column;
                gap: 1rem;
                width: calc(100% / 4);
                >li>img {
                    width: 50%;
                    margin-bottom: 1rem
                };
                >li>.contact_item{
                    display: flex;
                    gap: 0.5rem;
                    align-items:end;
                    >div{
                        text-decoration: none;
                        color: var(--lighter-color);
                        font-size: 0.8rem;
                    };
                    >i{
                        font-size: 1.3rem;
                        color: var(--darkest-color);
                        text-shadow: 2px 2px var(--lighter-color)
                    }
                }
                >li>.socials{
                    display: flex;
                    padding: 0 1rem ;
                    gap: 2rem;
                    >a{
                        font-size: 1.2rem;
                        color: var(--lighter-color);
                        text-decoration: none;
                        &:hover{
                            color: var(--dark-color)
                        }
                    }
                }
            };
            >.newsletter{
                list-style: none;
                color: var(--lighter-color);
                width: calc(100% / 3);
                    .newsletter_item{
                        gap: 0.5rem;
                        display: flex;
                        flex-direction: column;
                        >p{
                            font-size: 0.7rem;
                            margin-bottom: 1rem
                        };
                        >.actions{
                        display: flex;
                        flex-direction: column;
                        width: 90%;
                        gap: 0.2rem;
                        >input, >button{
                            border: 0;
                            border-radius: 2px;
                            height: 50px;
                            padding: 20px;
                            width: 80%;
                            &+button{
                                color:var(--dark-color);
                                cursor: pointer;
                                transition: 500ms;
                                &:hover{
                                    background-color: var(--dark-color);
                                    color: var(--darkest-color)
                                }
                            };
                        };
                    };
                };
            };
            >.nav_footer{
                padding: 0 2rem ;
                gap: 5rem;
                display: flex;
                justify-content: space-between;
                >.my_account, .quick_links{
                    color: var(--lighter-color);
                    list-style-type: none;
                    >li:first-child{
                        margin-bottom: 0.5rem;
                    }
                    >.my_account_item, .quick_links_item{
                        font-size: 0.8rem;
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                        &::before{
                            content: '-';
                            font-weight: bold;
                            font-size: 1.3rem;

                        };
                        >a{
                            color: var(--lighter-color);
                            text-decoration: none;
                            &:hover{
                                color: var(--dark-color)
                            };
                        };
                    };
                };
            };
        };
        >.credits{
            padding: 2rem;
            font-size: 0.8rem;
            color: var(--lighter-color);
            text-align: center;
            > #my_credits{
                position: absolute;
                bottom:1rem;
                right: 1rem;
                color: var(--lighter-color);
                text-decoration: none;
                transition: 1000ms;
                &:hover{
                    font-size: 1rem;
                    color: red;
                };
            };
        };
    };
</style>
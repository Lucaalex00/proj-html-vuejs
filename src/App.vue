<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  data() {
    return {
      Cta: [
        {
          myAccount: "My Account",
          myAccountLogo: "padlock.png",
          addCar: "Add Car",
          addCarLogo: "add.png",
          phoneNumber: "+1 (234) 567 89 10",
          phoneNumberLogo: "headphones.png",

        },
      ],
      Info: [
        {

          homeString: "Home",
          aboutString: "About Us",
          vehiclesString: "Vehicles",
          dealersString: "Dealers",
          packagesString: "Packages",
          blogString: "Blog",
          contactString: "Contact",

        },
      ],
      Socials: 
        {
          facebookLogo: "fa-brands fa-facebook-f",
          instagramLogo: "fa-brands fa-instagram",
          twitterLogo: "fa-brands fa-twitter",
        }
      ,
      Path:
      {
        logoHeader_path: "logo-autocar11.png",
        logoFooter_path: "logo-footer-autocar11.png",
      },
      Contacts: [],
      MyAccount: [],
      QuickLinks: [],
    }
  },
  methods: {
    initializeData() {
      // Initialize Contacts Array
      {
        this.Contacts = [
          {
            addressIcon: "fa-solid fa-location-dot",
            address: "New Jersey, USA",
            phoneNumberIcon: "fa-solid fa-phone-volume",
            phoneNumber: this.Cta[0].phoneNumber,
            emailIcon: "fa-solid fa-envelope",
            email: "example@example.com",
          }
        ];

        // Initialize MyAccount Array
        this.MyAccount = [
          {
            myAccount: this.Cta[0].myAccount,
            checkOut: "Checkout",
            cart: "Cart",
            packages: this.Info[0].packagesString,
            addCar: this.Cta[0].addCar,
          }
        ];

        // Initiliaze QuickLinks Array
        this.QuickLinks = [
          {
            home: this.Info[0].homeString,
            aboutUs: this.Info[0].aboutString,
            blog: this.Info[0].blogString,
            contact: this.Info[0].contactString,
            refundReturns: "Refund & Returns",
          }
        ];
      }
    },
  },
  created() {
    // Invoke Methods to initiliaze ARRAYS
    this.initializeData();
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },

}
</script>

<template>
  <AppHeader :Info="Info" :Cta="Cta" :Path="Path" />
  <AppMain />
  <appFooter :Info="Info" :Contacts="Contacts" :Path="Path" :Socials="Socials" :MyAccount="MyAccount"
  :QuickLinks="QuickLinks" />

</template>

<style scoped></style>

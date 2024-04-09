<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  data() {
    return {
      headerInfo: [
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
      headerCta: [
        {
      myAccount: "My Account",
      myAccountLogo: "padlock.png",
      addCar: "Add Car",
      addCarLogo: "add.png",
      phoneNumber: "+1 (234) 567 89 10",
      phoneNumberLogo: "headphones.png",
      
        },
      ],
      headerPath: {
        logoHeader_path: "logo-autocar11.png",
        logoFooter_path: "logo-footer-autocar11.png",
      },
    }
  },
  components: {
    AppHeader,
    AppMain,
  }
}
</script>

<template>
  <AppHeader :headerInfo="headerInfo" :headerCta="headerCta" :headerPath="headerPath"/>
  <AppMain/>

</template>

<style scoped>

</style>

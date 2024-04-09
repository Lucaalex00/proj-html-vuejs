<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  data() {
    return {
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
      Path: {
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
  <AppHeader :Info="Info" :Cta="Cta" :Path="Path"/>
  <AppMain/>

</template>

<style scoped>

</style>

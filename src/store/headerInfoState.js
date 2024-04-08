import { reactive } from "vue";
export const headerInfoState = reactive({
  headerInfo: [
    {
      info: {
        logoHeader_path: "logo-autocar11.png",
        logoFooter_path: "logo-footer-autocar11.png",
        homeString: "Home",
        aboutString: "About Us",
        vehiclesString: "Vehicles",
        dealersString: "Dealers",
        packagesString: "Packages",
        blogString: "Blog",
        contactString: "Contact",
      },
      actions: {
        myAccount: "My Account",
        myAccountLogo: "padlock.png",
        addCar: "Add Car",
        addCarLogo: "add.png",
        phoneNumber: "+1 (234) 567 89 10",
        phoneNumberLogo: "headphones.png",
      },
    },
  ],
});

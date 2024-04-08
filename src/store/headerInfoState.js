import { reactive } from "vue";
export const headerInfoState = reactive({
  headerInfo: {
    logoHeader: logoHeader_path,
    logoFooter: logoFooter_path,
    info: [
      { homeString: "home" },
      { aboutString: "About Us" },
      { vehiclesString: "Vehicles" },
      { dealersString: "Dealers" },
      { packagesString: "Packages" },
      { blogString: "Blog" },
      { contactString: "Contact" },
    ],
    actions: [
      { myAccount: "My Account" },
      { addCar: "Add Car" },
      { phoneNumber: "+1 (234) 567 89 10" },
      { Menu: '<i class="fa-solid fa-bars"></i>' },
    ],
  },
  logoHeader_path: "/logo-autocar11.png",
  logoFooter_path: "/logo-footer-autocar11.png",
});

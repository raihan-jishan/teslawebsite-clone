import { BiWorld } from "react-icons/bi";
import { MdKeyboardArrowRight, MdOutlineAccountCircle } from "react-icons/md";

export const navData = [
  {
    id: 0,
    name: "Vehicles",
    modelName1: "Model S",
    modelName2: "Model 3",
    modelName3: "Model X",
    modelName4: "Model Y",
    modelName5: "Cybertruck",
    modelName6: "Help Me Choose",
    text1: "Inventory",
    text2: "Used Cars",
    text3: "Demo Drive",
    text4: "Trade-in",
    text5: "Compare",
    text6: "Help Me Charge",
    text7: "Fleet",
    text8: "Semi",
    text9: "Roadster",

    image1:
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png",
    image2:
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-3-Performance-LHD.png",
    image3:
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-X.png",
    image4:
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-Y.png",
    image5:
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Cybertruck-1x.png",
    image6:
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-HMC-RedBlue-LHD.png",
  },
  {
    id: 1,
    name: "Energy",
    modelName1: "Solar Panels",
    modelName2: "Solar Roof",
    modelName3: "Powerwall",
    modelName4: "Megapack",
    text1: "Schedule a Consultation",
    text2: "Why Solar",
    text3: "Support",
    text4: "Partner with Tesla",
    text5: "Commercial",
    text6: "Utilities",

    image1:
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Solar-Panels.png",
    image2:
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Solar-Roof.png",
    image3:
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Powerwall-US.png",
    image4:
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Megapack.png",
  },
  {
    id: 2,
    name: "Charging",
    image1:
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Charging.png",
    image2:
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Home-Charging.png",
    image3:
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Supercharging-NA.png",
    text1: "Help Me Charge",
    text2: "Charging Calculator",
    text3: "Charging With NACS",
    text4: "Supercharger Voting",
    text5: "Host a Supercharger",
    text6: "Commercial Charging",
    text7: "Host Wall Connectors",
    modelName1: "Charging",
    modelName2: "Home Charging",
    modelName3: "Supercharging",
  },
  {
    id: 3,
    name: "Discover",
  },
  {
    id: 4,
    name: "Shop",
    image1:
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Charging.png",
    image2:
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Lifestyle.png",
    image3:
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Apparel.png",
    image4:
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Vehicle-Accessories.png",
    modelName1: "Charger",
    modelName2: "Lifestyle",
    modelName3: "Accessories",
    modelName4: "Vehicle Accessories",
  },
];




export const mobileNavData = [
  {
    id: 0,
    name: "Vehicles",
    icon: <MdKeyboardArrowRight size={25} />,
  },
  {
    id: 1,
    name: "Energy",
    icon: <MdKeyboardArrowRight size={25} />,
  },
  {
    id: 2,
    name: "Charging",
    icon: <MdKeyboardArrowRight size={25} />,
  },
  {
    id: 3,
    name: "Discover",
    icon: <MdKeyboardArrowRight size={25} />,
  },
  {
    id: 4,
    name: "Shop", 
  },
  {
    id: 5,
    name: "Support", 
  },
  {
    id: 6,
    name: "Language",
    sideIcon: <BiWorld size={25} />,
    icon: <MdKeyboardArrowRight size={25} />,
  },
  {
    id: 7,
    name: "Account",
    sideIcon: <MdOutlineAccountCircle size={25} />,
    icon: <MdKeyboardArrowRight size={25} />,
  },
];

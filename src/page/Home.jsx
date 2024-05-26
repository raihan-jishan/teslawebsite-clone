import logo from "../../public/sybertrucklogo.png";
import Hero from "../components/Hero/Hero";
const Home = () => {
  return (
    <div>
      {/* modelY */}
      <Hero
        desktopImageUrl={
          "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Desktop-Global.png"
        }
        modelName={"Model Y"}
        mobileImageUrl={
          "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Mobile-Global.jpg"
        }
        text={"From $299/mo¹ Lease After Est. Gas Savings"}
        afrFinancingPercent={"0.99%"}
        afrFinancingText={"APR Financing"}
      />

      <div className="relative">
        <Hero
          desktopImageUrl={
            "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-LHD-v2.jpg"
          }
          modelName={"Model 3"}
          mobileImageUrl={
            "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Mobile-LHD-v2.jpg"
          }
          text={"After Est. Savings"}
          price={"From $33,990²"}
          style={"m-10 max-lg:text-[0.7rem] text-[0.8rem] font-semibold "}
        />
      </div>
      <div className="relative">
        <Hero
          desktopImageUrl={
            "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-X-Desktop.jpg"
          }
          modelName={"Model X"}
          mobileImageUrl={
            "https://digitalassets.tesla.com/tesla-contents/image/upload/h_1700,w_800,c_fit,f_auto,q_auto:best/Homepage-Model-X-Mobile-LHD_001"
          }
          text={"After Est. Savings"}
          price={"From $63,990³"}
          style={"m-10 max-lg:text-[0.7rem] text-[0.8rem] font-semibold "}
        />
      </div>

      <div className="relative">
        <Hero
          desktopImageUrl={
            "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Desktop-v2.jpg"
          }
          modelName={"Model S"}
          mobileImageUrl={
            "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Mobile-v2.jpg"
          }
          text={"After Est. Savings"}
          price={"From $66,490⁴"}
          style={"m-10 max-lg:text-[0.7rem] text-[0.8rem] font-semibold "}
          textColor={"text-white"}
        />
      </div>

      <div className="relative">
        <Hero
          desktopImageUrl={
            "https://digitalassets.tesla.com/discovery-tesla-com/image/upload/f_auto,q_auto/Homepage-Cybertruck-Desktop.jpg"
          }
          mobileImageUrl={
            "https://digitalassets.tesla.com/discovery-tesla-com/image/upload/f_auto,q_auto/Homepage-Cybertruck-Mobile.jpg"
          }
          style={"m-10 max-lg:text-[0.7rem] text-[0.8rem] font-semibold "}
          logo={logo}
          btnText={"learn more"}
        />
      </div>
      <div className="relative">
        <Hero
          desktopImageUrl={
            "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-SolarPanels-01-Desktop"
          }
          mobileImageUrl={
            "https://digitalassets.tesla.com/tesla-contents/image/upload/h_2100,w_800,c_fit,f_auto,q_auto:best/Homepage-SolarRoof-Mobile"
          }
          modelName={"Solar panels"}
          price={"Schedule a Virtual Consultation"}
          fontSize={"text-[0.8rem]"}
          textColor={"text-white"}
          btnText={"learn more"}
        />
      </div>
      <div className="relative">
        <Hero
          desktopImageUrl={
            "https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-SolarRoof-Desktop-Global"
          }
          mobileImageUrl={
            "https://digitalassets.tesla.com/tesla-contents/image/upload/h_2100,w_800,c_fit,f_auto,q_auto:best/Homepage-SolarRoof-Mobile"
          }
          modelName={"Solar panels"}
          price={"Produce Clean Energy From Your Roof"}
          fontSize={"text-[0.8rem]"}
          btnText={"learn more"}
        />
      </div>
      <div className="relative">
        <Hero
          desktopImageUrl={
            "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Powerwall-01-Desktop.jpg"
          }
          mobileImageUrl={
            "https://digitalassets.tesla.com/tesla-contents/image/upload/h_2100,w_800,c_fit,f_auto,q_auto:best/Homepage-SolarRoof-Mobile"
          }
          modelName={"Powerwall"}
          btnText={"learn more"}
        />
      </div>
      <div className="relative">
        <Hero
          desktopImageUrl={
            "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Accessories-Desktop-NA-APAC.jpg"
          }
          mobileImageUrl={
            "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Accessories-Mobile-NA-APAC.jpg"
          }
          modelName={"Accessories"}
          btnText={"learn more"}
        />
      </div>
    </div>
  );
};

export default Home;

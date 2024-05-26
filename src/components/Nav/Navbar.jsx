/* eslint-disable react/no-children-prop */
import { useState } from "react";
import { AiOutlineGlobal, AiOutlineQuestionCircle } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { mobileNavData, navData } from "../../constance/index.jsx";
import CommonSlider from "../DropdownMenu/Common.jsx";
import MenuPage from "../DropdownMenu/MenuPage.jsx";
import MobileMenu from "../MobileMenu/MobileMenu.jsx";
import Logo from "./Logo.jsx";

const Navbar = () => {
  // initialize the state
  const [click, setClick] = useState(false);
  // handleClick function
  const handleClick = () => setClick(!click);
  // handleClose
  const handleClose = () => setClick(false);

  return (
    <nav>
      <div
        className={
          "max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4  w-full left-0 right-0  absolute z-[999]   ease-in duration-300  "
        }
      >
        {/* brand name */}
        <Logo />
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse  ">
          <div className="flex gap-4 max-lg:hidden">
            <a href="https://www.tesla.com/support" target="_blank">
              <AiOutlineQuestionCircle
                size={25}
                className="hover:bg-gray-100 cursor-pointer ease-in duration-300"
              />
            </a>
            <AiOutlineGlobal
              size={25}
              className="hover:bg-gray-100 cursor-pointer ease-in duration-300"
            />
            <a href="https://auth.tesla.com/en_us/oauth2/v1/authorize?redirect_uri=https%3A%2F%2Fwww.tesla.com%2Fteslaaccount%2Fowner-xp%2Fauth%2Fcallback&response_type=code&client_id=ownership&scope=offline_access%20openid%20ou_code%20email%20phone&audience=https%3A%2F%2Fownership.tesla.com%2F&locale=en-US">
              <VscAccount
                size={25}
                className="hover:bg-gray-100 cursor-pointer ease-in duration-300"
              />
            </a>
          </div>

          {/* for mobile menu */}
          {click ? (
            <button
              className="text-xl m-2 px-2 font-medium rounded-sm py-1 hidden max-lg:block   sm:hidden z-10"
              onClick={handleClose}
            >
              <IoCloseOutline size={35} />
            </button>
          ) : (
            <button
              className="text-[1rem] m-2 bg-gray-300/40 px-2 font-medium rounded-sm py-1 hidden max-lg:block"
              onClick={handleClick}
            >
              Menu
            </button>
          )}
          {/* close  */}
        </div>
        {/* for mobile and desktop navbar */}
        <div
          className={
            " items-center justify-between   w-full md:flex md:w-auto md:order-1  max-lg:hidden   gap-8"
          }
          id="navbar-cta"
        >
          {navData.map((item) => {
            return (
              <CommonSlider
                key={item.id}
                name={item.name}
                children={
                  <MenuPage
                    image1={item.image1}
                    image2={item.image2}
                    image3={item.image3}
                    image4={item.image4}
                    image5={item.image5}
                    image6={item.image6}
                    text1={item.text1}
                    text2={item.text2}
                    text3={item.text3}
                    text4={item.text4}
                    text5={item.text5}
                    text6={item.text6}
                    text7={item.text7}
                    text8={item.text8}
                    text9={item.text9}
                    modelName1={item.modelName1}
                    modelName2={item.modelName2}
                    modelName3={item.modelName3}
                    modelName4={item.modelName4}
                    modelName5={item.modelName5}
                    modelName6={item.modelName6}
                  />
                }
              />
            );
          })}
        </div>
        {/* close */}

        {/* for mobile menu */}
        <MobileMenu
          click={click}
          handleClick={handleClick}
          mobileNavData={mobileNavData}
        />
        {/* close */}
      </div>
    </nav>
  );
};

export default Navbar;

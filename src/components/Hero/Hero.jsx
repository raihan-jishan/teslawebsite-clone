/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Button from "../Button/Button";
const Hero = ({price,afrFinancingPercent, afrFinancingText,desktopImageUrl, mobileImageUrl, modelName, btnText, fontSize,text, style, textColor, logo}) => {
  const smallHeroImage =
    mobileImageUrl;
  const heroImage =
    desktopImageUrl;
  const [imageSrc, setImageSrc] = useState(
    window.innerWidth < 760 ? smallHeroImage : heroImage
  );

  // handleVedeoSrcSet function
  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setImageSrc(smallHeroImage);
    } else {
      setImageSrc(heroImage);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  return (
    <section id="model3" className="w-full h-screen    snap-always snap-start">
      <img
        className="w-full h-full   object-cover "
        src={imageSrc}
        alt="model 3"
      />
      <div className={`   absolute top-[20%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center max-lg:w-full ${textColor ? textColor : "text-black"}`}>
        <h2 className="text-[2.5rem]  font-semibold mt-2 max-lg:mt-16">
          {modelName}
        </h2>
        {/* for image */}
        <img src={logo ? logo : null}   className="w-[25rem] object-cover" />
        {/* close */}
        <a
          href="/"
          className={`${textColor ? textColor : "text-black"} ${fontSize ? fontSize : 'text-xl'} font-semibold  -tracking-tighter   text-slate-800 max-lg:text-[1.5rem]`}
        >
          {price}
          <span className="font-semibold ">  {afrFinancingPercent} </span>
         
          {afrFinancingText}
        </a>
        <br />
        <span className={`${style}`}>
        {text}
        </span>
       
      </div>
    {/* absolute bottom-[5%]  left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col md:flex-row */}
      <div className="absolute bottom-[8%]  left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col md:flex-row gap-7 max-lg:gap-4">
        <Button
          text={" order now"}
          fontWeight={'font-semibold'}
          bg={"bg-white"}
          fontSize={'text-sm'}
          textColor={"text-black"}
        />

        <Button
          text={btnText ? btnText : " Demo Drive"}
          bg={"bg-black/90"}
          fontSize={'text-sm'}
          fontWeight={'font-semibold'}
          textColor={"text-white"}
        />
      </div>

       
    </section>
  );
};

export default Hero;

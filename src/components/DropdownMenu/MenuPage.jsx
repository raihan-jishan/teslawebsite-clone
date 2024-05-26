import ImageCard from "./ImageCard";
// TODO: fix the multiple line code to the separate imports. When code debug.... 
/* eslint-disable react/prop-types */
const MenuPage = ({ 
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
  text9,
  text10,
  text11,
  text12,
  modelName1,
  modelName2,
  modelName3,
  modelName4,
  modelName5,
  modelName6,
}) => {
  return (
    <div className="absolute top-0 right-0 mt-12 left-0 flex gap-10 items-center justify-center   bg-white shadow-sm  transition-all ease-linear p-10  ">
      {/* image container */}
      <div
        className="
      grid grid-cols-3 gap-10 mb-4 mt-10 max-lg:grid-cols-1
        max-sm:flex-col max-sm:gap-3 "
      >
        <ImageCard image={image1} modelName={modelName1} />
        <ImageCard image={image2} modelName={modelName2} />
        <ImageCard image={image3} modelName={modelName3} />
        <ImageCard image={image4} modelName={modelName4} />
        <ImageCard image={image5} modelName={modelName5} />
        <ImageCard image={image6} modelName={modelName6} />
      </div>
      {/* close */}

      <div className="m-5">
        <ul>
          <li className="mt-4 font-semibold hover:underline cursor-pointer hover:font-bold">
            {text1}
          </li>
          <li className="mt-4 font-semibold hover:underline cursor-pointer hover:font-bold">
            {text2}
          </li>
          <li className="mt-4 font-semibold hover:underline cursor-pointer hover:font-bold">
            {text3}
          </li>
          <li className="mt-4 font-semibold hover:underline cursor-pointer hover:font-bold">
            {text4}
          </li>
          <li className="mt-4 font-semibold hover:underline cursor-pointer hover:font-bold">
            {text5}
          </li>
          <li className="mt-4 font-semibold hover:underline cursor-pointer hover:font-bold">
            {text6}
          </li>
          <li className="mt-4 font-semibold hover:underline cursor-pointer hover:font-bold">
            {text7}
          </li>
          <li className="mt-4 font-semibold hover:underline cursor-pointer hover:font-bold">
            {text8}
          </li>
          <li className="mt-4 font-semibold hover:underline cursor-pointer hover:font-bold">
            {text9}
          </li>
          <li className="mt-4 font-semibold hover:underline cursor-pointer hover:font-bold">
            {text10}
          </li>
          <li className="mt-4 font-semibold hover:underline cursor-pointer hover:font-bold">
            {text11}
          </li>
          <li className="mt-4 font-semibold hover:underline cursor-pointer hover:font-bold">
            {text12}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuPage;

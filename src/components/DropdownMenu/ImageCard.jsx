/* eslint-disable react/prop-types */

const ImageCard = ({ image, modelName }) => {
  return (
    <div>
      <img className="w-60" src={image} />
      <span className="text-lg font-semibold flex items-center justify-center">
        {modelName}
      </span>
      <div className="flex gap-4 items-center justify-center">
        <a href="" className="underline hover:font-semibold">
          {modelName ?  "learn" : null}
        </a>
        <a href="" className="underline hover:font-semibold">
         {modelName ?  "order " : null}
        </a>
      </div>
    </div>
  );
};

export default ImageCard;

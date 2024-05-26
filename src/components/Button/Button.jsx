const Button = ({fontSize, text, bg, textColor, fontWeight }) => {
  return (
    <a
      href=""
      className={`${fontSize} capitalize ${textColor} ${bg} w-[16rem] text-center px-20 p-[0.6rem] rounded-xs  max-lg:gap-0 max-lg:mt-0 ${fontWeight} max-lg:w-[21rem] max-lg:top-0`}
    >
      {text}
    </a>
  );
};

export default Button;

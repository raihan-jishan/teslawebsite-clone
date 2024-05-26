const Footer = () => {
  return (
    <footer className="p-16 bg-black text-gray-200   text-[0.8rem] ">
      <h3 className=" flex items-center justify-center max-lg:p-0 ">
        ¹ Excludes taxes and fees with price subject to change. Available in
        select states and requires credit approval.
      </h3>
      <div className="flex items-center justify-center flex-col  ">
        {" "}
        <a className="underline  " href="/">
          {" "}
          Est. gas savings is $100/month.
        </a>
        <a href="/" className="underline">
          See Details
        </a>
      </div>
      {/* 2nd row */}
      <h3 className=" flex items-center justify-center text-sm  mt-5">
        ² Price before estimated savings is $38,990, excluding taxes and fees.
        Subject to change.
      </h3>
      <div className="flex items-center justify-center flex-col  ">
        <a href="/" className="underline">
          Learn about est. gas savings.
        </a>
      </div>

      {/* 3nd row */}
      <h3 className=" flex items-center justify-center text-sm  mt-5">
        ³ Price before estimated savings is $77,990, excluding taxes and fees.
        Subject to change.
      </h3>
      <div className="flex items-center justify-center flex-col  ">
        <a href="/" className="underline">
          Learn about est. gas savings.
        </a>
      </div>
      {/* 4nd row */}
      <h3 className=" flex items-center justify-center text-sm  mt-5">
        ⁴ Price before estimated savings is $72,990, excluding taxes and fees.
        Subject to change.
      </h3>
      <div className="flex items-center justify-center flex-col  ">
        <a href="/" className="underline">
          Learn about est. gas savings.
        </a>
      </div>

      {/* bottom content */}
      <div className="flex items-center justify-center mt-10 text-sm ">
        <ul className="flex gap-3 font-semibold max-lg:flex-col">
          <li>Tesla © 2024</li>
          <li>Privacy & Legal</li>
          <li>Vehicle Recalls</li>
          <li>Contact</li>
          <li>News</li>
          <li>Get Updates</li>
          <li>Locations</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

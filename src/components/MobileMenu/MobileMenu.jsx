 

const MobileMenu = ({click, mobileNavData,handleClose}) => {
  return (
    <div
    className={
      click
        ? "bg-white w-full absolute top-0 bottom-0 left-0  h-screen"
        : "sm:hidden absolute top-0 left-[-100%] ring-0 bottom-0 flex justify-center  items-center w-full h-screen bg-black   "
    }
  >
    <ul className="mt-20">
      {mobileNavData.map((data) => {
        return (
          <li
            className="p-4 font-semibold text-[1rem]       hover:text-gray-50     "
            key={data.id}
          >
            <a
              href={""}
              onClick={handleClose}
              className="flex items-center justify-between  m-2"
            >
              <span className="flex gap-4">
                {data.sideIcon} {data.name}
              </span>
              {data.icon}
            </a>
          </li>
        );
      })}
    </ul>
  </div>
  )
}

export default MobileMenu;
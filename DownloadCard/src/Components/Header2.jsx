import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
const Header = () =>{

  

  const handleClick = (event) => {
    event.preventDefault();
  };

  let Links = [
    { name: "AndroidApp", href: "/" },
    { name: "IOSApp", href: "/" },
    { name: "OurWebsite", href: "/" },
    { name: "AboutUs", href: "/" },
    { name: "Contact", href: "/" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 md:py-2.5 flex justify-center ">
        {" "}
        {/* Added flex and justify-center classes */}
        <div
          onClick={() => setOpen(!open)}
          className="text-4xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <TiThMenu name={open.toString() && "close"} />
        </div>
        <ul
          className={`md:flex md:items-center md:pt-0 md:static md:z-auto md:left-0 md:w-auto md:pl-0 transition-all duration-500 ease-in font-medium lg:space-x-8 lg:mt-1 ${
            open ? "block" : "hidden"
          }`}
        >

          


          {Links.map((link, index) => (
            <li key={index} className="">
              <a
                href={link.href}
                className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                onClick={handleClick}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

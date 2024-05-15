import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa6";

const Header = () => {
  let Links = [
    { name: "Android App", href: "/MainContent" },
    { name: "IOS App", href: "/IOSApp" },
    { name: "Our Website", href: "/OurWebsite" },
    { name: "About Us", href: "/AboutUs" },
    { name: "Contact", href: "/Contact" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <header className="shadow sticky bg-gradient-to-r from-gray-400 to-gray-300 z-50 top-0">
      <nav className="border-gray-200 px-4 lg:px-6 md:py-2.5 flex justify-between ">
        <div
          onClick={() => setOpen(!open)}
          className="text-4xl cursor-pointer md:hidden fixed top-3 left-3 "
        >
          <TiThMenu name={open.toString() && "close"} />
        </div>

        <ul
          className={`mt-10 md:flex md:items-center md:pt-0 md:z-auto md:left-0 md:w-auto md:pl-0 transition-all duration-500 ease-in font-medium lg:space-x-8 lg:mt-1 ${
            open ? "block" : "hidden"
          }`}
        >
          {Links.map((link, index) => (
            <li key={index} className="">
              <Link
                to={link.href}
                className="block py-2 pr-4 pl-1 duration-200 text-black border-b  hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="relative ">
          <button className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-400 p-3 text-1xl font-medium rounded md:static fixed top-3 right-3">
            <span className="hidden md:inline-block">
              <FaDownload className="mr-2" />
            </span>
            <span className="md:hidden">
              <FaDownload className="mr-2" />
            </span>
            <span className="hidden md:inline-block">Download</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

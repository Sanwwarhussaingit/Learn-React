import Img from "./image/mobilelogo.jpg";
import ImgPlaystore from "./image/Playstore.png";
import ImgAppstore from "./image/Appstore2.png";
import { BiLogoPlayStore } from "react-icons/bi";

const MainContent = () => {
  return (
    <main className="md:flex p-2 h-screen bg-gradient-to-r from-gray-400 to-gray-100 overflow-auto">
      {/* Left Column */}
      <div className="md:w-6/12 flex flex-col items-center p-5 ">
        <img
          src={Img}
          alt="Description of your image"
          className="object-cover h-1/2 mb-12 mt-7"
        />
        <h1 className="animate-bounce text-black bg-green-600 hover:bg-green-500 font-bold text-3xl p-4 pl-2 shadow-2xl rounded-full flex justify-center items-center hover:text-4xl mt-10">
          <BiLogoPlayStore className="m-2" />
          EDUWARE
        </h1>
      </div>
      {/* Right Column */}
      <div className="md:w-6/12 p-2 flex flex-col">
        <h1 className="md:m-20 md:text-5xl font-mono text-3xl font-semibold text-green-800 shadow-black p-2 md:item-center">
          <span className="text-red-600 flex hover:text-6xl">Our Mobile</span>
          <span>Application is Available on Android</span>
        </h1>
        <p className="font-bold text-1xl md:text-2xl md:p-7 m-4 shadow-inner text-center font-serif">
          Download now and enjoy our app on your Android device
        </p>

        <div className="flex items-center justify-center md:m-20">
          {/* Playstore Button */}
          <button className="mr-4">
            <img src={ImgPlaystore} alt="Google Play Store" />
          </button>
          {/* Appstore Button */}
          <button>
            <img src={ImgAppstore} alt="Apple App Store" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default MainContent;

import Img from "./image/mobilelogo.jpg";
import ImgPlaystore from "./image/Playstore.png";
import ImgAppstore from "./image/Appstore2.png";
import { BiLogoPlayStore } from "react-icons/bi";

const MainContent = () => {
  return (
    <main className="md:flex bg-gray-100 p-2 pb-16">
      {" "}
      {/* Added pb-16 for padding bottom */}
      {/* Left Column */}
      <div className="md:w-6/12 flex flex-col items-center p-5">
        <img
          src={Img}
          alt="Description of your image"
          className="object-cover h-1/2 mb-12"
        />
        <h1 className="font-bold text-4xl p-6 shadow-2xl rounded-full flex justify-center items-center">
          <BiLogoPlayStore className="m-2" />
          EDUWARE
        </h1>
      </div>
      {/* Right Column */}
      <div className="md:w-6/12 p-2 flex flex-col items-center">
        <h1 className="md:m-20 text-5xl font-semibold text-lime-800 shadow-lime-400 p-2 ">
          Our Mobile Application is Available on Android
        </h1>
        <p className="font-bold text-2xl md:p-7 m-4 shadow-inner text-center">
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

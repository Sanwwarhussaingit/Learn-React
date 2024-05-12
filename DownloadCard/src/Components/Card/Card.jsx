import { IoMdDownload } from "react-icons/io";
export default function Card() {
  return (
    <>
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg flex flex-col ">
        <h1 className="text-3xl font-semibold mb-4 text-center">
          Our App is Available on Android
        </h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Download now and enjoy our app on your Android device!
        </p>
        <div className="flex justify-center items-center">
          <button className=" bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded py-2 px-4 flex items-center ">
            <IoMdDownload className="mr-2" /> Download Now
          </button>
        </div>
      </div>
    </>
  );
}

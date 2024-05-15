import ImgAppstore from "./image/Appstore2.png";

const IOSApp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-gradient-to-r from-gray-400 to-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Our iOS App Coming Soon
      </h1>
      <p className="text-lg text-gray-600 mb-12">
        Get our amazing app from the App Store.
      </p>
      <div className="bg-gradient-to-r from-gray-100 to-gray-400 shadow-lg rounded-lg p-8 flex items-center justify-center">
        <img src={ImgAppstore} alt="App Store" className="w-40" />
        <div className="ml-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">EDUWARE</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            ultricies libero nec ligula dapibus, sed consequat eros malesuada.
          </p>
          <button className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default IOSApp;

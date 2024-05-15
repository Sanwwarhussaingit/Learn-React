const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-gradient-to-r from-gray-400 to-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">About Us</h1>
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl">
        <p className="text-lg text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel
          molestie metus. Nullam vel quam sit amet turpis aliquet commodo.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          Fusce et nibh ligula. Phasellus ac enim nec risus efficitur cursus.
          Morbi eget est id lectus blandit auctor.
        </p>
        <p className="text-lg text-gray-600">
          Vivamus vel vehicula justo. Nulla facilisi. Nullam scelerisque dui in
          turpis aliquet, eget posuere eros tristique.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

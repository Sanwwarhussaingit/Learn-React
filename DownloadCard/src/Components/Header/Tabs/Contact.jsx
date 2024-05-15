const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-gradient-to-r from-gray-400 to-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Contact Us</h1>

      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-9/12">
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-800 font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="number"
              className="block text-gray-800 font-semibold mb-2"
            >
              Contact number
            </label>
            <input
              min={10}
              max={10}
              type="number"
              id="number"
              name="number"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-800 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-800 font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="border border-gray-300 rounded-md p-2 w-full"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
      
    </div>
  );
};

export default Contact;

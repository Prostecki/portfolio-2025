export default function GetInTouch() {
  return (
    <section className="w-full py-24 flex flex-col items-center gap-5 justify-center bg-gray-950 text-white">
      <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-teal-500/10 text-blue-500 mb-4">
        Contact
      </span>
      <h1 className="text-5xl text-center uppercase tracking-wide font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
        Get in Touch
      </h1>
      <h3 className="mb-10 mt-5 text-xl text-center font-light text-gray-400">
        I would love to hear from you. Please reach out if you have any
        questions or projects you'd like to collaborate on.
      </h3>
      <div className="max-md:w-[25rem] w-[30rem] max-w-7xl px-6">
        <form className="bg-gray-800 p-8 rounded-lg shadow-xl flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Your Name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Your Email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              rows="4"
              placeholder="Your Message"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-300 shadow mt-4"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

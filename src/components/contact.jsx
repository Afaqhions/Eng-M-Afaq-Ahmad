const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center my-[5rem] px-4">
      <span className="text-4xl font-extrabold text-[#8245ec] flex justify-center my-8">
        Contact
      </span>

      <div className="w-full flex justify-center">
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="w-full max-w-xl text-[#8245ec] border-[#8245ec] border-2 rounded-lg py-10 px-6 sm:px-10 lg:px-20 flex flex-col justify-center"
        >
          <input
            type="hidden"
            name="access_key"
            value="587ebdde-7315-448b-999e-b12c876a6b5c"
          />

          <label className="text-gray-300">Name:</label>
          <input
            className="bg-[#050414] border-[#8245ec] border-2 rounded-lg text-gray-300 p-2 my-2 w-full lg:w-[25rem] sm:w-[240px]"
            type="text"
            name="name"
            placeholder="Enter your Name..."
          />

          <label className="text-gray-300">Email:</label>
          <input
            className="bg-[#050414] border-[#8245ec] border-2 rounded-lg lg:w-[25rem] text-gray-300 p-2 my-2 w-full sm:w-[240px]"
            type="email"
            name="email"
            placeholder="Enter your Email..."
          />

          <label className="text-gray-300">Phone:</label>
          <input
            className="bg-[#050414] border-[#8245ec] border-2 rounded-lg lg:w-[25rem] text-gray-300 p-2 my-2 w-full sm:w-[240px]"
            type="number"
            name="phone"
            placeholder="Enter your Phone..."
          />

          <label className="text-gray-300">Message:</label>
          <textarea
            className="bg-[#050414] border-[#8245ec] border-2 rounded-lg lg:w-[25rem] text-gray-300 p-2 my-2 w-full h-[10rem] sm:w-[240px]"
            name="message"
            placeholder="Enter your Message..."
          ></textarea>

          <button className="inline-block px-6 py-2 border border-[#8245ec] hover:font-bold text-[#8245ec] hover:bg-white hover:text-[#8245ec] transition duration-300 rounded-full text-[1rem] uppercase tracking-widest self-center mt-4">
            Contact Us
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

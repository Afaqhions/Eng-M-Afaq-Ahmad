import React from "react";
import { Link } from "react-router-dom";
import '../assets/afaq.jpg'; 
const About = () => {
  return (
      <section class="bg-[#050414] border-[#8245ec] border-2 my-[5.5rem] rounded-lg text-white py-16 mx-8 px-10 sm:px-6 lg:px-20">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* <!-- Image --> */}
          <div class="md:w-1/2">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQHfblsCn4oBJw/profile-displayphoto-shrink_200_200/B4DZb6jU4RHEAY-/0/1747960290876?e=2147483647&v=beta&t=oKhv_j3bHtHy_H5ffGqH62PzwjD1oIHE_M0V_9Wg3KE"
              alt="About Us"
              class="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* <!-- Content --> */}
          <div class="md:w-1/2">
            <h2 class="text-4xl font-extrabold mb-4">About Us</h2>
            <p class="text-lg text-[white] mb-6">
              I am passionate and dedicated to crafting
              timeless experiences through design, detail, and distinction.
              Every element of my work reflects quality, purpose, and elegance.
            </p>
            <p class="text-sm text-[white] mb-6">
              My vision is to redefine modern living with sophistication.
              Whether it’s architecture, interior, or digital presence — I
              focus on excellence and refined simplicity.
            </p>
            <Link to='/contact' class="inline-block px-6 py-2 border border-[#8245ec] text-[#8245ec] hover:bg-white hover:text-[#8245ec] hover:font-bold transition duration-300 rounded-full text-[1rem] uppercase tracking-widest">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
  );
};

export default About;

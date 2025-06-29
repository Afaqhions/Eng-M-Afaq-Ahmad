import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer class="border-[#8245ec] border-t-2 py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="text-gray-300">
              <h2 class="text-xl mb-2">Eng. M Afaq Ahmad</h2>
              <p class="text-sm">Empowering the Tech with innovation.</p>
            </div>

            {/* <!-- Quick Links --> */}
            <div className="text-gray-300">
              <h3 class="text-lg font-semibold mb-2">Links</h3>
              <ul class="space-y-1 text-sm">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/service">Services</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            {/* <!-- Resources --> */}
            <div className="text-gray-300">
              <h3 class="text-lg font-semibold mb-2">Resources</h3>
              <ul class="space-y-1 text-sm">
                <li>
                  <a href="#">Docs</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>

            {/* <!-- Social Links --> */}
            <div className="text-gray-300">
              <h3 class="text-lg font-semibold mb-2">Follow Us</h3>
              <div class="flex space-x-4">
                <a href="https://www.linkedin.com/in/engmuhammad-afaq-ahmad-684b36354?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <FaInstagram />
                </a>
                <a href="https://www.instagram.com/muhammadafaqpoet?igsh=dnAzcWprd3E1YTJq">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Bottom Line --> */}
          <div class="mt-8 border-t border-[#8245ec] pt-4 text-center text-gray-300 text-sm ">
            &copy; 2025 Almaco. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

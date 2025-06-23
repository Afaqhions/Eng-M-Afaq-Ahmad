import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer class=" text-red-500 border-t-2 py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div>
              <h2 class="text-xl mb-2">Eng. M Afaq Ahmad</h2>
              <p class="text-sm text-red-500">
                Empowering the Tech with innovation.
              </p>
            </div>

            {/* <!-- Quick Links --> */}
            <div>
              <h3 class="text-lg font-semibold mb-2">Links</h3>
              <ul class="space-y-1 text-red-500 text-sm">
                <li>
                  <Link
                    to="/"
                    class="hover:border-b-2 border-red-500"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    class="hover:border-b-2 border-red-500"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service"
                    class="hover:border-b-2 border-red-500"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    class="hover:border-b-2 border-red-500">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* <!-- Resources --> */}
            <div>
              <h3 class="text-lg font-semibold mb-2">Resources</h3>
              <ul class="space-y-1 text-red-500 text-sm">
                <li>
                  <a href="#" class="text-red-500 hover:border-b-2 border-red-500">
                    Docs
                  </a>
                </li>
                <li>
                  <a href="#" class="text-red-500 hover:border-b-2 border-red-500">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" class="text-red-500 hover:border-b-2 border-red-500">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" class="text-red-500 hover:border-b-2 border-red-500">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Social Links --> */}
            <div>
              <h3 class="text-lg font-semibold mb-2">Follow Us</h3>
              <div class="flex space-x-4">
                <a href="https://www.instagram.com/muhammadafaqpoet?igsh=dnAzcWprd3E1YTJq" class="">
                  <FaLinkedin />
                </a>
                <a href="https://www.linkedin.com/in/engmuhammad-afaq-ahmad-684b36354?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" class="">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Bottom Line --> */}
          <div class="mt-8 border-t border-red-700 pt-4 text-center text-sm text-red-500">
            &copy; 2025 Almaco. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

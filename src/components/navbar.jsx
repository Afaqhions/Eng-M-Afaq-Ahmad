import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const navItems = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Education", to: "/education" },
  { name: "Skills", to: "/skills" },
  { name: "Tech Stack", to: "/stack" },
  { name: "Work", to: "/work" },
  { name: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  // Auto-close mobile menu on window resize
  useEffect(() => {
    const handler = () => window.innerWidth >= 768 && setNavOpen(false);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <nav className="bg-[#050414] text-gray-300 p-5 border-b border-[#8245ec] fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <span>
          <Link to="/" className="text-2xl font-bold">
            <span className="text-[#8245ec]">/</span>Eng. M Afaq Ahmad<span className="text-[#8245ec]">/</span>
          </Link>
        </span>
        {/* Hamburger Icon */}
        <div className="md:hidden" onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>

        {/* Menu */}
        <ul
          className={`flex-col md:flex-row md:flex items-center absolute md:static w-full md:w-auto left-0 md:left-auto top-[64px] md:top-auto transition-transform duration-300 ${
            navOpen ? "translate-x-0 bg-[#050414]" : "-translate-x-full md:translate-x-0"
          }`}
        >
          {navItems.map((item) => (
            <li
              key={item.to}
              className="border-b border-[#8245ec] md:border-none"
            >
              <Link
                to={item.to}
                className="block px-4 py-3 md:py-1 text-center text-[20px] hover:border-b-2 hover:border-b-[#8245ec] transition-colors duration-200"
                onClick={() => setNavOpen(false)} // close menu on click
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Social Icons */}
        <div>
          <div class="flex space-x-4 ">
            <a
              href="https://www.linkedin.com/in/engmuhammad-afaq-ahmad-684b36354?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              class=""
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/muhammadafaqpoet?igsh=dnAzcWprd3E1YTJq"
              class=""
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

import { useState } from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";
import logo from "../assets/logo.webp";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `transition-all duration-300 cursor-pointer whitespace-nowrap ${
      isActive ? "text-[#E2010E]" : "text-[#5f6875] hover:text-[#E2010E]"
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `block py-3 border-b border-gray-200 text-[15px] font-medium transition-all duration-300 ${
      isActive ? "text-[#E2010E]" : "text-[#5f6875] hover:text-[#E2010E]"
    }`;

  return (
    <header className="w-full fixed top-0 left-0 z-50 font-['Jost']">
      {/* TOP BAR */}
      <div className="bg-[#000] h-[42px] flex items-center justify-between px-4 lg:px-8">
        {/* LEFT SOCIAL */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.facebook.com/people/Xtreme-Machines/61561599418906/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full bg-[#5d7dbb] flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300"
          >
            <FaFacebookF className="text-white text-[12px]" />
          </a>

          <a
            href="https://www.youtube.com/@xtrememachines134"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full bg-[#ff0000] flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300"
          >
            <FaYoutube className="text-white text-[12px]" />
          </a>
        </div>

        {/* RIGHT CONTACT */}

        <div className="hidden md:flex items-center gap-7 text-black text-[14px] font-normal">
          <a
            href="tel:+919810322070"
            className="flex items-center gap-2 hover:text-[#E2010E] transition"
          >
            <FaPhoneAlt className="text-[13px] text-white" />
            <span className="text-white">+91 9810322070</span>
          </a>

          <a
            href="mailto:info@xtrememachines.in"
            className="flex items-center gap-2 hover:text-[#E2010E] transition"
          >
            <FaEnvelope className="text-[14px] text-white" />
            <span className="text-white">info@xtrememachines.in</span>
          </a>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="bg-white h-[76px] border-b border-gray-200 flex items-center">
        <div className="w-full flex items-center justify-between px-4 lg:px-8">
          {/* LOGO */}
          <div className="flex items-center min-w-fit">
            {/* LOGO */}
            <NavLink to="/" className="flex items-center min-w-fit">
              <img
                src={logo}
                alt="logo"
                className="w-[180px] sm:w-[220px] object-contain"
              />
            </NavLink>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden xl:flex items-center gap-10 uppercase text-[14px] font-semibold leading-none">
            <li>
              <NavLink to="/about-us" className={navLinkClass}>
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink to="/" className={navLinkClass}>
                Compounding Line
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dispersion-kneader-machine"
                className={navLinkClass}
              >
                Dispersion Kneader
              </NavLink>
            </li>

            <li>
              <NavLink to="/single-shaft-shredder" className={navLinkClass}>
                Single Shaft Shredder
              </NavLink>
            </li>

            <li>
              <NavLink to="/expertise" className={navLinkClass}>
                Expertise
              </NavLink>
            </li>

            <li>
              <NavLink to="/our-clients" className={navLinkClass}>
                Our Clients
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact-us" className={navLinkClass}>
                Contact Us
              </NavLink>
            </li>

            <li>
              <NavLink to="/blog" className={navLinkClass}>
                Blog
              </NavLink>
            </li>

            <li>
              <NavLink to="/video" className={navLinkClass}>
                Video
              </NavLink>
            </li>
          </ul>

          {/* HAMBURGER ICON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="xl:hidden text-[24px] text-[#E2010E]"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`xl:hidden fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl transition-all duration-300 z-50 overflow-y-auto ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* MOBILE HEADER */}
        <div className="flex items-center justify-between p-5 border-b border-gray-200">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="logo" className="w-[160px] object-contain" />
          </NavLink>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-[22px] text-[#E2010E]"
          >
            <FaTimes />
          </button>
        </div>

        {/* MOBILE LINKS */}
        <div className="px-5 py-3 uppercase">
          <NavLink
            to="/about-us"
            className={mobileNavLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </NavLink>

          <NavLink
            to="/"
            className={mobileNavLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Compounding Line
          </NavLink>

          <NavLink
            to="/dispersion-kneader-machine"
            className={mobileNavLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Dispersion Kneader
          </NavLink>

          <NavLink
            to="/single-shaft-shredder"
            className={mobileNavLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Single Shaft Shredder
          </NavLink>

          <NavLink
            to="/expertise"
            className={mobileNavLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Expertise
          </NavLink>

          <NavLink
            to="/our-clients"
            className={mobileNavLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Our Clients
          </NavLink>

          <NavLink
            to="/contact-us"
            className={mobileNavLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </NavLink>

          <NavLink
            to="/blog"
            className={mobileNavLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </NavLink>

          <NavLink
            to="/video"
            className={mobileNavLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Video
          </NavLink>
        </div>
      </div>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 xl:hidden"
        />
      )}
    </header>
  );
};

export default Navbar;

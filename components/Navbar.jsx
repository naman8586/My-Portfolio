import React, { useEffect, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#top" },
    { name: "About Me", href: "#about" },
    { name: "My Work", href: "#work" },
    { name: "Contact Me", href: "#contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Image
        src={assets.header_bg_color}
        alt="Header Background"
        className="w-full fixed top-0 right-0 -z-10 -translate-y-[80%] dark:hidden"
      />

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 dark:bg-darkTheme dark:shadow-white/20 ${
          isScrolled
            ? "bg-white bg-opacity-80 backdrop-blur-lg shadow-md"
            : "bg-transparent"
        }`}
      >
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logoo_dark : assets.logoo}
            alt="Logo"
            className="w-36 h-20 cursor-pointer mr-14"
          />
        </a>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                className="font-Ovo hover:text-blue-500 transition-colors duration-300"
                href={item.href}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            aria-label="Toggle Dark Mode"
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Toggle Dark Mode"
              className="w-6"
            />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full font-Ovo hover:bg-gray-100 transition-colors duration-300 dark:border-white/50"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="Arrow Icon"
              className="w-3"
            />
          </a>

          <button
            className="block md:hidden ml-3"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="Menu Icon"
              className="w-6"
            />
          </button>
        </div>

        <div
          className={`fixed top-0 right-0 bottom-0 w-64 z-50 h-screen bg-rose-50 shadow-lg transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-500 md:hidden`}
        >
          <button
            className="absolute right-6 top-6"
            onClick={toggleMenu}
            aria-label="Close Menu"
          >
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="Close Icon"
              className="w-5 cursor-pointer"
            />
          </button>

          <ul className="flex flex-col gap-4 py-20 px-10 dark:bg-darkHover dark:text-white/50">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  className="font-Ovo text-gray-800 hover:text-blue-500 transition-colors duration-300 dark:text-white dark:bg-darkHover"
                  href={item.href}
                  onClick={toggleMenu}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
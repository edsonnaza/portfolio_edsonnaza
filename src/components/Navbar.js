import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLinkClick = () => {
    setShowDropdown(false);
  };

  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <img
          className="h-8 w-auto rounded-full"
          src="./perfil-edson.jpeg"
          alt="Eng. Edson Sanchez"
        />
        <a href="#about" className="title-font font-medium text-white mb-4 md:mb-0 ml-3 text-xl">
          Edson Sanchez
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonials
          </a>
        </nav>
        <div ref={dropdownRef} className="relative">
          <button
            onClick={toggleDropdown}
            className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none flex items-center"
          >
            <span className="mr-1">Common</span>
            <ChevronDownIcon
              className={`w-4 h-4 transition-transform ${
                showDropdown ? "transform rotate-180" : ""
              }`}
            />
          </button>
          {showDropdown && (
            <ul className="absolute left-0 z-10 bg-gray-800 py-2 px-4 mt-2 min-w-max">
              <li>
                <a
                  href="#BAandProcess"
                  onClick={handleLinkClick}
                  className="text-white block py-1 hover:bg-gray-700"
                >
                  - Business Analysis & Development Process
                </a>
              </li>
              <li>
                <a
                  href="#ScrumDevProcess"
                  onClick={handleLinkClick}
                  className="text-white block py-1 hover:bg-gray-700"
                >
                  - A Scrum-Based Approach
                </a>
              </li>
              <li>
                <a
                  href="#AbstractInterfaces"
                  onClick={handleLinkClick}
                  className="text-white block py-1 hover:bg-gray-700"
                >
                  - Abstract Class Vs Interface
                </a>
              </li>
              <li>
                <a
                  href="#AccessModifiers"
                  onClick={handleLinkClick}
                  className="text-white block py-1 hover:bg-gray-700"
                >
                  - Access Modifiers
                </a>
              </li>
            </ul>
          )}
        </div>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}

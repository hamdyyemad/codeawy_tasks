"use client";
import { useState } from "react";
import { useScrollStatus } from "../../hooks/useScrollStatus";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MenuToggle from "./MenuToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isScrolled, atTop } = useScrollStatus();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div
      className={`bg-[#18181D] fixed z-50 w-full px-4 sm:px-8 py-1 transition-all duration-500 rounded-full mt-4 ${
        isScrolled
          ? "bg-[#0F0F17]/95 backdrop-blur-lg border-b border-[#18181D]/50 max-w-4xl"
          : "max-w-2xl"
      } inset-x-0 mx-auto`}
    >
      <div className="flex items-center justify-between p-2 mx-auto">
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-end flex-grow">
          <NavLinks atTop={atTop} />
        </nav>

        {/* Mobile menu button */}
        <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          className={`md:hidden mt-4 transition-all duration-300 bg-black bg-opacity-90 rounded-lg p-4`}
        >
          <div className="flex flex-col space-y-4">
            <NavLinks
              atTop={atTop}
              isMobile
              closeMenu={() => setIsOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

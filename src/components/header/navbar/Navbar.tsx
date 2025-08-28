"use client";

import Image from "next/image";
import logo from "../../../../public/images/imageLogo.png";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItem = [
    { name: "About Us", path: "/aboutUs" },
    { name: "Services", path: "/service" },
    { name: "Use Cases", path: "/useCases" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white">
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={140}
            height={140}
            className="w-[120px] sm:w-[140px] md:w-[160px]"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 lg:gap-10 text-base sm:text-lg md:text-xl lg:text-[18px] font-medium">
          {navItem.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="hover:text-[#8A00E5] transition"
            >
              {item.name}
            </Link>
          ))}
          <button className="border border-[#191A23] rounded-[12px] py-2 sm:py-3 px-4 sm:px-6 text-base sm:text-lg md:text-xl lg:text-[18px] hover:bg-[#191A23] hover:text-white transition">
            Request a quote
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col items-center gap-6 py-6 text-base sm:text-lg font-medium">
          {navItem.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="hover:text-[#8A00E5] transition"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <button className="border border-[#191A23] rounded-[12px] py-2 sm:py-3 px-4 sm:px-6 text-base sm:text-lg hover:bg-[#191A23] hover:text-white transition">
            Request a quote
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

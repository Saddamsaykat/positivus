"use client";

import Image from "next/image";
import logo from "../../../../public/images/imageLogo.png";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Theme from "./theme/Theme";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { getThemeStyles } from "@/utils/themeStyles/themeStyles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useSelector((state: RootState) => state.theme.theme);
  const themeStyles = getThemeStyles(theme);

  const navItem = [
    { name: "About Us", path: "/aboutUs" },
    { name: "Services", path: "/service" },
    { name: "Use Cases", path: "/useCases" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav
      className="shadow py-1 sticky top-0 border-b z-50"
      style={{
        backgroundColor: themeStyles.backgroundColor,
        color: themeStyles.color,
        borderBottomColor: theme === 'dark' ? '#4a5568' : '#e2e8f0'
      }}
    >
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
              style={{ color: themeStyles.color }}
            >
              {item.name}
            </Link>
          ))}
          <button 
            className="rounded-[12px] py-2 sm:py-3 px-4 sm:px-6 text-base sm:text-lg md:text-xl lg:text-[18px] transition"
            style={{
              border: `1px solid ${themeStyles.color}`,
              color: themeStyles.color,
              backgroundColor: 'transparent'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = themeStyles.color;
              e.currentTarget.style.color = themeStyles.backgroundColor;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = themeStyles.color;
            }}
          >
            Request a quote
          </button>
          <Theme />
        </div>

        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Toggle Menu"
            style={{ color: themeStyles.color }}
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div 
          className="md:hidden shadow-md flex flex-col items-center gap-6 py-6 text-base sm:text-lg font-medium"
          style={{
            backgroundColor: themeStyles.backgroundColor,
            color: themeStyles.color
          }}
        >
          {navItem.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="hover:text-[#8A00E5] transition"
              onClick={() => setIsOpen(false)}
              style={{ color: themeStyles.color }}
            >
              {item.name}
            </Link>
          ))}
          <button 
            className="rounded-[12px] py-2 sm:py-3 px-4 sm:px-6 text-base sm:text-lg transition"
            style={{
              border: `1px solid ${themeStyles.color}`,
              color: themeStyles.color,
              backgroundColor: 'transparent'
            }}
          >
            Request a quote
          </button>
          <Theme />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
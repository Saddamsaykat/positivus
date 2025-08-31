"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { setTheme } from "@/redux/slice/themeSlice/themeSlice";
import { themes, getThemeStyles } from "@/utils/themeStyles/themeStyles";
import { RootState } from "@/redux/store/store"; // Import proper type

const Theme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme); // Fixed typing
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    // Apply theme styles to document body
    const themeStyles = getThemeStyles(theme);
    document.body.style.backgroundColor = themeStyles.backgroundColor;
    document.body.style.color = themeStyles.color;
    
    // Also apply to document element for CSS custom properties
    document.documentElement.style.setProperty('--bg-color', themeStyles.backgroundColor);
    document.documentElement.style.setProperty('--text-color', themeStyles.color);
  }, [theme]);

  const handleThemeChange = (selectedTheme: string) => {
    if (themes.includes(selectedTheme)) {
      dispatch(setTheme(selectedTheme));
      setIsDropdownOpen(false);
    }
  };

  const themeStyles = getThemeStyles(theme);

  const renderThemeSelector = () => (
    <div
      className="relative inline-block group"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <div 
        className="flex items-center justify-between pr-8 pl-3 py-1.5 rounded-full text-sm font-medium cursor-pointer"
        style={{ 
          backgroundColor: 'transparent',
          color: themeStyles.color
        }}
      >
        {theme.charAt(0).toUpperCase() + theme.slice(1)}
        <span className="ml-2 text-xs">
          {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>
      {isDropdownOpen && (
        <ul className="absolute z-50 left-0 mt-0.5 w-full rounded-md shadow-md text-sm overflow-hidden"
            style={{ 
              backgroundColor: theme === 'dark' ? '#2d3748' : '#ffffff',
              border: theme === 'dark' ? '1px solid #4a5568' : '1px solid #e2e8f0'
            }}>
          {themes.map((t) => (
            <li
              key={t}
              onClick={() => handleThemeChange(t)}
              className="px-3 py-1.5 cursor-pointer transition-colors"
              style={{
                color: theme === 'dark' ? '#ffffff' : '#000000',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme === 'dark' ? '#4a5568' : '#f7fafc';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </li>
          ))}
        </ul>
      )}
      <span 
        className="absolute bottom-0 left-0 h-[2px] w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
        style={{ backgroundColor: themeStyles.color }}
      />
    </div>
  );

  return <div>{renderThemeSelector()}</div>;
};

export default Theme;
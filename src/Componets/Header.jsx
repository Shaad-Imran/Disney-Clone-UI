import React, { useState } from "react";
import { logo, userprofile } from "../assets";
import { menuItems } from "../Constant";
import { HiDotsVertical } from "react-icons/hi";

import HeaderItem from "./HeaderItem";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="flex items-center justify-between p-5">
      {/* Logo and Desktop Navigation */}
      <div className="flex gap-8 items-center">
        <img
          src={logo}
          alt="Disney+ Logo"
          className="w-[80px] md:w-[115px] object-cover"
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {/* Create navigation items */}
          {menuItems.map((item) => (
            <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
          ))}
        </nav>

        {/* Mobile Navigation */}
        <nav
          className="flex md:hidden gap-5 cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          {/* Create mobile navigation items (up to 3 items) */}
          {menuItems.slice(0, 3).map((item) => (
            <HeaderItem key={item.icon} name={""} Icon={item.icon} />
          ))}

          {/* Toggle for More Items */}
          <div className="md:hidden">
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle && (
              <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4">
                {/* Create additional mobile navigation items (if toggled) */}
                {menuItems.slice(3).map((item) => (
                  <HeaderItem
                    key={item.name}
                    Icon={item.icon}
                    name={item.name}
                  />
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* User Profile */}
      <img
        src={userprofile}
        alt="User Profile"
        className="w-[40px] rounded-full"
      />
    </header>
  );
};

export default Header;

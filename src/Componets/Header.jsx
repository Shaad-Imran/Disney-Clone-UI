import React, { useState } from "react";
import { logo, userprofile } from "../assets";
import menu from "../Constant/NavMenu"; //importing menu item
import { HiDotsVertical } from "react-icons/hi";

import HeaderItem from "./HeaderItem";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="flex items-center justify-between p-5">
      <div className="flex gap-8 items-center">
        <img
          src={logo}
          alt="Disney+ Logo"
          className="w-[80px] md:w-[115px] object-cover"
        />

        <nav className="hidden md:flex gap-8">
          {/* Create navigation items */}
          {menu.map((item) => (
            <HeaderItem key={item.icon} name={item.name} Icon={item.icon} />
          ))}
        </nav>

        <nav
          className="flex md:hidden gap-5"
          onClick={() => setToggle(!toggle)}
        >
          {/* Create mobile navigation items (up to 3 items) */}
          {menu.slice(0, 3).map((item) => (
            <HeaderItem key={item.icon} name={""} Icon={item.icon} />
          ))}

          <div className="md:hidden">
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle && (
              <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4">
                {/* Create additional mobile navigation items (if toggled) */}
                {menu.slice(3).map((item) => (
                  <HeaderItem
                    key={item.icon}
                    Icon={item.icon}
                    name={item.name}
                  />
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>

      <img
        src={userprofile}
        alt="User Profile"
        className="w-[40px] rounded-full"
      />
    </header>
  );
};

export default Header;

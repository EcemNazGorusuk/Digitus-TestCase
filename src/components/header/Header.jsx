import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Input } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import digitusLogo from "../../assets/digitusLogo.png";
import searchIcon from "../../assets/searchIcon.png";
import avatarWoman from "../../assets/avatarWoman.png";
import downIcon from "../../assets/downIcon.png";
import plusIcon from "../../assets/plusIcon.png";

export default function Header() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsHidden(window.innerWidth <= 853);
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { label: "Moms", href: "#" },
    { label: "Experts", href: "#" },
    { label: "Explore", href: "#" },
    { label: "Forum", href: "#" },
    { label: "MomTalk", href: "#" },
  ];

  return (
    <div className=" flex  w-full border-b bg-white justify-between  px-5">
      <div>
        <img src={digitusLogo} className="h-16 w-auto" alt="Digitus Logo" />
      </div>
      <nav className="flex gap-4 md:gap-10 lg:gap-16  text-[#636e72] font-semibold  items-center ">
        <a>
          <img src={plusIcon} className="rounded h-8" />
        </a>

        {links.map((link, index) => (
          <a key={index} href={link.href} className="rounded">
            {link.label}
          </a>
        ))}
        
      </nav>
      <div
        className={`hidden items-center px-6 md:flex  ${
          isHidden ? "hidden" : "block"
        }`}
      >
        <a href="#" className="rounded pr-5">
          <img src={searchIcon} className="w-5 h-5" alt="search icon" />
        </a>
        <div className="border-l-2 border-gray-300 w-1 h-5"></div>
        <a href="#" className="relative rounded px-3">
          <FontAwesomeIcon icon={faEnvelope} className="h-5" />
          <span className="absolute top-0 right-0 -mt-2 mr-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center font-bold text-xs">
            4
          </span>
        </a>
        <a href="#" className="relative rounded px-4">
          <FontAwesomeIcon icon={faBell} className="h-5" />
          <span className="absolute top-0 right-0 -mt-2 mr-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center font-bold text-xs">
            12
          </span>
        </a>
        <div className="border-l-2 border-gray-300 w-1 h-5 mx-2"></div>
        <div className="rounded-full bg-gray-100 w-9 h-9 flex items-center justify-center mx-2">
          <img src={avatarWoman} className="w-7 h-7" alt="avatar woman" />
        </div>
        <a href="#" className="rounded px-2">
          <img src={downIcon} className="w-2 h-2" alt="down icon" />
        </a>
      </div>
    </div>
  );
}

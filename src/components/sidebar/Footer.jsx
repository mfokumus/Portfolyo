import { useState } from "react";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { IoChevronDownOutline } from "react-icons/io5";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const Footer = () => {
  const [darkMode, setDarkMode] = useState(false);
  const changeMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div>
      <ul className="flex justify-center space-x-12 mx-[30px] py-[20px] border-b-[1px]">
        <li>
          <a target="_blank" href="#">
            <AiFillLinkedin size={32} color="#343A40" />
          </a>
        </li>
        <li>
          <a target="_blank" href="#">
            <AiFillInstagram size={32} color="#343A40" />
          </a>
        </li>
        <li>
          <a target="_blank" href="#">
            <BsGithub size={32} color="#343A40" />
          </a>
        </li>
      </ul>
      <div className="flex justify-between mx-[50px] mt-[30px] cursor-pointer">
        <div className="flex items-center gap-[7px] text-primary">
          <span>Türkçe</span>
          <IoChevronDownOutline />
        </div>
        <div onClick={changeMode} className="text-primary">
          {darkMode ? (
            <MdOutlineLightMode size={25} />
          ) : (
            <MdDarkMode size={25} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;

import { Link } from "react-router-dom";
import {
  IoHome,
  IoPerson,
  IoList,
  IoBriefcase,
  IoReceipt,
} from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="">
      <header className="header mb-[70px]">
        <h1 className=" font-bold text-primary text-[30px]">Mete Furkan</h1>
      </header>
      <nav>
        <ul className="flex flex-col gap-[30px]">
          <li className="border-b-[1px] pb-3">
            <Link className="flex items-center gap-[7px] text-primary px-5">
              <IoHome size={24} />
              <span className="text-[20px] font-medium">Anasayfa</span>
            </Link>
          </li>
          <li className="border-b-[1px] pb-3">
            <Link className="flex items-center gap-[7px] text-primary px-5">
              <IoPerson size={24} />
              <span className="text-[20px] font-medium">Hakkımızda</span>
            </Link>
          </li>
          <li className="border-b-[1px] pb-3">
            <Link className="flex items-center gap-[7px] text-primary px-5">
              <IoList size={24} />
              <span className="text-[20px] font-medium">Hizmetlerim</span>
            </Link>
          </li>
          <li className="border-b-[1px] pb-3">
            <Link className="flex items-center gap-[7px] text-primary px-5">
              <IoBriefcase size={24} />
              <span className="text-[20px] font-medium">Portfolyom</span>
            </Link>
          </li>
          <li className="border-b-[1px] pb-3">
            <Link className="flex items-center gap-[7px] text-primary px-5">
              <IoReceipt size={24} />
              <span className="text-[20px] font-medium">İletişim</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import { navbarList } from "../../utils/const/NavbarList";

const Navbar = () => {
  return (
    <div className="">
      <header className="header mb-[70px]">
        <h1 className=" font-bold text-primary text-[30px]">Mete Furkan</h1>
      </header>
      <nav>
        <ul className="flex flex-col gap-[30px]">
          {navbarList.map((item, index) => (
            <li key={index} className="border-b-[1px] pb-3">
              <Link className="flex items-center gap-[7px] text-primary px-5">
                {item.icon}
                <span className="text-[20px] font-medium">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

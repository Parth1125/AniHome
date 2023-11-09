// import Header from "./Header";
import { AiOutlineSearch } from "react-icons/ai";
import logo from "../assets/images/anihome.png";
const Navbar = () => {
  return (
    <>
      <nav className="w-full h-16  flex text-black justify-between px-4 items-center md:px-4 bg-transparent z-[5]">
        <div className="bg-black rounded-lg">
          <img
            src={logo}
            alt=""
            className="lg:w-36 lg:h-14 md:w-28 md:h-10 sm:w-28 h-7 w-24"
          />
        </div>

        <div className="flex justify-center items-center sm:p-2 p-1 bg-white rounded-lg">
          <input
            type="text"
            className="md:w-80 sm:w-40 w-28 bg-transparent rounded-md text-black focus:outline-none"
            placeholder="Search..."
          />
          <AiOutlineSearch className="cursor-pointer text-black" />
        </div>

        <div className="hidden md:block px-2 py-2 text-slate-800 font-bold cursor-pointer">
          Login/Signup
        </div>
        <div className="md:hidden">
          <a className="text-4xl" href="#">
            &#8801;
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

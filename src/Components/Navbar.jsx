// import Header from "./Header";
import { AiOutlineSearch } from "react-icons/ai";
const Navbar = () => {
  return (
    <>
      <nav className="w-full h-16  flex text-black justify-between px-4 items-center md:px-4 bg-transparent z-[5]">
        <div className="text-xl md:text-2xl text-indigo-700 font-bold">
          AniHome
        </div>

        <div className="flex justify-center items-center p-2 ">
          <input
            type="text"
            className="bg-transparent rounded-md text-white focus:outline-none"
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

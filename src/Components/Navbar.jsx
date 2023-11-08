// import Header from "./Header";

import Header from "./Header";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <>
      <nav className="w-full h-16  flex text-black justify-between px-4 items-center md:px-4 bg-transparent ">
        <div className="text-xl md:text-2xl text-indigo-700 font-bold">AniHome</div>
        {/* <ul className="md:flex hidden font-semibold">
          <li className="mx-[10px] cursor-pointer">Home</li>
          <li className="mx-[10px] cursor-pointer">About us</li>
          <li className="mx-[10px] cursor-pointer">Contact us</li>
        </ul> */}
        <Searchbar/>
        <div className="hidden md:block px-2 py-2 bg-indigo-700 text-white font-bold cursor-pointer">
          Login/Signup
        </div>
        <div className="md:hidden">
          <a className="text-4xl" href="#">&#8801;</a>
        </div>
      </nav>
        {/* <Header/> */}
     
    </>
  );
};

export default Navbar;

// import Header from '../Components/Header'
import Navbar from "../Components/Navbar";
import naruto from "../assets/images/naruto.mp4"
import {AiOutlineDown} from "react-icons/ai"
const Home = () => {
  return (
    <>
      <main>
        <section className="h-screen pain">
          <video src={naruto} loop muted autoPlay className="absolute object-cover opacity-60 -z-10 h-screen w-screen"></video>
          <Navbar />
          <div className="w-full h-screen flex justify-evenly items-center z-10 flex-col">
            <h1 className="text-slate-600 font-bold md:text-6xl sm:text-5xl text-2xl lg:text-8xl">
              Welcome To <span className="text-orange-400">AniHome</span>
            </h1>
            <button className="p-4 w-48 border-4 border-orange-400 hover:bg-orange-400 font-bold text-slate-600 rounded-md 
              flex items-center justify-center gap-3 text-xl"
            >
              Scroll Down <span className="text-2xl animate-bounce">
                <AiOutlineDown/>
              </span>
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

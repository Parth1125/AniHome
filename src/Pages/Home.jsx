// import Header from '../Components/Header'
import Navbar from "../Components/Navbar";
import Pain1 from "../assets/images/pain1.png"
const Home = () => {
  return (
    <>
      <main>
        <section className="h-screen pain">
          <Navbar />
          <div className="w-2/3 h-4/5 flex justify-center">
            <h1 className="text-white font-bold text-6xl self-center">
              Welcome To <span className="text-orange-400">AniHome</span>
            </h1>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

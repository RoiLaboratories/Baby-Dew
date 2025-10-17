import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";
import ScrollerBtn from "./components/ScrollerBtn";
import Tokenomics from "./components/Tokenomics";
import Vision from "./components/Vision";
import SplashScreen from "./components/SplashScreen";

// const items = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (index: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: index * 0.1, duration: 0.3 },
//   }),
// };

function App() {
  const [headerActive, setHeaderActive] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const header = document.querySelector(".header");
    const headerHeight = header?.getBoundingClientRect().height || 80;

    const handleScroll = () => {
      console.log(headerHeight);
      setHeaderActive(window.scrollY > headerHeight!);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className="grid grid-cols-1 grid-rows-[auto_1fr_auto] min-h-screen w-full relative overflow-x-hidden">
      <div
        className={`fixed top-0 left-0 right-0 transition-transform duration-500 z-50 ${
          headerActive ? "show " : "hide"
        }`}
      >
        <Header />
      </div>
      <main className="pb-40 md:pb-80">
        <Hero />
        <Vision />
        <Roadmap />
        <Tokenomics />
      </main>
      <Footer />
      {headerActive && <ScrollerBtn />}
    </div>
  );
}

export default App;

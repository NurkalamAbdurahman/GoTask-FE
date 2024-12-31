import { useState, useEffect } from "react";
import Logo from "../../../assets/images/icon/GoTask.png";

const NavbarHome = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-20 top-0 left-0 transition-all duration-300 ${
        isScrolled
          ? "bg-primary-blue bg-opacity-90 border-b border-secondary-blue shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center">
          <img src={Logo} alt="GoTask Logo" className="h-8 w-auto" />
        </a>

        <div className="flex items-center space-x-4">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            <a href="/Login">Login</a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarHome;

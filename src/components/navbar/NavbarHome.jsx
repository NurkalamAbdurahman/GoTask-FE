import Logo from "../../assets/images/icon/GoTask.png";
const NavbarHome = () => {
  return (
    <div>
      <nav className=" dark:bg-transparant absolute w-full z-20 top-0 start-0 pt-10">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              <img src={Logo} alt="" />
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <a href="/Login">Login</a>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarHome;

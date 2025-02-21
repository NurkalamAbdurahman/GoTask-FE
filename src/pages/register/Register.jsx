import Logo from "../../assets/images/icon/GoTask.png";
import ImgLogin from "../../components/komponenLandingPage/kontenLogin/ImgLogin";
import CardRegister from "../../components/konternRegister/cardRegister";

const Register = () => {
  return (
    <div className="bg-latar-blue h-screen xl:h-screen text-white p-5 md:p-10 md:gap-4 flex flex-col md:justify-between">
      <div className="h-auto ">
        <a href="/">
          <img src={Logo} alt="GoTask Logo" />
        </a>
      </div>
      <div className="flex flex-col md:gap-2 lg:gap-10 lg:h-auto lg:flex-row justify-center items-center h-[95%] md:h-auto">
        <div className="w-full lg:w-1/2 flex 2x l:h-full justify-center mb-8 md:mb-0">
          <CardRegister />
        </div>
        <div className="hidden md:block lg:flex lg:justify-end w-full lg:w-1/2">
          <ImgLogin />
        </div>
      </div>
    </div>
  );
};

export default Register;

import Logo from "../../assets/images/icon/GoTask.png";
import CardLogin from "../../components/komponenLandingPage/kontenLogin/CardLogin";
import ImgLogin from "../../components/komponenLandingPage/kontenLogin/ImgLogin";

const Login = () => {
  return (
    <div className="bg-latar-blue h-screen md:h-auto lg:h-screen text-white p-5 md:p-10 flex flex-col justify-between">
      <div className="md:h-1/4 lg:h-auto">
      <a href="/">
        <img src={Logo} alt="GoTask Logo" className="2xl:w-60" />
      </a>
      </div>
      <div className="flex flex-col md:gap-2 md:h-3/4 lg:gap-10 lg:h-auto lg:flex-row justify-between items-center">
        <div className="w-full lg:w-1/2 flex 2xl:h-full justify-center mb-8 md:mb-0">
          <CardLogin />
        </div>
        <div className="hidden md:block lg:flex lg:justify-end w-full lg:w-1/2">
          <ImgLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
import Logo from "../../assets/images/icon/GoTask.png";
import CardLogin from "../../components/komponenLandingPage/kontenLogin/CardLogin";
import ImgLogin from "../../components/komponenLandingPage/kontenLogin/ImgLogin";

const Login = () => {
  return (
    <div className="bg-latar-blue h-screen text-white p-10">
      <a href="/">
        <img src={Logo} alt="GoTask Logo" className="mb-8" />
      </a>
      <div className="flex justify-between items-center">
        <div className="w-1/2 flex justify-center">
          <CardLogin />
        </div>
        <ImgLogin />
      </div>
    </div>
  );
};

export default Login;

import Logo from "../../assets/images/icon/GoTask.png";
import ImgLogin from "../../components/kontenLogin/ImgLogin";
import CardRegister from "../../components/konternRegister/cardRegister";

const Register = () => {
  return (
    <div className="bg-latar-blue h-screen text-white p-10">
      <a href="/">
        <img src={Logo} alt="GoTask Logo" className="mb-8" />
      </a>
      <div className="flex justify-between items-center">
        <div className="w-1/2 flex justify-center">
          <CardRegister />
        </div>
        <ImgLogin />
      </div>
    </div>
  );
};

export default Register;

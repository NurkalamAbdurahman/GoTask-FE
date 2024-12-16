import DasboardTemplate from "../../components/dasboardTemplate/DasboardTemplate";
import SiderBar from "../../components/sidebar/sidebar";

const Dasboard = () => {
  return (
    <div className="bg-latar-blue text-white flex">
      <div>
        <SiderBar/>
      </div>
        <DasboardTemplate/>
    </div>
  );
};

export default Dasboard;

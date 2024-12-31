import DasboardSetting from "../../components/dasboardSetting/DasboardSetting";
import Sidebar from "../../components/sidebar/Sidebar";

const DasboardS = () => {
  return (
    <div className="bg-latar-blue text-white flex">
      <div>
        <Sidebar/>
      </div>
      <DasboardSetting/>
    </div>
  );
};

export default DasboardS;

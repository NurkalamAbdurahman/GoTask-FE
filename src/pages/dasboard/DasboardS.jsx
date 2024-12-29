import DasboardSetting from "../../components/dasboardSetting/DasboardSetting";
import SiderBar from "../../components/sidebar/sidebar";

const DasboardS = () => {
  return (
    <div className="bg-latar-blue text-white flex">
      <div>
        <SiderBar/>
      </div>
      <DasboardSetting/>
    </div>
  );
};

export default DasboardS;

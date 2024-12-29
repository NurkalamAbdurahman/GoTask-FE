import DasboardMember from "../../components/dasboardMember/DasboardMember";
import SiderBar from "../../components/sidebar/sidebar";

const DasboardM = () => {
  return (
    <div className="bg-latar-blue text-white flex">
      <div>
        <SiderBar/>
      </div>
      <DasboardMember/>
    </div>
  );
};

export default DasboardM;

import DasboardMember from "../../components/dasboardMember/DasboardMember";
import Sidebar from "../../components/sidebar/Sidebar";
const DasboardM = () => {
  return (
    <div className="bg-latar-blue text-white flex">
      <div>
        <Sidebar/>
      </div>
      <DasboardMember/>
    </div>
  );
};

export default DasboardM;

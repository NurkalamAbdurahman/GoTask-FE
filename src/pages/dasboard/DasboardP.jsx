import DasboardProyek from "../../components/dasboardProyek/DasboardProyek";
import Sidebar from "../../components/sidebar/Sidebar";

const DAsboardP = () => {
  return (
    <div className="bg-latar-blue text-white flex">
      <div>
        <Sidebar/>
      </div>
      <div className="flex-1 overflow-hidden">
        <DasboardProyek />
      </div>
    </div>
  );
};

export default DAsboardP;

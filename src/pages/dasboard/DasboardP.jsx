import DasboardProyek from "../../components/dasboardProyek/DasboardProyek";
import SiderBar from "../../components/sidebar/sidebar";

const DAsboardP = () => {
  return (
    <div className="bg-latar-blue text-white flex">
      <div>
        <SiderBar />
      </div>
      <div className="flex-1 overflow-hidden">
        <DasboardProyek />
      </div>
    </div>
  );
};

export default DAsboardP;

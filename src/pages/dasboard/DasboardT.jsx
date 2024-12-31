import DasboardTable from "../../components/dasboardTable/DasboardTable";
import Sidebar from "../../components/sidebar/Sidebar";

const DasboardT = () => {
  return (
    <div className="bg-latar-blue text-white flex">
      <div>
        <Sidebar/>
      </div>
      <DasboardTable/>
    </div>
  );
};

export default DasboardT;

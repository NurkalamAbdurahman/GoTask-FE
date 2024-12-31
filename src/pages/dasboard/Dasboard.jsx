import DasboardTemplate from "../../components/dasboardTemplate/DasboardTemplate";
import Sidebar from "../../components/sidebar/Sidebar";

const Dasboard = () => {
  return (
    <div className="bg-latar-blue text-white flex">
      <div>
        <Sidebar/>
      </div>
        <DasboardTemplate/>
    </div>
  );
};

export default Dasboard;

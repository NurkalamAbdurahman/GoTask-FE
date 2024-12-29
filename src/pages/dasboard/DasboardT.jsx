import DasboardTable from "../../components/dasboardTable/DasboardTable";
import SiderBar from "../../components/sidebar/sidebar";

const DasboardT = () => {
  return (
    <div className="bg-latar-blue text-white flex">
      <div>
        <SiderBar/>
      </div>
      <DasboardTable/>
    </div>
  );
};

export default DasboardT;

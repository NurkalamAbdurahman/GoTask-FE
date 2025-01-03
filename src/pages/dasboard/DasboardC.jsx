import DasboardCalendar from "../../components/dasboardCalendar/DasboardCalendar";
import Sidebar from "../../components/sidebar/Sidebar";


const DasboardT = () => {
  return (
    <div className="bg-latar-blue text-white flex">
      <div>
        <Sidebar/>
      </div>
      <div className="w-full overflow-hidden">
      <DasboardCalendar/>
      </div>
    </div>
  );
};

export default DasboardT;

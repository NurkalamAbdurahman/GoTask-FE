import DasboardCalendar from "../../components/dasboardCalendar/DasboardCalendar";
import SiderBar from "../../components/sidebar/sidebar";

const DasboardT = () => {
  return (
    <div className="bg-latar-blue text-white flex">
      <div>
        <SiderBar/>
      </div>
      <div className="w-full overflow-hidden">
      <DasboardCalendar/>
      </div>
    </div>
  );
};

export default DasboardT;

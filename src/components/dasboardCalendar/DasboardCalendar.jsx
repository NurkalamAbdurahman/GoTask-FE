import Profil from "../dasboardMember/Profil";
import FilterCalendar from "./FilterCalendar";
import KontenCalendar from "./KontenCalendar";

const DasboardCalendar = () => {
  return (
    <div className="lg:h-screen w-full p-3 flex flex-col gap-2 py-5">
      <div className="flex flex-col lg:flex-row w-full relative justify-center items-center gap-2 ">
        <div className="w-full lg:w-1/2">
        <FilterCalendar/>
        </div>
        <div className="hidden w-14 h-14 absolute -bottom-8 bg-primary-blue text-white rounded-full lg:flex items-center justify-center text-2xl font-bold">
          G
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-2">
          <Profil />
        </div>
      </div>
      <KontenCalendar/>
    </div>
  );
};

export default DasboardCalendar;

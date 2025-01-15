import Calendar from "./Calendar";
import "./Calendar.css"
import List from "./List";
const KontenCalendar = () => {
  return (
    <div className="text-sm  flex gap-2 flex-col-reverse lg:flex-row w-full relative items-start justify-center">
      <List/>
      <Calendar/>
    </div>
  );
};

export default KontenCalendar;
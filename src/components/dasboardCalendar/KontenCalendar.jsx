import Calendar from "./Calendar";
import "./Calendar.css"
import List from "./List";
const KontenCalendar = () => {
  return (
    <div className="text-sm flex gap-2 w-full relative h-[550px] items-start justify-center">
      <List/>
      <Calendar/>
    </div>
  );
};

export default KontenCalendar;
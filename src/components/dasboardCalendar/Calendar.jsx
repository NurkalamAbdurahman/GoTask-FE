import { useState } from "react";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, isSameMonth, isToday } from "date-fns";
import idLocale from "date-fns/locale/id";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const handlePreviousMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 0 }); 
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });

  const days = eachDayOfInterval({ start: startDate, end: endDate });

  return (
    <div className="inverted-C text-white w-1/2 flex flex-col justify-between p-6 rounded-lg">
      <div className="flex justify-between items-center mb-6 border-b py-2">
        <h2 className="text-[14px] font-bold">
          {format(currentDate, "MMMM yyyy", { locale: idLocale })}
        </h2>
        <div className="flex items-center space-x-4">
          <button
            className="text-sm bg-secondary-blue px-4 py-1 rounded"
            onClick={handleToday}
          >
            Hari ini
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-4 text-[10px] text-center">
        <div>Minggu</div>
        <div>Senin</div>
        <div>Selasa</div>
        <div>Rabu</div>
        <div>Kamis</div>
        <div>Jum`at</div>
        <div>Sabtu</div>

        {days.map((day, index) => (
          <div
            key={index}
            onClick={() => setSelectedDate(day)}
            className={`py-0.5 rounded border border-secondary-blue cursor-pointer transition-colors ${
              !isSameMonth(day, monthStart)
                ? "text-gray-400"
                : isToday(day)
                ? "bg-primary-blue shadow-lg border-none text-white font-bold"
                : selectedDate && day.toDateString() === selectedDate.toDateString()
                ? "bg-blue-500 text-white"
                : "text-white hover:bg-blue-700"
            }`}
          >
            {format(day, "d")}
          </div>
        ))}
      </div>

      <div className="flex justify-between w-full gap-2 items-center mt-6">
        <button
          className="border border-secondary-blue text-white w-1/2 py-0.5 rounded"
          onClick={handlePreviousMonth}
        >
          {"<"}
        </button>
        <button
          className="bg-secondary-blue text-white w-1/2 py-0.5 rounded"
          onClick={handleNextMonth}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Calendar;

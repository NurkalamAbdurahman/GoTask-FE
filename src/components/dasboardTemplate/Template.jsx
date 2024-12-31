const Template = () => {
  return (
    <div className="flex flex-wrap justify-start lg:justify-between mt-5 lg:mt-0 items-center text-xs gap-5">
      <div className="w-full sm:w-[48%] lg:w-[32%] border-2 p-4 border-primary-blue bg-secondary-blue bg-opacity-10 h-28 rounded-md">
        <div className="h-3/4 flex justify-center text-xl items-center">
          <button>+</button>
        </div>
        <div className="h-1/4 flex justify-start items-start text-start">
          <p>Buat board baru</p>
        </div>
      </div>
      {[
        { title: "Project Management", gradient: "from-[#000000] to-[#290036]", members: "Nurkalam & Rafli" },
        { title: "Absent App", gradient: "from-[#DD08CF] to-[#1500D6]", members: "M. Rafli & Khulika" },
        { title: "Chat App", gradient: "from-[#33a833] to-[#e6ff06]", members: "Sandi & Riyan" },
        { title: "Quiz App", gradient: "from-[#000000] to-[#0ad1b7]", members: "Dava & Wandi" },
        { title: "test App", gradient: "from-[#000000] to-[#456]", members: "? & ?" },
      ].map((card, index) => (
        <div key={index} className="w-full sm:w-[48%] lg:w-[32%] flex flex-col gap-1">
          <div className={`w-full p-4 bg-gradient-to-r ${card.gradient} h-28 rounded-md`}>
            <div className="h-3/4 flex justify-end text-xl items-start">
              <button>+</button>
            </div>
            <div className="h-1/4 flex justify-start items-start text-start">
              <p>{card.title}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="border px-4 border-primary-blue bg-secondary-blue bg-opacity-10 rounded-md">
              <p>{card.members}</p>
            </div>
            <div className="border px-4 border-primary-blue bg-secondary-blue bg-opacity-10 rounded-md">
              +
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default Template;

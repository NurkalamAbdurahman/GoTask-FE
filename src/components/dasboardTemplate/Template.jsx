const Template = () => {
  return (
    <div className="flex flex-wrap justify-start items-center text-xs gap-5">
      <div className="w-[32%] border-2 p-4 border-primary-blue bg-secondary-blue bg-opacity-10 h-28 rounded-md">
        <div className="h-3/4 flex justify-center text-xl items-center">
          <button>+</button>
        </div>
        <div className="h-1/4 flex justify-start items-start text-start">
          <p>Buat board baru</p>
        </div>
      </div>
      <div className="w-[32%] flex flex-col gap-1">
        <div className="w-full p-4 bg-gradient-to-r from-[#000000] to-[#290036] h-28 rounded-md">
          <div className="h-3/4 flex justify-end text-xl items-start">
            <button>+</button>
          </div>
          <div className="h-1/4 flex justify-start items-start text-start">
            <p>Project Management</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="border px-4 border-primary-blue bg-secondary-blue bg-opacity-10 rounded-md">
            <p>Nurkalam & Rafli</p>
          </div>
          <div className="border px-4 border-primary-blue bg-secondary-blue bg-opacity-10 rounded-md">
            +
          </div>
        </div>
      </div>
      <div className="w-[32%] flex flex-col gap-1">
        <div className="w-full p-4 bg-gradient-to-r from-[#DD08CF] to-[#1500D6] h-28 rounded-md">
          <div className="h-3/4 flex justify-end text-xl items-start">
            <button>+</button>
          </div>
          <div className="h-1/4 flex justify-start items-start text-start">
            <p>Absent App</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="border px-4 border-primary-blue bg-secondary-blue bg-opacity-10 rounded-md">
            <p>M. Rafli & Khulika</p>
          </div>
          <div className="border px-4 border-primary-blue bg-secondary-blue bg-opacity-10 rounded-md">
            +
          </div>
        </div>
      </div>
      <div className="w-[32%] flex flex-col gap-1">
        <div className="w-full p-4 bg-gradient-to-r from-[#33a833] to-[#e6ff06] h-28 rounded-md">
          <div className="h-3/4 flex justify-end text-xl items-start">
            <button>+</button>
          </div>
          <div className="h-1/4 flex justify-start items-start text-start">
            <p>Chat App</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="border px-4 border-primary-blue bg-secondary-blue bg-opacity-10 rounded-md">
            <p>Sandi & Riyan</p>
          </div>
          <div className="border px-4 border-primary-blue bg-secondary-blue bg-opacity-10 rounded-md">
            +
          </div>
        </div>
      </div>
      <div className="w-[32%] flex flex-col gap-1">
        <div className="w-full p-4 bg-gradient-to-r from-[#000000] to-[#0ad1b7] h-28 rounded-md">
          <div className="h-3/4 flex justify-end text-xl items-start">
            <button>+</button>
          </div>
          <div className="h-1/4 flex justify-start items-start text-start">
            <p>Quiz App</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="border px-4 border-primary-blue bg-secondary-blue bg-opacity-10 rounded-md">
            <p>Dava & Wandi</p>
          </div>
          <div className="border px-4 border-primary-blue bg-secondary-blue bg-opacity-10 rounded-md">
            +
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;

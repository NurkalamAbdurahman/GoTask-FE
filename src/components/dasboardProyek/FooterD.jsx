const FooterD = () => {
  return (
    <div className=" border border-primary-blue bg-secondary-blue bg-opacity-10 px-4 py-2 my-4 flex justify-between items-center w-3/4 bg-blur-lg rounded-lg">
      <div className="flex items-center space-x-3">
        <span className="text-white text-sm font-medium">Project Management</span>
        <span className="text-gray-400 text-sm">Private</span>
      <div className="flex items-center space-x-2">
        <button className="bg-blue-500 text-white text-sm font-medium px-4 py-1 rounded focus:outline-none">
          Board
        </button>
        <button className=" text-white text-sm font-medium px-4 py-1 rounded focus:outline-none">
          Tabel
        </button>
      </div>
      </div>


      <div className="flex items-center border-l border-white pl-2 space-x-4">
        <div className="flex items-center -space-x-1">
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold text-black">
            NZ
          </div>
          <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-xs font-bold text-black">
            AS
          </div>
          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold text-black">
            LT
          </div>
        </div>

        <button className="bg-blue-500 text-white text-sm font-medium px-4 py-1 rounded focus:outline-none hover:bg-blue-600 transition">
          Share
        </button>
      </div>
    </div>
  );
};

export default FooterD;

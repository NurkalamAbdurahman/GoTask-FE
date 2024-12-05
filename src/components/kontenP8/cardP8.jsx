const CardP8 = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <img
        src="https://images.unsplash.com/photo-1558965088-2e9062616292?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-[600px] h-80 rounded-lg"
      />
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex justify-end items-end gap-3">
          <button
            type="button"
            className="text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-3 text-center"
          >
            Sinkronisasi dokumen dari aplikasi lain.
          </button>
          <button
            type="button"
            className="text-white bg-secondary-blue bg-opacity-10 border-solid border-2 border-primary-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-3 text-center"
          >
            Integrasi dengan alat komunikasi
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardP8;

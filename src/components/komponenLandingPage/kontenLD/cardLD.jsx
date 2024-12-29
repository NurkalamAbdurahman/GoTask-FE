const CardLD = () => {
  return (
    <div className="flex gap-10">
      <div className="relative w-[300px] h-[200px] overflow-hidden group">
        <img
          className="absolute inset-0 rounded-lg w-full h-full object-cover"
          src="https://img.freepik.com/free-photo/young-woman-working-with-laptop-desk-thinking-about-solving-problems_1150-52096.jpg?t=st=1733287835~exp=1733291435~hmac=36fb3e5fcb703f86382c3885257ecc0f46bf2d0454af69fec6146be0549f2891&w=826"
          alt="Shoes"
        />
        <div className="absolute z-10">
          <div className="text-white bg-blue-700 m-3 font-medium rounded-lg text-sm px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Thinking
          </div>
        </div>
        <div className="deskripsi flex flex-col items-end absolute text-start rounded-bl-lg rounded-br-lg bottom-0 left-0 right-0 bg-black bg-opacity-50 blur-8 text-white p-4 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
          <div>
            <p className="text-[14px] font-bold">
              1. Merasa Terbebani oleh Tugas?
            </p>
            <p className="text-[12px] ms-3">
              GoTask akan membantu Anda mengatur dan memprioritaskan tugas
              sehingga Anda bisa lebih fokus.
            </p>
          </div>
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>
      </div>
      <div className="relative w-[300px] h-[200px] overflow-hidden group">
        <img
          className="absolute inset-0 rounded-lg w-full h-full object-cover"
          src="https://img.freepik.com/free-photo/checking-data-laptop_1098-17026.jpg?t=st=1733293434~exp=1733297034~hmac=f2316f88e09463629c1bd908808451b785ba71075acc91b4f131e8c0cf3e5680&w=826"
          alt="Shoes"
        />
        <div className="absolute z-10">
          <div className="text-white bg-blue-700 m-3 font-medium rounded-lg text-sm px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Working
          </div>
        </div>
        <div className="deskripsi flex flex-col items-end absolute text-start rounded-bl-lg rounded-br-lg bottom-0 left-0 right-0 bg-black bg-opacity-50 blur-8 text-white p-4 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
          <div>
            <p className="text-[14px] font-bold">
              2. Atur Jadwal Anda dengan Mudah.
            </p>
            <p className="text-[12px] ms-3">
              Dengan GoTask, Anda bisa membuat jadwal yang fleksibel dan melacak
              progres Anda.
            </p>
          </div>
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>
      </div>
      <div className="relative w-[300px] h-[200px] overflow-hidden group">
        <img
          className="absolute inset-0 rounded-lg w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1639621108959-15f9c4257508?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Shoes"
        />
        <div className="absolute z-10">
          <div className="text-white bg-blue-700 m-3 font-medium rounded-lg text-sm px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Family
          </div>
        </div>
        <div className="deskripsi flex flex-col items-end absolute text-start rounded-bl-lg rounded-br-lg bottom-0 left-0 right-0 bg-black bg-opacity-50 blur-8 text-white p-4 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
          <div>
            <p className="text-[14px] font-bold">
              3. Dapatkan Lebih Banyak Waktu.
            </p>
            <p className="text-[12px] ms-3">
              Dengan GoTask, Anda bisa meningkatkan produktivitas dan memiliki
              lebih banyak waktu luang.
            </p>
          </div>
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default CardLD;

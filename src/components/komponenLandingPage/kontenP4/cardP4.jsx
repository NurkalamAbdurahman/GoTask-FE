import "./cardP4.css";
const CardP4 = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center items-start gap-5">
        <div className="card bg-secondary-blue w-full bg-opacity-10 border-solid border-2 border-primary-blue rounded-lg lg:w-[23%] shadow-xl">
          <div
            className="flex-col relative hero h-36 rounded-lg text-white flex justify-center items-center bg-cover"
            style={{
              backgroundImage:
                "url(https://plus.unsplash.com/premium_photo-1723471212652-06d5aea09548?q=80&w=1446&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          >
            <div className="rounded-tab absolute left-5 -bottom-1 font-medium uppercase px-5">
              TIMETABLE
            </div>
          </div>
          <div className="card-body p-7 flex flex-col gap-4">
            <h2 className="card-title uppercase font-bold text-sm">
              Atur Jadwalmu dengan Mudah
            </h2>
            <p className="text-[12px] text-justify">
              Dengan GoTask, mengatur jadwal jadi lebih simpel.
            </p>
            <button
              type="button"
              className="text-white w-32 bg-secondary-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md py-1 px-2 text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Lihat Detail
            </button>
          </div>
        </div>

        <div className="card bg-secondary-blue w-full bg-opacity-10 border-solid border-2 border-primary-blue rounded-lg lg:w-[23%] shadow-xl">
          <div
            className="flex-col relative hero h-36 rounded-lg text-white flex justify-center items-center bg-cover"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1611302457661-d24c21494f2a?q=80&w=1553&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          >
            <div className="rounded-tab absolute left-5 -bottom-1 font-medium uppercase px-5">
              FEATURE
            </div>
          </div>
          <div className="card-body p-7 flex flex-col gap-4">
            <h2 className="card-title uppercase font-bold text-sm">
              Kuasai Waktumu dengan Fitur Canggih
            </h2>
            <p className="text-[12px] text-justify">
              Nikmati fitur-fitur yang canggih dari GoTask.
            </p>
            <button
              type="button"
              className="text-white w-32 bg-secondary-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md py-1 px-2 text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Lihat Detail
            </button>
          </div>
        </div>

        <div className="card bg-secondary-blue w-full bg-opacity-10 border-solid border-2 border-primary-blue rounded-lg lg:w-[23%] shadow-xl">
          <div
            className="flex-col relative hero h-36 rounded-lg text-white flex justify-center items-center bg-cover"
            style={{
              backgroundImage:
                "url(https://plus.unsplash.com/premium_photo-1682126157704-beacbab4906f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          >
            <div className="rounded-tab absolute left-5 -bottom-1 font-medium uppercase px-5">
              SOLUTION
            </div>
          </div>
          <div className="card-body p-7 flex flex-col gap-4">
            <h2 className="card-title uppercase font-bold text-sm">
              Pernah Ketinggalan Deadline?
            </h2>
            <p className="text-[12px] text-justify">
              Dapatkan pengingat tepat waktu dan lacak progresmu.
            </p>
            <button
              type="button"
              className="text-white w-32 bg-secondary-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md py-1 px-2 text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Lihat Detail
            </button>
          </div>
        </div>

        <div className="card bg-secondary-blue w-full bg-opacity-10 border-solid border-2 border-primary-blue rounded-lg lg:w-[23%] shadow-xl">
          <div
            className="flex-col relative hero h-36 rounded-lg text-white flex justify-center items-center bg-cover"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1558965088-2e9062616292?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          >
            <div className="rounded-tab absolute left-5 -bottom-1 uppercase font-medium px-5">
              COMPARE
            </div>
          </div>
          <div className="card-body p-7 flex flex-col gap-4">
            <h2 className="card-title uppercase font-bold text-sm">
              Tinggalkan Buku Catatan, Gunakan GoTask!
            </h2>
            <p className="text-[12px] text-justify">
              Solusi digital yang lebih praktis untuk mengelola jadwalmu.
            </p>
            <button
              type="button"
              className="text-white w-32 bg-secondary-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md py-1 px-2 text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Lihat Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardP4;

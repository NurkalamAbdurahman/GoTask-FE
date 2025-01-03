import CardP4 from "./cardP4";

const KontenP4 = () => {
  return (
    <div className="bg-latar-blue text-white gap-10 flex flex-col p-6 sm:p-10 lg:p-20">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-10 sm:gap-5">
        <div className="flex flex-col w-full sm:w-auto">
          <p className="text-base">GoTask Waktu</p>
          <p className="text-4xl font-bold uppercase text">
            Manajemen Waktu yang Cerdas <br />
            dengan GoTask
            <span className="text-secondary-blue">.</span>
          </p>
          <p className="leading-6 text-sm w-full sm:w-[500px]">
            GoTask dilengkapi dengan fitur-fitur canggih untuk membantu Anda
            mengelola waktu dengan efisien
          </p>
        </div>
        <div className="flex flex-col justify-end items-center sm:items-end gap-3 w-full sm:w-auto">
          <button
            type="button"
            className="text-white bg-secondary-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Lihat Lebih Banyak
          </button>
        </div>
      </div>
      <CardP4 />
      <div className="flex flex-col gap-1 text-center justify-center items-center">
        <p>“ Optimalkan waktu Anda sekarang! “</p>
        <div className="bg-secondary-blue w-36 h-1 mx-auto"></div>
        <div className="bg-secondary-blue w-28 h-1 mx-auto"></div>
      </div>
    </div>
  );
};

export default KontenP4;

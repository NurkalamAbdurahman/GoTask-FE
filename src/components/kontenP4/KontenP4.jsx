import CardP4 from "./cardP4";

const Konten4 = () => {
  return (
    <div className="bg-latar-blue  text-white gap-10 flex flex-col py-10 px-20">
      <div className="flex justify-between items-end">
        <div className="flex flex-col">
          <p className="text-base">GoTask Waktu</p>
          <p className="text-4xl font-bold uppercase text">
            Manajemen Waktu yang Cerdas <br />
            dengan GoTask
            <span className="text-secondary-blue">.</span>
          </p>
          <p className="leading-6 text-sm w-[500px]">
            GoTask dilengkapi dengan fitur-fitur canggih untuk membantu Anda
            mengelola waktu dengan efisien
          </p>
        </div>
        <div className="flex flex-col justify-end items-end gap-3">
        <button
            type="button"
            className="text-white bg-secondary-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-[5rem] py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Lihat Lebih Banyak
          </button>
        </div>
      </div>
      <CardP4/>
      <div className="flex flex-col gap-1 text-center justify-center items-center ">
        <p>“ Optimalkan waktu Anda sekarang! “</p>
        <div className="bg-secondary-blue w-36 h-1"></div>
        <div className="bg-secondary-blue w-28 h-1"></div>
      </div>
    </div>
  );
};

export default Konten4;

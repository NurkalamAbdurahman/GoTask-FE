import CardP8 from "./CardP8";
import GoTask from "../../../assets/images/icon/jGoTask.png";
import ItClub from "../../../assets/images/icon/jItClub.png";
import X from "../../../assets/images/icon/x.png";

const KontenP8 = () => {
  return (
    <div className="bg-latar-blue text-white flex flex-col items-center gap-10 p-10 md:p-20">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="flex flex-col gap-5 justify-between items-start max-w-lg">
          <div className="flex flex-col gap-3">
            <p className="text-base">GoTask Penghubung</p>
            <p className="text-2xl md:text-4xl font-bold uppercase">
              Terhubung dengan Alat <br className="hidden md:block" /> Favorit
              Anda
              <span className="text-secondary-blue">.</span>
            </p>
            <p className="leading-6 text-sm md:text-base text-justify">
              GoTask memprioritaskan keamanan data Anda. Setiap informasi proyek
              dienkripsi dan dilindungi dengan sistem keamanan canggih untuk
              mencegah akses tidak sah. GoTask tidak hanya berdiri sendiri,
              tetapi juga terintegrasi dengan berbagai alat produktivitas
              populer seperti Google Drive, Dropbox, Slack, dan banyak lagi.
              <br />
              <br />
              Ini memungkinkan Anda untuk menghubungkan tugas dan dokumen
              penting tanpa harus meninggalkan platform. Dengan fitur backup
              otomatis, Anda tidak perlu khawatir kehilangan data penting.
            </p>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2 px-5 text-center"
            >
              Lihat Selengkapnya
            </button>
          </div>
        </div>
        <CardP8 />
      </div>

      <p className="text-center text-sm md:text-base max-w-2xl">
        “ Bergabunglah dengan lebih dari 2.000.000 tim di seluruh dunia yang
        menggunakan GoTask untuk menyelesaikan lebih banyak hal. “
      </p>

      <div className="flex flex-col lg:flex-row gap-3 justify-center items-center">
        <img
          src={GoTask}
          alt="GoTask Logo"
          className=""
        />
        <img src={X} alt="X Logo" className="" />
        <img
          src={ItClub}
          alt="IT Club Logo"
          className=""
        />
      </div>
    </div>
  );
};

export default KontenP8;

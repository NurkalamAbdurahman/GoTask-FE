import CardP8 from "./cardP8";
import GoTask from "../../../assets/images/icon/jGoTask.png";
import ItClub from "../../../assets/images/icon/jItClub.png";
import X from "../../../assets/images/icon/x.png";
const KontenP8 = () => {
  return (
    <div className="bg-latar-blue text-white justify-center items-center gap-10 flex flex-col p-20">
    <div className="justify-between items-center flex gap-10">
      <div className="flex flex-col gap-5 justify-between items-start">
        <div className="flex gap-3 flex-col">
          <p className="text-base">GoTask Penghubung</p>
          <p className="text-4xl font-bold uppercase text">
            Terhubung dengan Alat <br />
            Favorit Anda
            <span className="text-secondary-blue">.</span>
          </p>
          <p className="leading-6 text-sm w-[500px] text-justify">
            GoTask memprioritaskan keamanan data Anda. Setiap informasi proyek
            dienkripsi dan dilindungi dengan sistem keamanan canggih untuk
            mencegGoTask tidak hanya berdiri sendiri, tetapi juga terintegrasi
            dengan berbagai alat produktivitas populer seperti Google Drive,
            Dropbox, Slack, dan banyak lagi.
            <br />
            <br />
            Ini memungkinkan Anda untuk menghubungkan tugas dan dokumen penting
            tanpa harus meninggalkan platform.ah akses tidak sah. Dengan fitur
            backup otomatis, Anda tidak perlu khawatir kehilangan data penting
          </p>
          <button
            type="button"
            className="text-white w-52 bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2 text-center"
          >
            Lihat Selengkapnya
          </button>
        </div>
      </div>
      <CardP8 />
    </div>
    <p>“ Bergabunglah dengan lebih dari 2.000.000 tim di seluruh dunia yang menggunakan GoTask untuk menyelesaikan lebih banyak hal. “</p>
    <div className="flex gap-3 justify-center items-center">
    <img src={GoTask} alt="" />
    <img src={X} alt="" />
    <img src={ItClub} alt="" />
    </div>
    </div>
  );
};

export default KontenP8;

import GrubKanan from "../../assets/images/icon/Group 81.png";
import GrubKiri from "../../assets/images/icon/Group 82.png";
const KontenP10 = () => {
  return (
    <div className="bg-latar-blue text-white justify-center items-center gap-5 flex p-20">
      <div className="bg-secondary-blue bg-opacity-10 flex justify-center items-center border-solid border-primary-blue border gap-4 p-10 rounded-lg bg-blur-sm ">
        <img src={GrubKanan} alt="" />
        <div className="text-center flex flex-col gap-8 justify-center items-center">
          <p className="font-bold text-4xl">Mulailah dengan GoTask hari ini</p>
          <p className="text-md">
            Ingin mengoptimalkan waktu dan meningkatkan efisiensi kerja Anda?
            Daftar email kami dan dapatkan tips, trik, dan template yang berguna
            secara gratis. Kami akan membantu Anda mencapai tujuan Anda lebih
            cepat.
          </p>
          <form className="flex">
            <input
              type="text"
              placeholder="Masukkan email.."
              className="py-2 px-4 text-black rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="py-2 px-5 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Daftar - gratis
            </button>
          </form>
        </div>
        <img src={GrubKiri} alt="" />
      </div>
    </div>
  );
};

export default KontenP10;

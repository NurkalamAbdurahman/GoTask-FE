import GrubKanan from "../../../assets/images/icon/Group 81.png";
import GrubKiri from "../../../assets/images/icon/Group 82.png";

const KontenP10 = () => {
  return (
    <div className="bg-latar-blue text-white flex justify-center items-center p-10 md:p-20">
      <div className="bg-secondary-blue bg-opacity-10 flex flex-col lg:flex-row justify-center items-center border-solid border-primary-blue border gap-6 p-6 md:p-10 rounded-lg">
        <img
          src={GrubKanan}
          alt="Grup Kanan"
          className="hidden lg:block"
        />
        <div className="text-center flex flex-col gap-6 justify-center items-center max-w-lg">
          <p className="font-bold text-2xl md:text-3xl lg:text-4xl">
            Mulailah dengan GoTask hari ini
          </p>
          <p className="text-sm md:text-base lg:text-md leading-relaxed">
            Ingin mengoptimalkan waktu dan meningkatkan efisiensi kerja Anda?
            Daftar email kami dan dapatkan tips, trik, dan template yang berguna
            secara gratis. Kami akan membantu Anda mencapai tujuan Anda lebih
            cepat.
          </p>
          <form className="flex w-full max-w-md">
            <input
              type="text"
              placeholder="Masukkan email.."
              className="flex-1 py-2 px-4 text-black rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="py-2 px-5 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Daftar - gratis
            </button>
          </form>
        </div>
        <img
          src={GrubKiri}
          alt="Grup Kiri"
          className="hidden lg:block"
        />
      </div>
    </div>
  );
};

export default KontenP10;

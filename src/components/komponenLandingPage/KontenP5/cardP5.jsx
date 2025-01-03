import Logo from "../../../assets/images/icon/mediasi.png";
import "./cardP5.css";

const CardP5 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-5">
      <div className="flex flex-col justify-start items-start gap-5 w-full lg:w-1/2">
        <div className="relative flex justify-start items-start w-full">
          <div className="bg-white w-14 h-14 rounded-full absolute flex justify-center items-center">
            <img src={Logo} alt="" />
          </div>
          <div className="inverted-radius w-full h-[250px]">
            <p className="text-black font-semibold text-md ps-24 p-5">
              Bekerja Sama Lebih Efisien
            </p>
            <p className="text-black p-10 py-5 text-sm">
              Tingkatkan produktivitas tim Anda dengan fitur kolaborasi GoTask.
              Komunikasi langsung, pembaruan status real-time, dan berbagi file
              yang mudah membuat setiap proyek berjalan lancar. <br /> <br />{" "}
              <a href="#" className="underline decoration-1">
                Lihat Selengkapnya
              </a>
            </p>
          </div>
        </div>
        <div className="relative flex justify-start items-start w-full">
          <div className="bg-white w-14 h-14 rounded-full absolute flex justify-center items-center">
            <img src={Logo} alt="" />
          </div>
          <div className="inverted-radius w-full h-[250px]">
            <p className="text-black font-semibold text-md ps-24 p-5">
              Bekerja Sama Lebih Efisien
            </p>
            <p className="text-black p-10 py-5 text-sm">
              Tingkatkan produktivitas tim Anda dengan fitur kolaborasi GoTask.
              Komunikasi langsung, pembaruan status real-time, dan berbagi file
              yang mudah membuat setiap proyek berjalan lancar. <br /> <br />{" "}
              <a href="#" className="underline decoration-1">
                Lihat Selengkapnya
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center items-start w-full md:w-1/2">
        <div className="bg-white w-14 h-14 rounded-full absolute flex justify-center items-center">
          <img src={Logo} alt="" />
        </div>
        <div className="inner-curves pt-20 p-10 w-full h-[430px] lg:h-[500px]">
          <p className="text-black font-semibold text-md">
            Tingkatkan Kinerja Tim Anda
          </p>
          <p className="text-black py-5 text-sm">
            GoTask adalah alat yang dirancang untuk menyederhanakan dan
            meningkatkan kolaborasi dalam tim. Dengan fitur-fitur yang
            komprehensif, GoTask membantu Anda:
            <br />
            <br />
            <ul className="list-disc ps-5">
              <li>
                Bekerja sama secara real-time: Diskusikan ide, berikan umpan
                balik, dan tetap terhubung dengan tim Anda kapan saja, di mana
                saja.
              </li>
              <li>
                Organisir proyek dengan mudah: Kelola tugas, tetapkan prioritas,
                dan pantau kemajuan proyek dengan tampilan yang jelas dan
                intuitif.
              </li>
              <li>
                Akses semua file di satu tempat: Simpan, berbagi, dan lacak
                perubahan pada file proyek dengan aman dan efisien.
              </li>
            </ul>
            <br />
            <a href="#" className="underline decoration-1">
              Lihat Selengkapnya
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardP5;

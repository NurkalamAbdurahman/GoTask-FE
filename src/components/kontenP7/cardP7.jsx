import { useState } from "react";

const CardP7 = () => {
  const [isYearly, setIsYearly] = useState(false);

  const pricing = {
    free: isYearly ? "Rp. 0" : "Rp. 0",
    freeT: isYearly ? "/per tahun" : "/per bulan",
    pro: isYearly ? "Rp. 99.900" : "Rp. 9.900",
    proT: isYearly ? "/per tahun" : "/per bulan",
    business: isYearly ? "Rp. 299.900" : "Rp. 29.900",
    businessT: isYearly ? "/per tahun" : "/per bulan",
    custom: isYearly ? "Rp. 0" : "Rp. 0",
    customT: isYearly ? "/per tahun" : "per bulan",
  };

  return (
    <div className="flex justify-center items-center flex-col gap-5">
      <div className="flex border-solid border-2 justify-between p-1 w-40 items-center border-primary-blue bg-secondary-blue bg-opacity-10 rounded-lg">
        <button
          className={`px-4 py-2 rounded-lg ${
            !isYearly ? "bg-secondary-blue text-white" : ""
          }`}
          onClick={() => setIsYearly(false)}
        >
          Bulan
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            isYearly ? "bg-secondary-blue text-white" : ""
          }`}
          onClick={() => setIsYearly(true)}
        >
          Tahun
        </button>
      </div>

      <div className="flex justify-center items-center gap-4 flex-wrap">
        <div className="text-white bg-secondary-blue gap-5 flex justify-center items-center w-[550px] h-64 bg-opacity-10 border-solid border-2 border-primary-blue font-medium rounded-lg text-sm text-start">
          <div className="p-5 flex flex-col justify-start gap-2 items-start">
            <p className="text-md font-bold">Gratis</p>
            <p className="text-sm w-52 font-normal">
              Cocok untuk tim kecil atau individu yang baru memulai.
            </p>
            <p className="text-2xl font-medium pt-3">{pricing.free} <span className="text-sm font-normal">{pricing.freeT}</span></p>
            <button
              type="button"
              className="text-white w-[100%] bg-secondary-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md py-1 px-2 text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Memulai
            </button>
          </div>
          <div className="bg-white w-[1px] h-44"></div>
          <div className="p-5 ps-0 flex flex-col justify-start gap-4 items-start">
            <p className="text-md font-bold">Fitur - fitur</p>
            <ul className="list-disc ps-5 leading-8 font-normal">
              <li>1 Board Proyek</li>
              <li>10 Card per Board</li>
              <li>2 Anggota Tim</li>
              <li>Integrasi dasar (Google Drive, Dropbox)</li>
              <a href="#" className="underline decoration-1">
                Lihat Selengkapnya
              </a>
            </ul>
          </div>
        </div>

        <div className="text-white bg-secondary-blue gap-5 flex justify-center items-center w-[550px] h-64 bg-opacity-10 border-solid border-2 border-primary-blue font-medium rounded-lg text-sm text-start">
          <div className="p-5 flex flex-col justify-start gap-2 items-start">
            <p className="text-md font-bold">Pro</p>
            <p className="text-sm w-52 font-normal">
              Ideal untuk tim berukuran menengah yang membutuhkan lebih banyak
              fleksibilitas.
            </p>
            <p className="text-2xl font-medium pt-3">{pricing.pro} <span className="text-sm font-normal">{pricing.proT}</span></p>
            <button
              type="button"
              className="text-black w-[100%] bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md py-1 px-2 text-sm text-center dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Memulai
            </button>
          </div>
          <div className="bg-white w-[1px] h-44"></div>
          <div className="p-5 ps-0 flex flex-col justify-start gap-4 items-start">
            <p className="text-md font-bold">Fitur - fitur</p>
            <ul className="list-disc ps-5 leading-8 font-normal">
              <li>Board Proyek Tak Terbatas</li>
              <li>Card Tak Terbatas</li>
              <li>20 Anggota Tim</li>
              <li>Integrasi penuh dengan aplikasi pihak ketiga</li>
              <a href="#" className="underline decoration-1">
                Lihat Selengkapnya
              </a>
            </ul>
          </div>
        </div>

        <div className="text-white bg-secondary-blue gap-5 flex justify-center items-center w-[550px] h-64 bg-opacity-10 border-solid border-2 border-primary-blue font-medium rounded-lg text-sm text-start">
          <div className="p-5 flex flex-col justify-start gap-2 items-start">
            <p className="text-md font-bold">Bisnis</p>
            <p className="text-sm w-52 font-normal">
              Cocok untuk tim kecil atau individu yang baru memulai.
            </p>
            <p className="text-2xl font-medium pt-3">{pricing.business} <span className="text-sm font-normal">{pricing.businessT}</span></p>
            <button
              type="button"
              className="text-white w-[100%] bg-secondary-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md py-1 px-2 text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Memulai
            </button>
          </div>
          <div className="bg-white w-[1px] h-44"></div>
          <div className="p-5 ps-0 flex flex-col justify-start gap-4 items-start">
            <p className="text-md font-bold">Fitur - fitur</p>
            <ul className="list-disc ps-5 leading-8 font-normal">
              <li>Semua fitur dari Paket Pro</li>
              <li>Anggota Tim Tak Terbatas</li>
              <li>Dukungan prioritas</li>
              <li>Fitur keamanan lanjutan (backup otomatis)</li>
              <a href="#" className="underline decoration-1">
                Lihat Selengkapnya
              </a>
            </ul>
          </div>
        </div>

        <div className="text-white bg-secondary-blue gap-5 flex justify-center items-center w-[550px] h-64 bg-opacity-10 border-solid border-2 border-primary-blue font-medium rounded-lg text-sm text-start">
          <div className="p-5 flex flex-col justify-start gap-2 items-start">
            <p className="text-md font-bold">Custom</p>
            <p className="text-sm w-52 font-normal">
              Untuk tim besar atau perusahaan dengan kebutuhan khusus
            </p>
            <p className="text-2xl font-medium pt-3">{pricing.custom} <span className="text-sm font-normal">{pricing.freeT}</span></p>
            <button
              type="button"
              className="text-white w-[100%] bg-secondary-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md py-1 px-2 text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Memulai
            </button>
          </div>
          <div className="bg-white w-[1px] h-44"></div>
          <div className="p-5 ps-0 flex flex-col justify-start gap-4 items-start">
            <p className="text-md font-bold">Fitur - fitur</p>
            <ul className="font-normal leading-6">
              <li>
                Kami menawarkan paket kustom. Hubungi kami untuk diskusi lebih
                lanjut dan dapatkan solusi yang sesuai dengan proyek Anda.
              </li>
              <a href="#" className="underline decoration-1">
                Lihat Selengkapnya
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardP7;

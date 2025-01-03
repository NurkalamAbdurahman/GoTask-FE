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
    custom: isYearly ? "Hubungi Kami" : "Hubungi Kami",
    customT: isYearly ? "" : "",
  };

  const cards = [
    {
      title: "Gratis",
      description: "Cocok untuk tim kecil atau individu yang baru memulai.",
      price: pricing.free,
      priceTag: pricing.freeT,
      features: [
        "1 Board Proyek",
        "10 Card per Board",
        "2 Anggota Tim",
        "Integrasi dasar (Google Drive, Dropbox)",
      ],
    },
    {
      title: "Pro",
      description:
        "Ideal untuk tim berukuran menengah yang membutuhkan lebih banyak fleksibilitas.",
      price: pricing.pro,
      priceTag: pricing.proT,
      features: [
        "Board Proyek Tak Terbatas",
        "Card Tak Terbatas",
        "20 Anggota Tim",
        "Integrasi penuh dengan aplikasi pihak ketiga",
      ],
    },
    {
      title: "Bisnis",
      description: "Cocok untuk tim besar yang membutuhkan solusi lengkap.",
      price: pricing.business,
      priceTag: pricing.businessT,
      features: [
        "Semua fitur dari Paket Pro",
        "Anggota Tim Tak Terbatas",
        "Dukungan prioritas",
        "Fitur keamanan lanjutan (backup otomatis)",
      ],
    },
    {
      title: "Custom",
      description: "Untuk tim besar atau perusahaan dengan kebutuhan khusus.",
      price: pricing.custom,
      priceTag: pricing.customT,
      features: [
        "Paket kustom yang sesuai dengan kebutuhan Anda",
        "Dukungan khusus",
        "Solusi terintegrasi",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Toggle Button */}
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

      {/* Cards */}
      <div className="flex flex-wrap justify-center items-center gap-4 w-full">
        {cards.map((card, index) => (
          <div
            key={index}
            className="text-white bg-secondary-blue flex flex-col lg:flex-row lg:items-center w-full lg:w-[550px] bg-opacity-10 border-solid border-2 border-primary-blue font-medium rounded-lg text-sm"
          >
            <div className="p-5 flex flex-col justify-start gap-2 items-start">
              <p className="text-md font-bold">{card.title}</p>
              <p className="text-sm w-full lg:w-52 font-normal">
                {card.description}
              </p>
              <p className="text-2xl font-medium pt-3">
                {card.price} <span className="text-sm font-normal">{card.priceTag}</span>
              </p>
              <button
                type="button"
                className="text-white w-full bg-secondary-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md py-1 px-2 text-sm text-center"
              >
                Memulai
              </button>
            </div>
            <div className="bg-white w-full lg:w-[1px] h-[1px] lg:h-44 my-2 lg:my-0"></div>
            <div className="p-5 flex flex-col justify-start gap-4 items-start">
              <p className="text-md font-bold">Fitur - fitur</p>
              <ul className="list-disc pl-5 leading-8 font-normal">
                {card.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardP7;

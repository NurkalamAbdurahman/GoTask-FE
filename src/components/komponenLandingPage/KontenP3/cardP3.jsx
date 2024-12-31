import { useState } from "react";
import Colab from "../../../assets/images/icon/colab.png";
import Arrow from "../../../assets/images/icon/arrowP3.png";
import "./cardP3.css";

const CardP3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeButton, setActiveButton] = useState("next");

  const cards = [
    {
      title: "Kolaborasi Tanpa Batas",
      description:
        "Agenda virtual: Buat agenda rapat yang jelas dan bagikan / sebarkan kepada semua anggota tim.",
      description2:
        "Diskusi interaktif: Tambahkan komentar dan lampiran pada kartu untuk mendiskusikan ide.",
      image: Colab,
    },
    {
      title: "Kuasai Proyek Anda dari Awal hingga Akhir",
      description:
        "Visualisasikan: Lihat gambaran keseluruhan proyek Anda dengan mudah.",
      description2:
        "Organisasi: Kelompokkan tugas-tugas ke dalam daftar yang berbeda (To Do, In Progress, Done). Prioritaskan: Tentukan tugas mana yang paling penting dan atur tenggat waktunya.",
      image: Colab,
    },
    {
      title: "Kembangkan Ide-Ide Brilian",
      description:
        "Kumpulkan ide: Buat papan khusus untuk mengumpulkan ide-ide baru dari semua anggota tim.",
      description2:
        "Voting ide: Gunakan fitur voting untuk memilih ide terbaik.",
      image: Colab,
    },
    {
      title: "Tingkatkan Komunikasi Tim",
      description:
        "Gunakan alat komunikasi yang efektif untuk menjaga semua anggota tim tetap terhubung.",
      description2:
        "Pantau semua diskusi penting langsung di satu tempat tanpa kehilangan konteks.",
      image: Colab,
    },
    {
      title: "Manajemen Waktu yang Efektif",
      description:
        "Tetapkan tenggat waktu yang realistis dan gunakan alat manajemen waktu untuk meningkatkan produktivitas.",
      description2:
        "Kelola jadwal harian Anda dengan fitur notifikasi yang memastikan semua tugas selesai tepat waktu.",
      image: Colab,
    },
    {
      title: "Analisis Kinerja Proyek",
      description:
        "Lakukan analisis berkala untuk mengevaluasi kemajuan proyek dan membuat penyesuaian yang diperlukan.",
      description2:
        "Gunakan laporan otomatis untuk memahami tren dan meningkatkan efisiensi tim.",
      image: Colab,
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % cards.length);
    setActiveButton("next");
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 3 + cards.length) % cards.length
    );
    setActiveButton("prev");
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-center items-center flex-col lg:flex-row gap-6 lg:gap-10">
        {cards.slice(currentIndex, currentIndex + 3).map((card, index) => (
          <div
            key={index}
            className="card w-full bg-secondary-blue bg-opacity-10 border-solid border-2 border-primary-blue rounded-lg lg:w-80 shadow-xl"
          >
            <div className="relative flex-col flex justify-center items-center">
              <div className="inner-curve "></div>
              <img
                src={card.image}
                alt=""
                className="bg-secondary-blue -bottom-7 absolute p-2 rounded-full"
              />
            </div>
            <div className="card-body p-6 md:p-10 flex flex-col gap-4">
              <h2 className="card-title uppercase font-bold text-sm md:text-base">
                {card.title}
              </h2>
              <p className="text-[12px] md:text-sm text-justify">
                {card.description}
              </p>
              <p className="text-[12px] md:text-sm text-justify">
                {card.description2}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <div className="bg-secondary-blue w-12 h-5"></div>
          <div className="bg-secondary-blue w-20 h-5"></div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className={`w-8 h-8 p-2 flex justify-center items-center rounded-md border-2 ${
              activeButton === "prev" ? "bg-blue-500" : "bg-secondary-blue"
            }`}
          >
            <img src={Arrow} alt="Previous" />
          </button>
          <button
            onClick={handleNext}
            className={`w-8 h-8 p-2 flex justify-center items-center rounded-md border-2 ${
              activeButton === "next" ? "bg-blue-500" : "bg-secondary-blue"
            }`}
          >
            <img className="rotate-180" src={Arrow} alt="Next" />
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-secondary-blue w-12 h-5"></div>
          <div className="bg-secondary-blue w-20 h-5"></div>
        </div>
      </div>
    </div>
  );
};

export default CardP3;

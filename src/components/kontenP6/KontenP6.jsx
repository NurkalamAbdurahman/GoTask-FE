import { useState } from "react";
import CardP6 from "./cardP6";

const KontenP6 = () => {
  const [selectedButton, setSelectedButton] = useState("enkripsi");

  const buttonStyles = (buttonName) =>
    buttonName === selectedButton
      ? "text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-14 py-2 text-center"
      : "text-white bg-secondary-blue bg-opacity-10 border-solid border-2 border-primary-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-12 py-2 text-center";

  return (
    <div className="bg-latar-blue h-screen text-white justify-between items-center flex py-10 px-20">
      <div className="flex flex-col gap-5 justify-between items-start">
        <div className="flex gap-3 flex-col">
          <p className="text-base">GoTask Pelindung</p>
          <p className="text-4xl font-bold uppercase text">
            Keamanan Data Proyek <br /> Anda Terjamin
            <span className="text-secondary-blue">.</span>
          </p>
          <p className="leading-6 text-sm w-[500px]">
            GoTask memprioritaskan keamanan data Anda. Setiap informasi proyek
            dienkripsi dan dilindungi dengan sistem keamanan canggih untuk
            mencegah akses tidak sah. Dengan fitur backup otomatis, Anda tidak
            perlu khawatir kehilangan data penting.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="flex justify-end items-end gap-3">
            <button
              type="button"
              onClick={() => setSelectedButton("enkripsi")}
              className={buttonStyles("enkripsi")}
            >
              Enkripsi end-to-end.
            </button>
            <button
              type="button"
              onClick={() => setSelectedButton("backup")}
              className={buttonStyles("backup")}
            >
              Backup otomatis.
            </button>
          </div>
          <button
            type="button"
            onClick={() => setSelectedButton("akses")}
            className={buttonStyles("akses")}
            style={{
              paddingInlineStart: "4rem",
              paddingInlineEnd: "4rem",
            }}
          >
            Akses berbasis peran untuk keamanan tingkat lanjut.
          </button>
        </div>
      </div>
      <CardP6 description={selectedButton} />
    </div>
  );
};

export default KontenP6;

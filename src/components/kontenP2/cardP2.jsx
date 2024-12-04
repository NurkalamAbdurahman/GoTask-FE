import { useState } from "react";

const CardP2 = () => {
  const [activeView, setActiveView] = useState("board");

  const renderContent = () => {
    switch (activeView) {
      case "list":
        return (
          <div className="deskripsi w-[500px] flex flex-col items-center justify-center p-10 absolute text-start rounded-bl-lg rounded-br-lg bg-black bg-opacity-50 h-full blur-8">
            <div>
              <div className="bg-secondary-blue w-[20px] h-[5px]"></div>
              <p className="text-[20px] font-bold">2. List</p>
              <p className="text-[20px]">
                Daftar membantu Anda mengatur tugas secara terstruktur.
                <br />
                <br />
                Anda dapat memprioritaskan tugas dan melacak kemajuannya.
                <br />
                <br />
                Berkolaborasi dengan tim Anda dengan berbagi daftar.
              </p>
            </div>
          </div>
        );
      case "card":
        return (
          <div className="deskripsi w-[500px] flex flex-col items-center justify-center p-10 absolute text-start rounded-bl-lg rounded-br-lg bg-black bg-opacity-50 h-full blur-8">
            <div>
              <div className="bg-secondary-blue w-[20px] h-[5px]"></div>
              <p className="text-[20px] font-bold">3. Card</p>
              <p className="text-[20px]">
                Kartu memberikan gambaran rinci tentang tugas individu.
                <br />
                <br />
                Anda dapat menambahkan komentar, lampiran, dan tanggal jatuh
                tempo.
                <br />
                <br />
                Pindahkan kartu antar daftar dengan mudah untuk mencerminkan
                kemajuan.
              </p>
            </div>
          </div>
        );
      default:
        return (
          <div className="deskripsi w-[500px] flex flex-col items-center justify-center p-10 absolute text-start rounded-bl-lg rounded-br-lg bg-black bg-opacity-50 h-full blur-8">
            <div>
              <div className="bg-secondary-blue w-[20px] h-[5px]"></div>
              <p className="text-[20px] font-bold">1. Board</p>
              <p className="text-[20px]">
                Tetap terorganisir: Semua tugasmu jadi lebih mudah dilacak.
                <br />
                <br />
                Meningkatkan produktivitas: Kamu bisa fokus pada tugas yang
                paling penting.
                <br />
                <br />
                Bekerja sama dengan tim: Kamu bisa mengajak teman atau rekan
                kerja untuk bekerja sama dalam satu papan.
              </p>
            </div>
          </div>
        );
    }
  };

  const getImageSrc = () => {
    switch (activeView) {
      case "list":
        return "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      case "card":
        return "https://images.unsplash.com/photo-1509316554658-04f9287cdb78?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      default:
        return "https://plus.unsplash.com/premium_photo-1661963429761-5f27bcb6cdaa?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    }
  };

  return (
    <div className="flex gap-5 flex-col justify-center items-center">
      <div className="border-solid border-2 rounded-lg border-primary-blue">
        <button
          className={`rounded-md w-[395px] py-2 ${
            activeView === "board"
              ? "bg-blue-500"
              : "bg-secondary-blue bg-opacity-10"
          }`}
          onClick={() => setActiveView("board")}
        >
          Board
        </button>
        <button
          className={`rounded-md w-[395px] py-2 ${
            activeView === "list"
              ? "bg-blue-500"
              : "bg-secondary-blue bg-opacity-10"
          }`}
          onClick={() => setActiveView("list")}
        >
          List
        </button>
        <button
          className={`rounded-md w-[395px] py-2 ${
            activeView === "card"
              ? "bg-blue-500"
              : "bg-secondary-blue bg-opacity-10"
          }`}
          onClick={() => setActiveView("card")}
        >
          Card
        </button>
      </div>
      <div>
        <div className="relative w-[1200px] h-[450px] overflow-hidden group">
          <img
            className="absolute inset-0 rounded-lg w-full h-full object-cover"
            src={getImageSrc()}
            alt="View"
          />
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default CardP2;

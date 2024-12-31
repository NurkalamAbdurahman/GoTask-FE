import CardP2 from "./cardP2";

const KontenP2 = () => {
  return (
    <div className="bg-latar-blue text-white gap-5 flex flex-col p-5 md:p-20">
      <div className="flex flex-wrap md:flex-nowrap justify-between items-start gap-5">
        <div className="flex flex-col w-full md:w-auto">
          <p className="text-base">GoTask 101</p>
          <p className="text-2xl md:text-4xl font-bold uppercase">
            Sederhanakan hidup Anda <br className="hidden md:block" /> dengan GoTask
            <span className="text-secondary-blue">.</span>
          </p>
          <p className="leading-6 text-sm w-full md:w-[500px]">
            Alat yang kuat namun mudah digunakan ini akan membantu Anda mengatur waktu, memprioritaskan tugas, dan mencapai tujuan Anda. <br />
            <a href="#" className="underline decoration-1">
              Pelajari Lebih lanjut.
            </a>
          </p>
        </div>
        <div className="lg:flex hidden flex-col justify-end items-end gap-3">
          <div className="bg-secondary-blue w-[100px] md:w-[150px] h-[10px] md:h-[20px]"></div>
          <div className="bg-secondary-blue w-[70px] md:w-[100px] h-[10px] md:h-[20px]"></div>
        </div>
      </div>
      <div>
        <CardP2 />
      </div>
    </div>
  );
};

export default KontenP2;

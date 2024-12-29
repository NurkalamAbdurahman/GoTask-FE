import CardP2 from "./cardP2";

const KontenP2 = () => {
  return (
    <div className="bg-latar-blue text-white gap-5 flex flex-col p-20">
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <p className="text-base">GoTask 101</p>
          <p className="text-4xl font-bold uppercase text">
            Sederhanakan hidup Anda <br /> dengan GoTask
            <span className="text-secondary-blue">.</span>
          </p>
          <p className="leading-6 text-sm w-[500px]">
            Alat yang kuat namun mudah digunakan ini akan membantu Anda mengatur
            waktu, memprioritaskan tugas, dan mencapai tujuan Anda. <br />
            <a href="" className="underline decoration-1">
              Pelajari Lebih lanjut.
            </a>
          </p>
        </div>
        <div className="flex flex-col justify-end items-end gap-3">
          <div className="bg-secondary-blue w-[150px] h-[20px]"></div>
          <div className="bg-secondary-blue w-[100px] h-[20px]"></div>
        </div>
      </div>
      <div>
        <CardP2 />
      </div>
    </div>
  );
};

export default KontenP2;

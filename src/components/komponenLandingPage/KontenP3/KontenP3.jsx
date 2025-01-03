import CardP3 from "./cardP3";

const KontenP3 = () => {
  return (
    <div className="bg-latar-blue text-white flex flex-col gap-10 px-5 py-10 md:px-16 md:py-20">
      <div className="flex flex-col justify-center items-center text-center gap-4">
        <p className="text-sm md:text-base">GoTask Beraksi</p>
        <h1 className="text-2xl md:text-4xl font-bold uppercase leading-snug">
          Sempurnakan Proyek Anda <br className="hidden md:block" />
          dengan GoTask<span className="text-secondary-blue">.</span>
        </h1>
        <p className="leading-6 text-sm md:text-base max-w-md md:max-w-lg">
          GoTask adalah alat yang fleksibel untuk mengatur segala jenis proyek, dari yang kecil hingga yang besar. 
          Dengan GoTask, Anda bisa mengatur alur kerja, mengadakan rapat virtual, dan memicu ide-ide kreatif.
        </p>
      </div>

      <CardP3 />
    </div>
  );
};

export default KontenP3;

import CardP3 from "./cardP3";

const KontenP3 = () => {
  return (
    <div className="bg-latar-blue text-white gap-5 flex flex-col p-20">
      <div className="flex justify-center items-center text-center">
        <div className="flex flex-col gap-2">
          <p className="text-base">GoTask Beraksi</p>
          <p className="text-4xl font-bold uppercase text">
            Sempurnakan Proyek Anda <br />
            dengan GoTask
            <span className="text-secondary-blue">.</span>
          </p>
          <p className="leading-6 text-sm w-[500px]">
            GoTask adalah alat yang fleksibel untuk mengatur segala jenis
            proyek, dari yang kecil hingga yang besar. Dengan GoTask, Anda bisa
            mengatur alur kerja, mengadakan rapat virtual, dan memicu ide-ide
            kreatif.
          </p>
        </div>
      </div>
      <CardP3/>
    </div>
  );
};

export default KontenP3;

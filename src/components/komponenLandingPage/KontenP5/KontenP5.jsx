import CardP5 from "./cardP5";

const KontenP5 = () => {
  return (
    <div className="bg-primary-blue text-white gap-5 flex flex-col p-5 md:p-20">
      <div className="flex justify-center items-center text-center">
        <div className="flex flex-col gap-2">
          <p className="text-base">GoTask kolaborasi</p>
          <p className="text-4xl font-bold uppercase text">
            Tingkatkan Kolaborasi Tim Anda <br />
            dengan GoTask
            <span className="text-secondary-blue">.</span>
          </p>
          <p className="leading-6 text-sm w-full md:w-[700px]">
            Kolaborasi menjadi lebih mudah dengan GoTask. Setiap anggota tim
            dapat berkomentar langsung di dalam card, membagikan file, atau
            memberikan pembaruan status. Semua aktivitas ini terjadi secara
            real-time sehingga semua orang bisa terus terhubung dan up to date.
          </p>
        </div>
      </div>
      <CardP5 />
    </div>
  );
};

export default KontenP5;

import Profil from "../dasboardMember/profil";
import Setting from "./setting";

const DasboardSetting = () => {
  return (
    <div className="h-screen w-[100%] p-3 flex flex-col gap-2">
      <div className="flex w-full relative justify-center items-center gap-2 ">
        <div className="w-1/2">
          <div className="inverted-member text-xs flex gap-4 p-4">
            <div className="w-2/3">
              <h3 className="text-sm font-semibold">Visibilitas ruang kerja</h3>
              <p>
                <span>Private</span> – Ruang Kerja ini bersifat pribadi. Itu
                tidak diindeks atau terlihat oleh orang-orang di luar Ruang
                Kerja.
              </p>
            </div>
            <div className="w-1/3">
              <button className="bg-secondary-blue w-full hover:bg-primary-blue py-1 text-xs rounded-lg">
                Ubah
              </button>
            </div>
          </div>
        </div>
        <div className="w-14 h-14 absolute -bottom-8 bg-primary-blue text-white rounded-full flex items-center justify-center text-2xl font-bold">
          G
        </div>
        <div className="w-1/2 flex flex-col gap-2">
          <Profil />
        </div>
      </div>
      <Setting/>
    </div>
  );
};

export default DasboardSetting;

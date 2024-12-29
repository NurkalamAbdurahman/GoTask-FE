import "./Dasboard.css";
import Workspace from "./workspace";
import Profil from "./profil";
import Kolab from "./Kolab";
const DasboardMember = () => {
  return (
    <div className="h-screen w-[100%] p-3 flex flex-col gap-2">
      <div className="flex w-full relative justify-center items-center gap-2 ">
        <div className="w-1/2">
          <Kolab />
        </div>
        <div className="w-14 h-14 absolute -bottom-8 bg-primary-blue text-white rounded-full flex items-center justify-center text-2xl font-bold">
          G
        </div>
        <div className="w-1/2 flex flex-col gap-2">
          <Profil />
        </div>
      </div>
      <div className="w-full">
        <Workspace />
      </div>
    </div>
  );
};

export default DasboardMember;

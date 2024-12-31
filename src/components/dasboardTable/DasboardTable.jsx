import Profil from "../dasboardMember/profil";
import KontenTable from "./KontenTable";
import Table from "./Table";

const DasboardTable = () => {
  return (
    <div className="lg:h-screen w-[100%] p-3 flex flex-col gap-2 py-5">
      <div className="flex w-full flex-col-reverse lg:flex-row relative justify-center items-center gap-2 ">
        <div className="w-full lg:w-1/2">
          <Table />
        </div>
        <div className="hidden w-14 h-14 absolute -bottom-8 bg-primary-blue text-white rounded-full lg:flex items-center justify-center text-2xl font-bold">
          G
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-2">
          <Profil />
        </div>
      </div>
      <KontenTable/>
    </div>
  );
};

export default DasboardTable;

import "./Dasboard.css";
import FilterBar from "./filterBar";
import Template from "./Template";
const DasboardTemplate = () => {
  return (
    <div className="lg:h-screen overflow-hidden h-auto w-[100%] p-3">
      <div className="flex w-full lg:relative flex-col lg:flex-row justify-center items-center gap-2 ">
        <div className="lg:w-1/2 w-full">
          <div className="inner-dasboard w-full px-10 py-5">
            <h3 className="text-xl font-bold 2xl:text-2xl">Board</h3>
            <ul className="list-disc ps-10 py-4 2xl:text-lg">
              <li className="pb-1">
                Tetap terorganisir: Semua tugasmu jadi lebih mudah dilacak.
              </li>
              <li className="pb-1">
                Meningkatkan produktivitas: Kamu bisa fokus pada tugas yang
                paling penting.
              </li>
              <li className="pb-1">
                Bekerja sama dengan tim: Kamu bisa mengajak teman atau rekan
                kerja untuk bekerja sama dalam satu papan.
              </li>
            </ul>
            <a href="#" className="underline underline-offset-1">
              Lihat Selengkapnya
            </a>
          </div>
        </div>
        <div className="w-14 h-14 absolute hidden top-[4.8rem] bg-primary-blue text-white rounded-full lg:flex items-center justify-center text-2xl font-bold">
          G
        </div>
        <div className="lg:w-1/2 flex flex-col w-full gap-2">
          <div className="inverted-profil flex justify-between items-center p-5">
            <div className="ml-4 w-1/2">
              <div className="text-xl font-bold 2xl:text-2xl">GoTask</div>
              <div className="text-sm text-gray-400 2xl:text-lg">Projek IT Club</div>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center gap-1">
              <button className="w-full px-2 py-1 text-xs 2xl:text-lg bg-secondary-blue rounded-lg hover:bg-primary-blue">
                <a href="#">Private</a>
              </button>
              <button className="w-full px-2 py-1 text-xs 2xl:text-lg bg-secondary-blue rounded-lg hover:bg-primary-blue">
                <a href="#">Invite Members</a>
              </button>
            </div>
          </div>
          <div className="inverted-search">
            <FilterBar />
          </div>
        </div>
      </div>
    <Template/>
    </div>
  );
};

export default DasboardTemplate;

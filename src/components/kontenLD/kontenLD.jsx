import CardLD from "./cardLD";
import Arrow from "../../assets/images/icon/arrow.png"
const KontenLD = () => {
  return (
    <div className="hero min-h-screen bg-hero-pattern flex flex-col justify-center items-center text-white">
      <div className="hero-content text-neutral-content text-center pt-20">
        <div className="gap-4">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-[5rem] py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Task Manajement
          </button>
          <h1 className="my-5 text-5xl font-bold">
            Temukan Ketenangan <br /> di Tengah Kesibukan Anda <br /> dengan
            GoTask<span className="text-blue-700">.</span>
          </h1>
          <div>
            <CardLD />
          </div>
        </div>
      </div>
      <div className=" bg-blue-700 hover:bg-blue-800 mt-10 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <img src={Arrow} alt="arrowDown" />
      </div>
    </div>
  );
};

export default KontenLD;

import CardLD from "./cardLD";
import Arrow from "../../../assets/images/icon/arrowP3.png";

const KontenLD = () => {
  return (
    <div className="hero h-screen bg-hero-pattern flex flex-col justify-center items-center text-white px-4 sm:px-8">
      <div className="hero-content text-neutral-content text-center pt-20">
        <div className="gap-4">
          <button
            type="button"
            className="text-white bg-secondary-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Task Management
          </button>
          <h1 className="my-5 text-2xl sm:text-3xl md:text-4xl font-bold">
            Temukan Ketenangan <br /> di Tengah Kesibukan Anda <br /> dengan
            GoTask<span className="text-secondary-blue">.</span>
          </h1>
          <div className="w-full overflow-x-auto">
            <CardLD />
          </div>
        </div>
      </div>
      <div className="text-white bg-secondary-blue mt-5 blur-8 bg-opacity-10 border-solid border-2 border-primary-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-4 text-center">
        <img src={Arrow} alt="arrowDown" className="-rotate-90" />
      </div>
    </div>
  );
};

export default KontenLD;
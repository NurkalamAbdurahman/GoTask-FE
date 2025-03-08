import "./notFound.css"
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/Dasboard");
  };
  return (
    <section className="h-screen flex justify-center items-center bg-primary-blue text-white">
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 animate-float">
          <svg
            viewBox="0 0 600 400"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#fff"
              d="M239.5 286.5c-9.7-4.4-23.8 3.4-35.8-5.9-13.5-10.6-7.6-30.1-18.1-42.7-10.4-12.5-31.3-9.6-44.9-19.8-13.3-10-15.5-28.8-25.2-41.1-9.2-11.7-25.8-17.2-32.9-29.9-6.4-11.5-3.2-26.6-8.6-38.5-5.8-12.7-19.4-20.9-23.3-34.4-3.6-12.4 1.4-25.9 8.4-36.3 7.6-11.3 19.1-19.3 30.1-26.7 17.4-11.7 36.6-21.8 56.8-27.8 22.2-6.6 46.4-8.4 68.5-2.3 20.5 5.7 39.1 18.9 57.4 30.3 15.2 9.4 31.2 18.3 43.4 30.4 12.9 12.8 21.1 30.1 25.6 47.5 4.9 18.9 5.3 39.1 1.1 58-4.3 19.2-13.4 37.3-25.1 52.6-11.3 14.7-25.7 27.2-40.7 37.6-15.8 10.9-33.2 19.8-51.3 25.4z"
            />
            <path
              fill="#3B82F6"
              d="M301.5 364.5c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z"
            />
            <path
              fill="#fff"
              d="M301.5 291c-4.4 0-8 3.6-8 8v28h-28c-4.4 0-8 3.6-8 8s3.6 8 8 8h28v28c0 4.4 3.6 8 8 8s8-3.6 8-8v-28h28c4.4 0 8-3.6 8-8s-3.6-8-8-8h-28v-28c0-4.4-3.6-8-8-8z"
            />
            <path
              fill="#FF6B6B"
              d="M455.8 135.2c-7.2-3.3-17.7 2.5-26.6-4.4-10-7.8-5.7-22.4-13.5-31.8-7.6-9.1-23.3-7.1-33.4-14.7-9.9-7.4-11.5-21.4-18.8-30.6-6.8-8.5-19.2-12.8-24.5-22.3-4.8-8.6-2.4-19.8-6.4-28.7-4.3-9.8-14.4-15.5-17.4-25.7-2.7-9.2 1-19.3 6.3-27 5.8-8.4 14.2-14.4 22.4-19.9 13.5-8.7 28.6-16.2 44.4-20.7 17.3-4.9 36-6.3 53.4-1.7 16 4.2 30.6 14 42.7 22.6 11.3 8.1 23.2 15.8 32.3 26.3 9.6 10.9 15.6 25.1 19 39.5 3.8 15.5 3.9 32.1.8 47.7-3.2 15.6-10.1 30.4-19.8 43.1-9.3 12.1-21.3 22.3-34.3 30.2-13.7 8.3-28.9 14.4-44.7 17.7z"
            />
          </svg>
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 animate-fade-in-up">
          <h1 className="text-8xl lg:text-9xl font-bold text-blue-400 animate-pulse">
            404
          </h1>
          
          <p className="text-3xl lg:text-4xl font-bold text-white drop-shadow-lg">
            Oops! Anda tersesat BREE....
          </p>
          
          <p className="text-lg lg:text-xl text-gray-200 max-w-xl mx-auto lg:mx-0">
            Sepertinya halaman yang kamu cari telah hilang di angkasa luar. Tapi
            jangan khawatir, kita bisa pulang bersama!
          </p>

          <div className="">
            <button
              onClick={handleBack}
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold 
              text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 
              transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Kembali
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default NotFound;
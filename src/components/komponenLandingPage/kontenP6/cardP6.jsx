import PropTypes from "prop-types";

const CardP6 = ({ description }) => {
  const descriptions = {
    enkripsi: {
      title: "Enkripsi end-to-end.",
      text: "Keamanan data Anda adalah prioritas utama kami. GoTask menerapkan enkripsi end-to-end yang paling canggih untuk melindungi informasi sensitif Anda.",
    },
    backup: {
      title: "Backup otomatis.",
      text: "GoTask memastikan data Anda aman dengan fitur backup otomatis. Tidak perlu khawatir kehilangan data penting karena semuanya tersimpan dengan aman di cloud.",
    },
    akses: {
      title: "Akses berbasis peran.",
      text: "Keamanan tingkat lanjut dengan akses berbasis peran memastikan hanya pihak yang berwenang dapat mengakses data proyek - proyek Anda.",
    },
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5 me-4">
      <div className="flex relative">
        <img
          src="https://images.unsplash.com/photo-1558965088-2e9062616292?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-[500px] rounded-lg"
        />
        <div className="flex flex-col justify-start items-end absolute -top-5 -right-12 gap-3">
          <div className="bg-secondary-blue w-14 h-3"></div>
          <div className="bg-secondary-blue w-10 h-3"></div>
        </div>
      </div>
      <div className="text-white bg-secondary-blue bg-opacity-10 border-solid border-2 border-primary-blue font-medium rounded-lg text-sm w-[500px] px-10 py-5 text-start">
        <p className="text-md font-medium">{descriptions[description].title}</p>
        <p className="text-xs p-5 text-justify">
          {descriptions[description].text}
        </p>
      </div>
    </div>
  );
};

CardP6.propTypes = {
  description: PropTypes.string.isRequired,
};

export default CardP6;

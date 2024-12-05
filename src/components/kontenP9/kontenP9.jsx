import { useState } from "react";
import Logo from "../../assets/images/icon/GoTask.png";
import Arrow from "../../assets/images/icon/arrowP3.png";

const comments = [
  {
    text: "“GoTask benar-benar mengubah cara saya bekerja! Antarmuka yang intuitif dan fitur-fitur yang lengkap membuat saya bisa mengatur tugas-tugas dengan mudah dan tetap produktif.”",
    name: "Nurkalam Abdurrahman",
    role: "FE Developer",
    image:
      "https://images.unsplash.com/photo-1733103373160-003dc53ccdba?q=80&w=1387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "“Sangat membantu saya dalam kolaborasi dengan tim. Semua orang bisa melihat progres pekerjaan dan memberikan masukan dengan mudah.”",
    name: "Ayu Larasati",
    role: "Project Manager",
    image:
      "https://plus.unsplash.com/premium_photo-1732569105933-cd9903231867?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "“Fitur pengingatnya luar biasa! Saya tidak pernah lupa tugas yang harus diselesaikan, dan semua tugas saya jadi lebih terorganisir.”",
    name: "Rendra Mahardika",
    role: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "“GoTask memiliki antarmuka pengguna yang sederhana tetapi sangat efektif. Semua fitur bisa saya akses dengan cepat tanpa kebingungan.”",
    name: "Bella Andini",
    role: "Content Writer",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "“Sistem keamanan data pada GoTask membuat saya merasa aman menyimpan informasi penting proyek saya. Sangat saya rekomendasikan!”",
    name: "Dimas Surya",
    role: "Backend Engineer",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=1387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const KontenP9 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === comments.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? comments.length - 1 : prevIndex - 1
    );
  };

  const currentComment = comments[currentIndex];

  return (
    <div className="bg-latar-blue text-white justify-center items-end gap-5 flex flex-col py-10 px-20">
      <div className="flex flex-col gap-10">
        <div className="flex justify-start items-start">
          <img src={Logo} alt="GoTask Logo" />
        </div>
        <p className="text-2xl text-justify">{currentComment.text}</p>
        <div className="flex justify-start items-center gap-4">
          <img
            src={currentComment.image}
            className="w-12 h-12 rounded-full bg-cover"
            alt={currentComment.name}
          />
          <div>
            <p>{currentComment.name}</p>
            <p>{currentComment.role}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-2 items-end">
        <button
          type="button"
          onClick={handlePrev}
          className="text-white bg-secondary-blue mt-5 blur-8 bg-opacity-10 border-solid border-2 border-primary-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-3 text-center"
        >
          <img src={Arrow} alt="arrowkiri" className="" />
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="text-white bg-secondary-blue mt-5 blur-8 bg-opacity-10 border-solid border-2 border-primary-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-3 text-center"
        >
          <img src={Arrow} alt="arrowkanan" className="rotate-180" />
        </button>
      </div>
    </div>
  );
};

export default KontenP9;

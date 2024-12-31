import { useState, useEffect } from "react";

const CardLD = () => {
  const cards = [
    {
      id: 1,
      title: "Thinking",
      image: "https://img.freepik.com/free-photo/young-woman-working-with-laptop-desk-thinking-about-solving-problems_1150-52096.jpg?t=st=1733287835~exp=1733291435~hmac=36fb3e5fcb703f86382c3885257ecc0f46bf2d0454af69fec6146be0549f2891&w=826",
      description: "1. Merasa Terbebani oleh Tugas? GoTask akan membantu Anda mengatur dan memprioritaskan tugas sehingga Anda bisa lebih fokus."
    },
    {
      id: 2,
      title: "Working",
      image: "https://img.freepik.com/free-photo/checking-data-laptop_1098-17026.jpg?t=st=1733293434~exp=1733297034~hmac=f2316f88e09463629c1bd908808451b785ba71075acc91b4f131e8c0cf3e5680&w=826",
      description: "2. Atur Jadwal Anda dengan Mudah. Dengan GoTask, Anda bisa membuat jadwal yang fleksibel dan melacak progres Anda."
    },
    {
      id: 3,
      title: "Family",
      image: "https://images.unsplash.com/photo-1639621108959-15f9c4257508?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "3. Dapatkan Lebih Banyak Waktu. Dengan GoTask, Anda bisa meningkatkan produktivitas dan memiliki lebih banyak waktu luang."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="flex flex-wrap md:flex-nowrap gap-4">
      <div className="block md:hidden relative min-w-full h-[200px] overflow-hidden group">
        <img
          className="absolute inset-0 rounded-lg w-full h-full object-cover"
          src={cards[currentIndex].image}
          alt={cards[currentIndex].title}
        />
        <div className="absolute z-10">
          <div className="text-white bg-blue-700 m-3 font-medium rounded-lg text-sm px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {cards[currentIndex].title}
          </div>
        </div>
        <div className="deskripsi flex flex-col items-end absolute text-start rounded-bl-lg rounded-br-lg bottom-0 left-0 right-0 bg-black bg-opacity-50 blur-8 text-white p-4 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
          <div>
            <p className="text-[14px] font-bold">{cards[currentIndex].description}</p>
          </div>
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>
      </div>

      <div className="hidden md:flex gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative min-w-[300px] h-[200px] overflow-hidden group"
          >
            <img
              className="absolute inset-0 rounded-lg w-full h-full object-cover"
              src={card.image}
              alt={card.title}
            />
            <div className="absolute z-10">
              <div className="text-white bg-blue-700 m-3 font-medium rounded-lg text-sm px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {card.title}
              </div>
            </div>
            <div className="deskripsi flex flex-col items-end absolute text-start rounded-bl-lg rounded-br-lg bottom-0 left-0 right-0 bg-black bg-opacity-50 blur-8 text-white p-4 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
              <div>
                <p className="text-[14px] font-bold">{card.description}</p>
              </div>
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardLD;

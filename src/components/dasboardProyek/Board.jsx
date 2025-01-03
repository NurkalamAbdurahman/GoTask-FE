import FooterD from "./footerD";

const Board = () => {
  const Lists = ["Project Resources", "To Do", "Pending", "Blocked", "Done"];
  const cards = [
    {
      labels: [
        { text: "Copy Label", color: "bg-yellow-700" },
        { text: "Priority", color: "bg-red-700" },
        { text: "Design Team", color: "bg-green-700" },
      ],
      image:
        "https://images.unsplash.com/photo-1720048169707-a32d6dfca0b3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Looking for even more project management features?",
    },
    {
      labels: [
        { text: "Blocked Drone", color: "bg-purple-700" },
        { text: "Priority", color: "bg-red-700" },
        { text: "Design Team", color: "bg-green-700" },
      ],
      image:
        "https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0",
      text: "A blocked task waiting for resolution.",
    },
    {
      text: "A task with no labels or image.",
    },
    {
      text: "A task with no labels or image.",
    },
  ];

  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col text-xs">
      <div className="overflow-x-auto flex custom-scroll custom-h-scroll">
        <div className="flex space-x-4 p-6">
          {Lists.map((list) => (
            <div
              key={list}
              className="flex flex-col border border-primary-blue bg-secondary-blue bg-opacity-10 rounded-lg p-4 w-60"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">{list}</h2>
                <div className="text-white text-lg cursor-pointer">...</div>
              </div>
              <div className="overflow-y-auto custom-scroll p-1">
              <div className="space-y-4">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className="bg-primary-blue rounded-lg shadow-lg w-full flex flex-col"
                  >
                    {card.image && (
                      <img
                        src={card.image}
                        alt="Card Thumbnail"
                        className="w-full object-cover h-20"
                      />
                    )}

                    {card.labels && (
                      <div className="flex flex-wrap gap-1 p-2">
                        {card.labels.map((label, idx) => (
                          <span
                            key={idx}
                            className={`${label.color} text-xs text-white px-2 py-0.5 rounded`}
                          >
                            {label.text}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="p-2">
                      <p className="text-xs">{card.text}</p>
                      <div className="mt-2 text-gray-400 cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 9h12M6 12h8m-8 3h4"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="text-start text-white mt-4 py-2">
                + Tambahkan Kartu
              </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center ">
        <FooterD />
      </div>
    </div>
  );
};

export default Board;

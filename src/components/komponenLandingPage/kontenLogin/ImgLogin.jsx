import "./ImgLogin.css";
const ImgLogin = () => {
  const imageUrl =
    "https://images.unsplash.com/photo-1698047682129-c3e217ac08b7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div
      className="lg:h-[550px] lg:w-full w-full lg:bg-cover rounded-lg flex flex-col justify-end items-end p-8 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl})`,
      }}
    >
      <div className="inverted-radius-bl w-full bg-opacity-70">
        <p className="lg:text-xl lg:p-10 md:p-4 md:w-11/12 font-normal">
          Dengan setiap tugas yang kamu selesaikan, kamu semakin dekat dengan
          tujuanmu. Jangan pernah menyerah, teruslah belajar dan berkembang.
        </p>
      </div>
      <div className="p-4 bg-primary-blue rounded-full absolute">
        <p className="font-bold">01</p>
      </div>
    </div>
  );
};

export default ImgLogin;

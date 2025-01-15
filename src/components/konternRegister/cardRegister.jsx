const CardRegister = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="card border border-primary-blue bg-secondary-blue bg-opacity-10 p-8 rounded-lg shadow-2xl w-full">
        <div className="text-center flex flex-col items-center gap-4">
          <h1 className="text-xl md:text-4xl font-bold 2xl:text-6xl">
            Register<span className="text-secondary-blue">.</span>
          </h1>
          <p className="text-sm md:text-base lg:w-3/4  2xl:text-2xl">
            Daftar sekarang dan kendalikan tugas Anda dengan mudah!
          </p>
        </div>
        <form className="flex flex-col gap-4 mt-4 md:grid md:grid-cols-2 md:gap-4">
          <div className="form-control flex flex-col gap-2">
            <label className="label-text text-xs md:text-sm 2xl:text-xl">
              Username
            </label>
            <input
              type="text"
              placeholder="Masukan username"
              className="p-2 py-1 rounded-lg text-black 2xl:text-xl"
              required
            />
          </div>
          <div className="form-control flex flex-col gap-2">
            <label className="label-text text-xs md:text-sm 2xl:text-xl">
              Name
            </label>
            <input
              type="text"
              placeholder="Masukan Name"
              className="p-2 py-1 rounded-lg text-black 2xl:text-xl"
              required
            />
          </div>
          <div className="form-control flex flex-col gap-2">
            <label className="label-text text-xs md:text-sm 2xl:text-xl">
              Division
            </label>
            <input
              type="text"
              placeholder="Masukan Division"
              className="p-2 py-1 rounded-lg text-black 2xl:text-xl"
              required
            />
          </div>
          <div className="form-control flex flex-col gap-2">
            <label className="label-text text-xs md:text-sm 2xl:text-xl">
              Class
            </label>
            <input
              type="text"
              placeholder="Masukan Class"
              className="p-2 py-1 rounded-lg text-black 2xl:text-xl"
              required
            />
          </div>
          <div className="form-control flex flex-col gap-2">
            <label className="label-text text-xs md:text-sm 2xl:text-xl">
              Email
            </label>
            <input
              type="email"
              placeholder="Masukan Email"
              className="p-2 py-1 rounded-lg text-black 2xl:text-xl"
              required
            />
          </div>
          <div className="form-control flex flex-col gap-2">
            <label className="label-text text-xs md:text-sm 2xl:text-xl">
              Password
            </label>
            <input
              type="password"
              placeholder="Masukan password"
              className="p-2 py-1 rounded-lg text-black 2xl:text-xl"
              required
            />
          </div>

          <div className="form-control flex flex-col gap-2 col-span-2">
            <label className="text-xs md:text-sm 2xl:text-xl">
              Punya akun?{" "}
              <a href="/Login" className="link link-hover text-secondary-blue">
                Login
              </a>
            </label>
          </div>

          <div className="flex justify-center col-span-2 items-center">
            <a
              href="/Dasboard"
              className="2xl:text-xl bg-primary-blue px-5 py-2 rounded-lg mt-5 self-center"
            >
              <button>Daftar</button>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardRegister;

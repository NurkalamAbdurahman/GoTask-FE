const CardLogin = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="card border-2 border-primary-blue bg-secondary-blue bg-opacity-10 p-8 rounded-lg shadow-2xl w-full h lg:w-3/4">
        <div className="text-center flex flex-col items-center gap-4">
          <h1 className="text-xl md:text-4xl font-bold 2xl:text-6xl">
            Login<span className="text-secondary-blue">.</span>
          </h1>
          <p className="text-sm md:text-base 2xl:text-2xl">
            Akses dunia Anda dalam genggaman. Login sekarang dan kendalikan
            tugas Anda dengan mudah!
          </p>
        </div>

        <form className="flex flex-col gap-4 mt-4">
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
              Password
            </label>
            <input
              type="password"
              placeholder="Masukan password"
              className="p-2 py-1 rounded-lg text-black 2xl:text-xl"
              required
            />
            <label className="text-xs md:text-sm 2xl:text-xl">
              Tidak punya akun?{" "}
              <a
                href="/Register"
                className="link link-hover text-secondary-blue"
              >
                Register
              </a>
            </label>
          </div>

          <a href="/Dasboard" className="2xl:text-xl bg-primary-blue px-5 py-2 rounded-lg mt-5 self-center">
            <button>
              Masuk
            </button>
          </a>
        </form>
      </div>
    </div>
  );
};

export default CardLogin;

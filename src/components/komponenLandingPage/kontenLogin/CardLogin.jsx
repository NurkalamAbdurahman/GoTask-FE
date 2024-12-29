const CardLogin = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <div className="card border-2 border-primary-blue bg-secondary-blue bg-opacity-10 p-8 rounded-lg shadow-2xl w-full max-w-sm">
        <div className="text-center flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold">
            Login<span className="text-secondary-blue">.</span>
          </h1>
          <p className="text-base">
            Akses dunia Anda dalam genggaman. Login sekarang dan kendalikan
            tugas Anda dengan mudah!
          </p>
        </div>

        <form className="flex flex-col gap-4 mt-4">
          <div className="form-control flex flex-col gap-2">
            <label className="label-text">Username</label>
            <input
              type="text"
              placeholder="Masukan username"
              className="p-2 py-1 rounded-lg text-black"
              required
            />
          </div>

          <div className="form-control flex flex-col gap-2">
            <label className="label-text">Password</label>
            <input
              type="password"
              placeholder="Masukan password"
              className="p-2 py-1 rounded-lg text-black"
              required
            />
            <label className="text-sm">
              Tidak punya akun?{" "}
              <a
                href="/Register"
                className="link link-hover text-secondary-blue"
              >
                Register
              </a>
            </label>
          </div>

          <button className="bg-primary-blue px-5 py-2 rounded-lg mt-5 self-center">
            <a href="/Dasboard">Masuk</a>
          </button>
        </form>
      </div>
    </div>
  );
};

export default CardLogin;

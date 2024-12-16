const CardRegister = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <div className="card border-2 border-primary-blue bg-secondary-blue bg-opacity-10 p-8 rounded-lg shadow-2xl w-full">
        <div className="text-center flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold">
            Register<span className="text-secondary-blue">.</span>
          </h1>
          <p className="text-base w-80">
            Daftar sekarang dan kendalikan tugas Anda dengan mudah!
          </p>
        </div>
        <form className="grid grid-cols-2 gap-4 mt-4">
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
            <label className="label-text">Name</label>
            <input
              type="text"
              placeholder="Masukan Name"
              className="p-2 py-1 rounded-lg text-black"
              required
            />
          </div>
          <div className="form-control flex flex-col gap-2">
            <label className="label-text">Division</label>
            <input
              type="text"
              placeholder="Masukan Division"
              className="p-2 py-1 rounded-lg text-black"
              required
            />
          </div>

          <div className="form-control flex flex-col gap-2">
            <label className="label-text">Class</label>
            <input
              type="text"
              placeholder="Masukan Class"
              className="p-2 py-1 rounded-lg text-black"
              required
            />
          </div>
          <div className="form-control flex flex-col gap-2">
            <label className="label-text">Email</label>
            <input
              type="email"
              placeholder="Masukan Email"
              className="p-2 py-1 rounded-lg text-black"
              required
            />
            <label className="text-sm">
              punya akun?{" "}
              <a href="/Login" className="link link-hover text-secondary-blue">
                Login
              </a>
            </label>
          </div>
          <div className="form-control flex flex-col gap-2">
            <label className="label-text">Password</label>
            <input
              type="password"
              placeholder="Masukan password"
              className="p-2 py-1 rounded-lg text-black"
              required
            />
          </div>

          <div className="flex justify-center col-span-2 items-center">
            <button className="bg-primary-blue px-5 py-2 rounded-lg mt-5 self-center">
              <a href="/Login"></a>
              Daftar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardRegister;

import { useState } from "react";
import axios from "axios";

const CardRegister = () => {
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    class: "",
    division: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const response = await axios.post(
        "http://api-task.itclub5.my.id/api/register",
        formData
      );

      if (response.status === 200 || response.status === 201) {
        alert("Registrasi berhasil!");
        window.location.href = "/Login";
      } else {
        alert("Registrasi gagal. Silakan coba lagi.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

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
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 mt-4 md:grid md:grid-cols-2 md:gap-4"
        >
          <div className="form-control flex flex-col gap-2">
            <label className="label-text text-xs md:text-sm 2xl:text-xl">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Masukan username"
              className="p-2 py-1 rounded-lg text-black 2xl:text-xl"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control flex flex-col gap-2">
            <label className="label-text text-xs md:text-sm 2xl:text-xl">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Masukan Name"
              className="p-2 py-1 rounded-lg text-black 2xl:text-xl"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control flex flex-col gap-2">
            <label className="label-text text-xs md:text-sm 2xl:text-xl">
              Division
            </label>
            <input
              type="text"
              name="division"
              placeholder="Masukan Division"
              className="p-2 py-1 rounded-lg text-black 2xl:text-xl"
              value={formData.division}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control flex flex-col gap-2">
            <label className="label-text text-xs md:text-sm 2xl:text-xl">
              Class
            </label>
            <input
              type="text"
              name="class"
              placeholder="Masukan Class"
              className="p-2 py-1 rounded-lg text-black 2xl:text-xl"
              value={formData.class}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control flex flex-col gap-2">
            <label className="label-text text-xs md:text-sm 2xl:text-xl">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Masukan Email"
              className="p-2 py-1 rounded-lg text-black 2xl:text-xl"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control flex flex-col gap-2">
            <label className="label-text text-xs md:text-sm 2xl:text-xl">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Masukan password"
              className="p-2 py-1 rounded-lg text-black 2xl:text-xl"
              value={formData.password}
              onChange={handleChange}
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
            <button
              type="submit"
              className="2xl:text-xl bg-primary-blue px-5 py-2 rounded-lg mt-5 self-center"
            >
              Daftar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardRegister;
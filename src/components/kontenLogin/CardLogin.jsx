import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'; 

const CardLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => { 
    e.preventDefault(); 

    try {
      Swal.fire({
        title: 'Logging in...',
        text: 'Please wait',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });

      // const response = await axios.post('http://api-task.itclub5.my.id/api/login', {
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        username,
        password,
      });

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', response.data.user.username);
      localStorage.setItem('member', response.data.user.member);
      console.log(response.data);

      Swal.fire({
        icon: 'success',
        title: 'Login Berhasil!',
        text: 'Selamat datang!',
        showConfirmButton: false,
        timer: 2000
      });

      setTimeout(() => {
        navigate('/Dasboard');
      }, 2000);
      
    } catch (err) {
      setError('Username atau password salah.');
      console.error('Error:', err);

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Username atau password salah!',
      });
    }
  };

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
      {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
        <div className="form-control flex flex-col gap-2">
            <label className="label-text text-xs md:text-sm 2xl:text-xl">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          <div className=" self-center mt-5">
            <button 
              type="submit" 
              className="2xl:text-xl bg-primary-blue px-5 py-2 rounded-lg"
            >
              Masuk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardLogin;

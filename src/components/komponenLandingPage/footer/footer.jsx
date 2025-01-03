import Logo from "../../../assets/images/icon/GoTask.png";

const Footer = () => {
  return (
    <div className="bg-latar-blue text-white flex flex-col items-center">
      <footer className="bg-latar-blue p-10 flex flex-wrap justify-between items-start text-white border-y border-solid w-[90%] border-white gap-8">
        <nav className="w-full sm:w-[45%] lg:w-[25%] flex flex-col gap-3">
          <img src={Logo} alt="Logo GoTask" className="w-32" />
          <p className="text-sm">
            Mempunyai Pertanyaan atau <br />
            Ada yang Perlu Dibantu?
          </p>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 py-2"
          >
            Hubungi Kami
          </button>
        </nav>

        <nav className="w-full sm:w-[45%] lg:w-[20%] flex flex-col gap-2">
          <h6 className="font-bold text-lg">Kontak</h6>
          <p className="text-sm">Kp. Sinom, Kec. Cimenyan, Kota Bandung</p>
          <p className="text-sm">088806371058</p>
          <p className="text-sm">nurkalam.az@gmail.com</p>
        </nav>

        <nav className="w-full sm:w-[45%] lg:w-[15%] flex flex-col gap-2">
          <h6 className="font-bold text-lg">Links</h6>
          <a href="#" className="text-sm link link-hover">
            Home
          </a>
          <a href="#" className="text-sm link link-hover">
            Login
          </a>
          <a href="#" className="text-sm link link-hover">
            Register
          </a>
        </nav>

        <nav className="w-full sm:w-[45%] lg:w-[30%] flex flex-col gap-4">
          <p className="font-bold text-lg">
            Kunjungi laman social media kami
          </p>
          <div className="flex gap-4">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>

      <footer className="flex flex-col p-2 text-center">
        <p className="text-sm">© copyright by NR 2024</p>
      </footer>
    </div>
  );
};

export default Footer;

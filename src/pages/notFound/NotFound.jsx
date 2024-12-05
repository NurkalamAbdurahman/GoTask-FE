const NotFound = () => {
  return (
    <section className="h-screen flex justify-center items-center text-white bg-primary-blue">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Anda tersesat bre
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Maaf, kami tidak dapat menemukan halaman itu. Anda akan menemukan
            banyak hal untuk dijelajahi di home page.
          </p>
          <a
            href="/"
            className=" bg-blue-700 hover:bg-blue-800 mt-10 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2 px-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Kembali
          </a>
        </div>
      </div>
    </section>
  );
};

export default NotFound;

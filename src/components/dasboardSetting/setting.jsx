const Setting = () => {
  return (
    <div className="inner-member2 text-sm 2xl:text-lg flex flex-col gap-4 p-4 pt-10">
      <div className="border-b border-white gap-4 flex-col lg:flex-row flex items-start p-4">
        <div className="lg:w-1/4">
          <h3 className="text-sm 2xl:text-lg font-semibold">
            Pembatasan keanggotaan ruang kerja
          </h3>
        </div>
        <div className="lg:w-2/4">
          <p>
            <span>Siapa pun</span> dapat ditambahkan ke Ruang Kerja ini.
          </p>
        </div>
        <div className="lg:w-1/4">
          <button className="bg-secondary-blue w-full hover:bg-primary-blue py-1 px-5 text-xs rounded-lg">
            Ubah
          </button>
        </div>
      </div>
      <div className="border-b border-white gap-4 flex-col lg:flex-row flex items-start p-4">
        <div className="lg:w-1/4">
          <h3 className="text-sm 2xl:text-lg font-semibold">
          Pembatasan penghapusan Board
          </h3>
        </div>
        <div className="lg:w-2/4 flex flex-col gap-2">
          <p>Setiap anggota Workspace dapat menghapus papan publik.
          </p>
          <p>
          Setiap anggota Workspace dapat menghapus papan Workspace yang terlihat.

          </p>
          <p>Setiap anggota Workspace dapat menghapus papan pribadi.</p>
        </div>
        <div className="lg:w-1/4">
          <button className="bg-secondary-blue w-full hover:bg-primary-blue py-1 px-5 text-xs rounded-lg">
            Ubah
          </button>
        </div>
      </div>
      <div className="border-b border-white gap-4 flex-col lg:flex-row flex items-start p-4">
        <div className="lg:w-1/4">
          <h3 className="text-sm 2xl:text-lg font-semibold">
            Pembatasan pembuatan anggota
          </h3>
        </div>
        <div className="lg:w-2/4 flex flex-col gap-2">
          <p>Setiap anggota Workspace dapat membuat papan publik.</p>
          <p>
            Setiap anggota Workspace dapat membuat papan Workspace yang
            terlihat.
          </p>
          <p>Setiap anggota Workspace dapat membuat papan pribadi.</p>
        </div>
        <div className="lg:w-1/4">
          <button className="bg-secondary-blue w-full hover:bg-primary-blue py-1 px-5 text-xs rounded-lg">
            Ubah
          </button>
        </div>
      </div>
      <div className="border-b border-white gap-4 flex-col lg:flex-row flex items-start p-4">
        <div className="lg:w-1/4">
          <h3 className="text-sm 2xl:text-lg font-semibold">
          Berbagi board dengan tamu
          </h3>
        </div>
        <div className="lg:w-2/4 flex flex-col gap-2">
          <p>Siapa pun dapat mengirim atau menerima undangan ke forum di Ruang Kerja ini.</p>
        </div>
        <div className="lg:w-1/4">
          <button className="bg-secondary-blue w-full hover:bg-primary-blue py-1 px-5 text-xs rounded-lg">
            Ubah
          </button>
        </div>
      </div>
    </div>
  );
};

export default Setting;

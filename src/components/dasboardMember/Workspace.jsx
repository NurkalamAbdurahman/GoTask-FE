const Workspace = () => {
  return (
    <div className="inner-member2 flex flex-col gap-4 p-5">
      <h3 className="text-xl font-bold">Workspace members (2)</h3>
      <div className="flex items-start gap-4 text-sm justify-center border-b border-white py-4">
        <p className="w-1/4">Workspace members</p>
        <p className="w-2/4">
          Anggota Ruang Kerja dapat melihat dan bergabung dengan semua papan
          yang terlihat di Ruang Kerja dan membuat papan baru di Ruang Kerja.
        </p>
        <div className="w-1/4">
          <button className="bg-secondary-blue w-full hover:bg-primary-blue py-1 text-xs rounded-lg">
            Lihat detail
          </button>
        </div>
      </div>
      <div className="flex items-start gap-4 text-sm justify-center border-b border-white py-4">
        <p className="w-1/4">Undang anggota untuk bergabung dengan Anda</p>
        <p className="w-2/4">
          Siapa pun yang memiliki tautan undangan dapat bergabung dengan Ruang
          Kerja ini. Anda juga dapat menonaktifkan dan membuat tautan undangan
          baru untuk Ruang Kerja ini kapan saja.
        </p>
        <div className="w-1/4">
          <button className="bg-secondary-blue w-full hover:bg-primary-blue py-1 text-xs rounded-lg">
            Undang dengan tautan
          </button>
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="Filter dengan nama"
          className="w-full px-5 py-1 border text-xs border-primary-blue bg-secondary-blue bg-opacity-10 rounded-lg"
        />
      </div>
      <div className="flex justify-between border-y border-white py-2">
        <div className="flex gap-2 w-1/2">
        <div className="logo bg-yellow-600 w-9 h-9 flex justify-center items-center text-xs rounded-full"><p>NZ</p></div>
        <div>
            <p className="text-sm">Nurkalam Abdurahman</p>
            <p className="text-xs">@nurkalam.az@gmail.com • Terakhir aktif Oktober 2024</p>
        </div>
        </div>
        <div className="w-1/2 gap-2 flex justify-center items-center">
        <button className="bg-secondary-blue w-1/3 hover:bg-primary-blue py-1 text-xs rounded-lg">
            lihat boards (3)
          </button>
        <button className="bg-secondary-blue w-1/3 hover:bg-primary-blue py-1 text-xs rounded-lg">
            lihat boards (3)
          </button>
        <button className="bg-secondary-blue w-1/3 hover:bg-primary-blue py-1 text-xs rounded-lg">
            lihat boards (3)
          </button>
        </div>
      </div>
      <div className="flex justify-between border-y border-white py-2">
        <div className="flex gap-2 w-1/2">
        <div className="logo bg-green-600 w-9 h-9 flex justify-center items-center text-xs rounded-full"><p>RK</p></div>
        <div>
            <p className="text-sm">Rafli Insan Karim</p>
            <p className="text-xs">@rubliiiii@gmail.com • Terakhir aktif Oktober 2024</p>
        </div>
        </div>
        <div className="w-1/2 gap-2 flex justify-center items-center">
        <button className="bg-secondary-blue w-1/3 hover:bg-primary-blue py-1 text-xs rounded-lg">
            lihat boards (3)
          </button>
        <button className="bg-secondary-blue w-1/3 hover:bg-primary-blue py-1 text-xs rounded-lg">
            lihat boards (3)
          </button>
        <button className="bg-secondary-blue w-1/3 hover:bg-primary-blue py-1 text-xs rounded-lg">
            lihat boards (3)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Workspace;

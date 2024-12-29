const Profil = () => {
  return (
    <div className="inverted-profil flex justify-between items-center p-5">
      <div className="ml-4 w-1/2">
        <div className="text-xl font-bold">GoTask</div>
        <div className="text-sm text-gray-400">Projek IT Club</div>
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center gap-1">
        <button className="w-full px-2 py-1 text-xs bg-secondary-blue rounded-lg hover:bg-primary-blue">
          <a href="#">Private</a>
        </button>
        <button className="w-full px-2 py-1 text-xs bg-secondary-blue rounded-lg hover:bg-primary-blue">
          <a href="#">Invite Members</a>
        </button>
      </div>
    </div>
  );
};

export default Profil;

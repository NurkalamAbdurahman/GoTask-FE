import { useState } from "react";

const FilterBar = () => {
  const [sortOption, setSortOption] = useState("Terbaru");
  const [filterOption, setFilterOption] = useState("Pilih Koleksi");

  return (
    <div className="p-7 rounded-md flex flex-col 2xl:text-base text-xs gap-2">
      <div className="flex flex-col gap-2 w-full">
        <label className="font-semibold 2xl:text-lg text-sm">Pencarian</label>
        <div className="relative">
          <input
            type="text"
            placeholder="Cari Boards"
            className="w-full px-4 py-1 rounded-md bg-secondary-blue text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">
      <div className="flex flex-col gap-2 w-full">
        <label className="font-semibold 2xl:text-lg text-sm">Urutkan berdasarkan</label>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="w-full py-1 px-4 rounded-md bg-secondary-blue text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Terbaru">Terbaru</option>
          <option value="Terlama">Terlama</option>
          <option value="Populer">Populer</option>
        </select>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label className="font-semibold 2xl:text-lg text-sm">Filter berdasarkan</label>
        <select
          value={filterOption}
          onChange={(e) => setFilterOption(e.target.value)}
          className="w-full py-1 px-4 rounded-md bg-secondary-blue text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Pilih Koleksi">Pilih Koleksi</option>
          <option value="Koleksi A">Koleksi A</option>
          <option value="Koleksi B">Koleksi B</option>
          <option value="Koleksi C">Koleksi C</option>
        </select>
      </div>
      </div>

    </div>
  );
};

export default FilterBar;

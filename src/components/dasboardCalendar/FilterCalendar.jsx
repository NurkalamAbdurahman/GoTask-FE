function FilterCalendar() {
  return (
    <div className="inverted-member text-xs flex gap-4 p-4 2xl:text-lg">
        <h3 className="font-semibold text-base sm:text-lg lg:text-xl uppercase">Calendar <span>(3)</span></h3>
      <div className="w-full flex flex-col gap-2 px-4">
        <button className="bg-secondary-blue w-full hover:bg-primary-blue py-1 text-xs rounded-lg 2xl:text-base">
        Simpan sebagai tampilan baru
        </button>
        <div className="flex justify-center gap-2">
          <button className="bg-secondary-blue w-full hover:bg-primary-blue py-1 text-xs rounded-lg 2xl:text-base">
          Berikan saran
          </button>
          <select className="bg-secondary-blue w-full text-center hover:bg-primary-blue py-1 text-xs rounded-lg 2xl:text-base">
            <option value="Terbaru">Terbaru</option>
            <option value="Terlama">Terlama</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterCalendar;

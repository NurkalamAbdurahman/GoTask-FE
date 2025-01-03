function FilterCalendar() {
  return (
    <div className="inverted-member text-xs flex gap-4 p-4">
        <h3 className="font-semibold text-sm">Calendar <span>(3)</span></h3>
      <div className="w-full flex flex-col gap-2 px-4">
        <button className="bg-secondary-blue w-full hover:bg-primary-blue py-1 text-xs rounded-lg">
        Simpan sebagai tampilan baru
        </button>
        <div className="flex justify-center gap-2">
          <button className="bg-secondary-blue w-full hover:bg-primary-blue py-1 text-xs rounded-lg">
          Berikan saran
          </button>
          <select className="bg-secondary-blue w-full text-center hover:bg-primary-blue py-1 text-xs rounded-lg">
            <option value="Terbaru">Terbaru</option>
            <option value="Terlama">Terlama</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterCalendar;

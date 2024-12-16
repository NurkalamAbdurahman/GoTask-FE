import "./Dasboard.css";
const DasboardTemplate = () => {
  return (
    <div className="flex">
      <div className="w-1/2">
        <div className="inner-dasboard"></div>
      </div>
      <div className="w-1/2">
        <div className="inverted-profil "></div>
        <div className="inverted-search"></div>
      </div>
    </div>
  );
};

export default DasboardTemplate;

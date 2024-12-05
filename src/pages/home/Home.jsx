import KontenLD from "../../components/kontenLD/kontenLD";
import KontenP2 from "../../components/kontenP2/KontenP2";
import KontenP3 from "../../components/KontenP3/KontenP3";
import Konten4 from "../../components/kontenP4/kontenP4";
import NavbarHome from "../../components/navbar/navbarHome";

const Home = () => {
  return (
    // halaman Landing Page
    <div>

      {/* navbar start */}
      <NavbarHome />
      {/* navbar end */}

      {/* Halaman 1 Start */}
      <div>
        <KontenLD />
      </div>
      {/* Halaman 1 End */}

      {/* Halaman 2 Start */}
      <div>
        <KontenP2/>
      </div>
      {/* Halaman 2 End */}

      {/* Halaman 3 Start */}
      <div>
        <KontenP3/>
      </div>
      {/* Halaman 3 End */}
      {/* Halaman 4 Start */}
      <div>
        <Konten4/>
      </div>
      {/* Halaman 4 End */}
    </div>
  );
};

export default Home;

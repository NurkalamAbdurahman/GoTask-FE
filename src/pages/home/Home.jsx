import KontenLD from "../../components/kontenLD/kontenLD";
import KontenP2 from "../../components/kontenP2/KomtemP2";
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
    </div>
  );
};

export default Home;

import Footer from "../../components/komponenLandingPage/footer/footer";
import KontenLD from "../../components/komponenLandingPage/kontenLD/kontenLD";
import KontenP10 from "../../components/komponenLandingPage/kontenP10/kontenP10";
import KontenP2 from "../../components/komponenLandingPage/kontenP2/KontenP2";
import KontenP3 from "../../components/komponenLandingPage/KontenP3/KontenP3";
import KontenP5 from "../../components/komponenLandingPage/KontenP5/KontenP5";
import KontenP4 from "../../components/komponenLandingPage/kontenP4/KontenP4";
import KontenP6 from "../../components/komponenLandingPage/kontenP6/KontenP6";
import KontenP7 from "../../components/komponenLandingPage/kontenP7/KontenP7";
import KontenP8 from "../../components/komponenLandingPage/kontenP8/KontenP8";
import KontenP9 from "../../components/komponenLandingPage/kontenP9/kontenP9";
import NavbarHome from "../../components/komponenLandingPage/navbar/NavbarHome";

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
        <KontenP4/>
      </div>
      {/* Halaman 4 End */}

      {/* Halaman 5 Start */}
      <div>
        <KontenP5/>
      </div>
      {/* Halaman 5 End */}

      {/* Halaman 6 Start */}
      <div>
        <KontenP6/>
      </div>
      {/* Halaman 6 End */}

      {/* Halaman 7 Start */}
      <div>
        <KontenP7/>
      </div>
      {/* Halaman 7 End */}

      {/* Halaman 8 Start */}
      <div>
        <KontenP8/>
      </div>
      {/* Halaman 8 End */}

      {/* Halaman 9 Start */}
      <div>
        <KontenP9/>
      </div>
      {/* Halaman 9 End */}
      
      {/* Halaman 10 Start */}
      <div>
        <KontenP10/>
      </div>
      {/* Halaman 10 End */}

      {/* Footer Start */}
      <div>
        <Footer/>
      </div>
      {/* Footer End */}
    </div>
  );
};

export default Home;

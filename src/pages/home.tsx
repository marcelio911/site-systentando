
import React from "react";

// reactstrap components


// core components
import LandingPageHeader from "@/components/Headers/LandingPageHeader";

import SectionDarkComoFunciona from "@/views/index-sections/SectionDarkComoFunciona";
import SectionDarkBeneficios from "@/views/index-sections/SectionDarkBenecios";
import SectionCarousel from "@/views/index-sections/SectionCarousel";
import SectionIntegracoes from "@/views/index-sections/SectionDarkIntegracoes";
// import SectionDarkOQueEstaoFalandoPraNos from "@/views/index-sections/SectionDarkOQueEstaoFalandoPraNos";
import SectionDarkContato from "@/views/index-sections/SectionDarkContato";
import RootNavbar from "@/components/Navbars/RootNavbar";

function Home() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });


  return (
    <>
      <RootNavbar />

      <LandingPageHeader />

      <SectionIntegracoes />

      <SectionDarkBeneficios />

      <SectionCarousel />

      <SectionDarkComoFunciona />

      {/* <SectionDarkOQueEstaoFalandoPraNos /> */}

      <SectionDarkContato />

    </>
  );
}

export default Home;

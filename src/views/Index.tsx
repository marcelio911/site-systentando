
import React from "react";

// reactstrap components

// core components
import IndexNavbar from "../components/Navbars/IndexNavbar";
import IndexHeader from "../components/Headers/IndexHeader";
import Footer from "../components/Footers/Footer";

// index sections
import SectionButtons from "../views/index-sections/SectionButtons";
import SectionNavbars from "../views/index-sections/SectionNavbars";
import SectionNavigation from "../views/index-sections/SectionNavigation";
import SectionProgress from "../views/index-sections/SectionProgress";
import SectionNotifications from "../views/index-sections/SectionNotifications";
import SectionTypography from "../views/index-sections/SectionTypography";
import SectionJavaScript from "../views/index-sections/SectionJavaScript";
import SectionCarousel from "../views/index-sections/SectionCarousel";
import SectionNucleoIcons from "../views/index-sections/SectionNucleoIcons";
import SectionDark from "../views/index-sections/SectionDark";
import SectionLogin from "../views/index-sections/SectionLogin";
import SectionExamples from "../views/index-sections/SectionExamples";
import SectionDownload from "../views/index-sections/SectionDownload";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <SectionButtons />
        <SectionNavbars />
        <SectionNavigation />
        <SectionProgress />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavaScript />
        <SectionCarousel />
        <SectionNucleoIcons />
        <SectionDark />
        <SectionLogin />
        <SectionExamples />
        <SectionDownload />
        <Footer />
      </div>
    </>
  );
}

export default Index;

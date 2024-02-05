import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";
import backgroundLandingHeader from "../../assets/img/background-sky-moutains.jpeg";

function LandingPageHeader() {
  const pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        const windowScrollTop = window.pageYOffset / 3;
        (pageHeader.current as HTMLElement).style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundColor: 'black',
          backgroundImage:
            "url(" + backgroundLandingHeader + ")",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader as React.RefObject<HTMLDivElement>}
      >
        <div className="filter" />
          <Container>
            <div className="motto text-center">
              <h2>Navegue num universo mais autônomo</h2>
              <h3>
              Simplifique e agilize a experiência do seu cliente, ofereça novas formas de atendimento
              para ele se conectar com a sua empresa
              </h3>
              <br />
              <Button
                href="#integracao-atendimento"
                className="btn-round mr-1"
                color="neutral"
                outline
              >
                <i className="fa fa-play" />
                Entenda os benefícios
              </Button>
              <Button className="btn-round" color="neutral" type="button" outline>
                Colabore
              </Button>
            </div>
          </Container>
      </div >
    </>
  );
}

export default LandingPageHeader;


// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import backgroundSession from "../../assets/img/background-sky-moutains.jpeg";

// core components

function SectionNucleoIcons() {
  return (
    <>
      <div id="integracao-atendimento"
        style={{
          backgroundImage:
            "url(" + backgroundSession + ")",
        }} className="section section-dark section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h2 className="title">Integre o atendimento em suas redes sociais</h2>
              <br />
              <h3 className="description">
                Transforme o whatsapp, instagram ou facebook
                verdadeiras máquinas vendedoras, otimizando o valioso tempo
                dos seus clientes e ofereça uma experiência
                única de atendimento, com uso de inteligência artificial
              </h3>
              <br />
              <Button
                className="btn-round"
                color="danger"
                href="#beneficios"
              >
                Converta mais vendas
              </Button>
            </Col>
            <Col lg="6" md="12">
              <div className="icons-container">
                <i className="nc-icon nc-time-alarm" />
                <i className="nc-icon nc-atom" />
                <i className="nc-icon nc-camera-compact" />
                <i className="nc-icon nc-watch-time" />
                <i className="nc-icon nc-key-25" />
                <i className="nc-icon nc-diamond" />
                <i className="nc-icon nc-user-run" />
                <i className="nc-icon nc-layout-11" />
                <i className="nc-icon nc-badge" />
                <i className="nc-icon nc-bulb-63" />
                <i className="nc-icon nc-favourite-28" />
                <i className="nc-icon nc-planet" />
                <i className="nc-icon nc-tie-bow" />
                <i className="nc-icon nc-zoom-split" />
                <i className="nc-icon nc-cloud-download-93" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionNucleoIcons;

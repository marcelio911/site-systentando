
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import backgroundSession from "../../assets/img/background-sky-moutains.jpeg";
import vendasDirect from "../../assets/img/chatbots/vendas-direct.jpeg";

// core components

function SectionIntegracoes() {
  return (
    <>
      <div id="integracao-atendimento"
        style={{
          backgroundImage:
            "url(" + backgroundSession + ")",
        }} className="section section-dark section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="7" md="6">
              <h2 className="title">Integre o atendimento em suas redes sociais</h2>
              <br />
              <h3 className="description">
                Transforme o whatsapp, instagram ou facebook
                em máquinas de venda, otimizando o valioso tempo
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
            <Col className="ml-auto mr-auto" lg="5" md="6">
              <img src={vendasDirect} className="w-100" alt="vendas-direct" />
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionIntegracoes;

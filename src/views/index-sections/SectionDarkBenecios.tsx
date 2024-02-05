
// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";

// core components
import backgroundSession from "../../assets/img/systentando-capa-dark.jpeg";

function SectionDarkBeneficios() {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" + backgroundSession + ")",
        }}
       id="beneficios" className="section section-dark">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="12">
                <h2 className="title">Uma solução automatizada pode trazer</h2>
                <div className="description text-center section-space">
                  <h4>Mais tempo e liberdade para você tocar outros assuntos</h4>
                  <h4>Converter mais clientes</h4>
                  <h4>Sem essa de ficar respondendo a mesma coisa toda hora</h4>
                  <h4>Ganhe mais tempo para focar nas suas estratégias de vendas ou no seu produto</h4>
                  <h4>Impulsione e escale o seu faturamento</h4>
                  <h4>Reduza custos operacionais</h4>
                </div>
                <br/>
                <Button
                  className="btn-outline-neutral btn-round"
                  color="default"
                  href="#comofunciona"
                >
                  Como funciona?
                </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionDarkBeneficios;

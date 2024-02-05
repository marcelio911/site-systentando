
// reactstrap components
import {
  Button,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components

function SectionDarkContato() {
  return (
    <>
      <div id="keepintouch" className="section section-dark">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="text-center">
                Conta pra gente o que podemos solucionar no seu negócio
              </h2>
              <Form className="contact-form">
                <Row>
                  <Col md="10">
                    <label>Informa seu nome</label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="..." type="text" />
                    </InputGroup>
                  </Col>
                  <Col md="6">
                    <label>telefone</label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="..." type="text" />
                    </InputGroup>
                  </Col>
                  <Col md="6">
                    <label>email</label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-email-85" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="..." type="text" />
                    </InputGroup>
                  </Col>
                </Row>
                <label>Se tiver alguma necessidade, conta pra gente sobre</label>
                <Input
                  placeholder="O que está sentindo falta ou deseja acelerar na sua empresa...
                    fique a vontade para nos contar sobre o que podemos solucionar para você"
                  type="textarea"
                  rows="6"
                />
                <Row>
                  <Col className="ml-auto mr-auto" lg="12" md="4">
                    <Button className="btn-fill" color="danger" size="lg">
                      Let's go... vamos nessa!
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionDarkContato;

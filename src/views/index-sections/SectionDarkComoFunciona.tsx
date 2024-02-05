
// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import backgroundSession from "../../assets/img/systentando-capa-dark.jpeg";
import whatsappAtendimento from "../../assets/img/chatbots/whatsapp-funil-de-vendas.jpeg";
import vendasDirect from "../../assets/img/chatbots/whatsapp-atendimento.jpeg";

function SectionDarkComoFunciona() {

  return (
    <>
      <div
        id="comofunciona"
        style={{
          backgroundImage:
            "url(" + backgroundSession + ")",
        }}
        className="main section section-dark section-nucleo-icons">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="12" md="6">
              <h2 className="title">Como funciona</h2>
              <br />
            </Col>
          </Row>
          <Row>
            <Col className="ml-auto mr-auto" lg="4" md="6">
              <img src={vendasDirect} className="w-100" alt="vendas-direct" />
            </Col>
            <Col lg="8" md="6">
              <h3 className="description">
                Desde a solução que vai interagir e coversar com seus clientes
              </h3>
              <h3 className="description">
                Até a solução que vai ajudar a sua empresa a vender mais,
                mesmo que o cliente precise de alguma atenção especial
              </h3>
            </Col>
          </Row>
          <Row>
            <Col className="ml-auto mr-auto" lg="8" md="6">
              <h3 className="description">
                A automação do fluxo de venda é uma estratégia que tem como objetivo
                otimizar o tempo e os recursos de uma empresa

              </h3>
              <h3 className="description">
                Claramente em busca de aumentar a eficiência e a produtividade dos processos
                de vendas, além de melhorar a experiência do cliente.
              </h3>
              <br />
              <Button
                className="btn-round"
                color=""
                href="#keepintouch"
              >
                Veja os detalhes
              </Button>
            </Col>
            <Col lg="4" md="6">
              <img src={whatsappAtendimento} className="w-100" alt="vendas-direct" />

{/*
              <h3>
                Crie sua loja online em minutos e iremos preparar uma loja
                diversificada em diferentes marketplaces
                você escolhe o Nicho de mercado, ou área que deseja atuar.
                E nós cuidamos da parte chata desse processo.
              </h3>
              <ul>
                <h5>Publique um catálogo de produtos</h5>
                <h5>Integrado nas suas principais redes sociais facilmente</h5>
                <h5>Também faça pedidos online</h5>
              </ul>
              <h4 className="description">
                Você provavelmente já ouviu falar sobre a importância de ter um negócio online,
                talvez esteja buscando uma nova forma de apresentar o seu negócio, nas redes sociais
                ou até mesmo em um site, ou quem sabe, esteja pensando em começar um negócio do zero,
                para aumentar o seu faturamento e conseguir demonstrar o seu trabalho para um público maior.
              </h4>
              <br />
              <h4 className="description">
                Uma renda extra ou até mesmo uma renda principal,
                mas talvez não saiba por onde começar. Certo?


                <ul>
                  <h5>Afinal, como criar um negócio online do zero?</h5>
                  <h5>Por onde você deve começar?</h5>
                  <h5>Como fazer isso de forma rápida e simples?</h5>
                  <h5>Com pouquíssimo investimento?</h5>
                  <h5>Sem precisar ter experiência com vendas ou marketing digital?</h5>
                  <h5>Sem precisar as vezes nem ter um produto?</h5>
                </ul>

              </h4>
              <h4 className="description">
                Em nossa plataforma proporcionamos um sistema construtivo com passo a passo,
                que guiará você em todo o processo com recomendações para aplicar nossa estratégia,
                que impulsionam a criação de um novo negócio digital, tentando reduz os riscos e incertezas
                desse momeento inicial, isso associada a uma jornada simplificada,
                que torna o modelo mais resiliente a cada reaplicação.
              </h4>
              <h4 className="description">
                A partir de uma análise de dados, a inteligência artificial busca identificar padrões de comportamento
                e tendências de consumo, dos clientes de cada membro depois de um período de amadurecimento do negócio.
                ela conhece melhor o seu mercado e o seu público-alvo, e você possa contar com informações
                para tomar decisões mais assertivas e estratégicas a sua realidade.
              </h4>
              <h4 className="description hidden" >
                Depois reorganizar estes dados cruciais para embasar decisões estratégicas, validar produtos em potencial
                ou mesmo classificar fornecedores conforme a satisfação dos próprios empreendedores.

                Por que isso é relevante?
                Esses dados não apenas impulsionam a criação de novos negócios,
                reduzindo as incertezas associadas ao início sem experiência, mas também tornam o modelo
                mais resiliente a cada reaplicação. Queremos ser a força propulsora para empreendedores iniciantes,
                seja no universo digital ou para aqueles que desejam oferecer produtos em lojas de bairro de pequeno porte.
                Ao se juntar a nós, você terá acesso a um guia especializado, potencializando suas decisões com informações
                valiosas para reorganizar e escalar a performance de lucros, vendas e faturamento em diferentes nichos de mercado.
                Vamos transformar ideias em resultados tangíveis juntos!
              </h4> */}


            </Col>
          </Row>
          <br />
          {/* <Row>
            <Col md="3">
              <div className="info">
                <div className="icon icon-info">
                  <i className="nc-icon nc-album-2" />
                </div>
                <div className="description">
                  <h4 className="info-title">Beautiful Gallery</h4>
                  <p className="description">
                    Spend your time generating new ideas. You don't have to
                    think of implementing.
                  </p>
                  <Button className="btn-link" color="info" href="#pablo">
                    See more
                  </Button>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="info">
                <div className="icon icon-info">
                  <i className="nc-icon nc-bulb-63" />
                </div>
                <div className="description">
                  <h4 className="info-title">New Ideas</h4>
                  <p>
                    Larger, yet dramatically thinner. More powerful, but
                    remarkably power efficient.
                  </p>
                  <Button className="btn-link" color="info" href="#pablo">
                    See more
                  </Button>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="info">
                <div className="icon icon-info">
                  <i className="nc-icon nc-chart-bar-32" />
                </div>
                <div className="description">
                  <h4 className="info-title">Statistics</h4>
                  <p>
                    Choose from a veriety of many colors resembling sugar
                    paper pastels.
                  </p>
                  <Button className="btn-link" color="info" href="#pablo">
                    See more
                  </Button>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="info">
                <div className="icon icon-info">
                  <i className="nc-icon nc-sun-fog-29" />
                </div>
                <div className="description">
                  <h4 className="info-title">Delightful design</h4>
                  <p>
                    Find unique and handmade delightful designs related items
                    directly from our sellers.
                  </p>
                  <Button className="btn-link" color="info" href="#pablo">
                    See more
                  </Button>
                </div>
              </div>
            </Col>
          </Row> */}
        </Container>
      </div>
    </>
  );
}

export default SectionDarkComoFunciona;

import { Container, Row, Col, Card, Jumbotron, Button } from "react-bootstrap";

function App() {
  return (
    <Container vari>
      <Row>
        <Col md={12}>
          <Jumbotron>
            <h1>Serverside Notebook!</h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 3, offset: 1 }}>
          <Card>
            <Card.Header>Files</Card.Header>
            <Card.Body></Card.Body>
          </Card>
        </Col>
        <Col md={7}>
          <Card>
            <Card.Header>Editer</Card.Header>
            <Card.Body>
              <textarea></textarea>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

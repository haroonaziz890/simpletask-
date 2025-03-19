import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContainerFluidExample() {
  return (
    <Container 
      fluid 
      className="d-flex justify-content-center align-items-center text-center"
      style={{ 
        height: "30vh", 
        marginTop: "40px", 
        backgroundColor: "#f8f9fa" // Light Gray Background
      }}
    >
      <Row>
        <Col style={{ fontSize: "30px", fontWeight: "bold", color: "#343a40" }}>
          CLIENT RATE 4.8   CLIENT RATE 4.8   CLIENT RATE 4.8
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerFluidExample;

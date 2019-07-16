import React from 'react';
import Header from './Header'
import NavigationTabs from './NavigationTabs'
import InputConversion from './InputConversion'
import {Container, Row, Col} from 'react-bootstrap'

function App() {
  return (
    <Container fluid>
      <Row style={{textAlign:"center"}}>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          <NavigationTabs />
          <br />
        </Col>
      </Row>
      <Row>
        <Col>
          <InputConversion />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

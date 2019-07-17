import React from 'react';
import Header from './Header'
import NavigationTabs from './NavigationTabs'
import InputConversion from './InputConversion'
import {Container, Row, Col} from 'react-bootstrap'

class App extends React.Component {
  state = {
    inputUnit: null,
    outputUnit: null,
  };

  handleChange = (selectedOption, event) => {
    const { name } = event
    console.log(event)
    this.setState({ [name]: selectedOption });
  };

  handleClick = (event) => {
    const {name, value} = event.target
    this.setState({ [name]: value })
  }  

  render () {
    return (
      <Container fluid>
        <Row style={{textAlign:"center"}}>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col>
            <NavigationTabs handleClick={this.handleClick} />
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <InputConversion handleChange={this.handleChange} data={this.state}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;

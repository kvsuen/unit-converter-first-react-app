import React from 'react';
import Header from './Header'
import NavigationTabs from './NavigationTabs'
import InputConversion from './InputConversion'
import {Container, Row, Col} from 'react-bootstrap'

class App extends React.Component {
  state = {
    inputUnit: null,
    outputUnit: null
  };

  handleChange = (selectedOption, event) => {
    const { name } = event
    this.setState({ [name]: selectedOption });
  };

  handleClick = (event) => {
    const {name} = event.target
    const firstUnit = name.slice(0, name.search("]") + 1)
    const secondUnit = name.slice(name.search("]") + 2)
    const firstUnitObject = {
      value: firstUnit,
      label: firstUnit.charAt(0).toUpperCase() + firstUnit.slice(1)
    }
    const secondUnitObject = {
      value: secondUnit,
      label: secondUnit.charAt(0).toUpperCase() + secondUnit.slice(1)
    }
    this.setState({ inputUnit: firstUnitObject})
    this.setState({ outputUnit: secondUnitObject})
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

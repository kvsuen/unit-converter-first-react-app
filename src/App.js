import React from 'react';
import Header from './Header'
import NavigationTabs from './NavigationTabs'
import InputConversion from './InputConversion'
import {Container, Row, Col} from 'react-bootstrap'
import DetConversionFactor from './DetConversionFactor'

class App extends React.Component {
  state = {
    inputUnit: {value: "meter [m]", label: "Meter [m]"},
    outputUnit: {value: "meter [m]", label: "Meter [m]"},
    inputValue: "",
    outputValue: "",
    conversionFactor: 1
  };

  //when nav button is selected
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
    this.setState({ conversionFactor: DetConversionFactor(firstUnitObject, secondUnitObject)}, 
      function () {
        this.setState({ outputValue: this.state.inputValue * this.state.conversionFactor})
    })
  }  
  
  //when select unit box is used
  handleChange = (selectedOption, event) => {
    const { name } = event
    this.setState({ [name]: selectedOption }, 
      function () {
      //setState does not immediate mutate this.state, but creates a pending state transition
      //passing in another function as a callback causes it to execute after the state change occurs
        this.setState({ conversionFactor: DetConversionFactor(this.state.inputUnit, this.state.outputUnit)},
        function () {
          this.setState({ outputValue: this.state.inputValue * this.state.conversionFactor})
        })
    })
  };

  //when input textbox is used
  handleInputChange = (event) => {
    const {name, value} = event.target
    this.setState({ [name]: value }, 
      function () {
        this.setState({ outputValue: this.state.inputValue * this.state.conversionFactor})
    })
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
            <InputConversion 
              handleChange={this.handleChange} 
              handleInputChange={this.handleInputChange} 
              data={this.state}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;

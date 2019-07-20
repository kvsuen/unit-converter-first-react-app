import React from 'react';
import NavigationTabs from './NavigationTabs'
import InputContainer from './InputContainer'
import {Container, Row, Col} from 'react-bootstrap'
import DetConversionFactor from './DetConversionFactor'

//App renders two main components: navbar and input container
//Navbar has predetermined unit conversions (sorted by type)
//Input container contains the input/output value & units
//New units are to be added to InputContainer and DetConversionFactor

class App extends React.Component {
  state = {
    inputUnit: {value: "meter [m]", label: "Meter [m]"},
    outputUnit: {value: "millimeter [mm]", label: "Millimeter [mm]"},
    inputValue: "",
    outputValue: "",
    conversionFactor: 1000
  }

  //when nav button is selected
  //sets input and output unit based on selection
  //performs conversion factor determination and calculates outputValue
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
    const tempFactor = DetConversionFactor(firstUnitObject, secondUnitObject)
    this.setState({ 
      inputUnit: firstUnitObject,
      outputUnit: secondUnitObject,
      conversionFactor: tempFactor,
      outputValue: this.state.inputValue * tempFactor
    })
  }  
  
  //when select unit box is used
  //sets unit based on selection
  //performs conversion factor determination and calculates outputValue
  handleChange = (selectedOption, event) => {
    const { name } = event
    this.setState({ [name]: selectedOption }, 
      //setState does not immediate mutate this.state, but creates a pending state transition
      //passing in another function as a callback causes it to execute after the state change occurs
      function () {
        const tempFactor =  DetConversionFactor(this.state.inputUnit, this.state.outputUnit)
        this.setState({ 
          conversionFactor: tempFactor,
          outputValue: this.state.inputValue * tempFactor
        })
      })
  }
    
  //when input textbox is used
  //performs conversion factor determination and calculates outputValue
  handleInputChange = (event) => {
    const {name, value} = event.target
    this.setState({ 
      [name]: value,
      outputValue: value * this.state.conversionFactor
    }) 
  }

  //swap unit button
  //performs conversion factor determination and calculates outputValue
  handleSwapUnit = () => {
    this.setState({ 
      inputUnit: this.state.outputUnit, 
      outputUnit: this.state.inputUnit, 
      conversionFactor: DetConversionFactor(this.state.outputUnit, this.state.inputUnit),
      outputValue: this.state.inputValue * DetConversionFactor(this.state.outputUnit, this.state.inputUnit)
    })
  }

  //copy to clipboard function
  handleCopy = () => {
    var copyText = document.getElementById("outputCopy")
    copyText.select()
    document.execCommand("copy")
  }

  render () {
    return (
      <Container className="main-container">
        <Row>
          <Col xs={12} style={{paddingLeft:0, paddingRight:0}}>
            <NavigationTabs handleClick={this.handleClick} />
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <InputContainer 
              handleChange={this.handleChange} 
              handleInputChange={this.handleInputChange} 
              handleSwapUnit={this.handleSwapUnit}
              handleCopy={this.handleCopy}
              data={this.state}
            />
            <br />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App

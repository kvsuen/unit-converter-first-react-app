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
    this.setState({ inputUnit: firstUnitObject})
    this.setState({ outputUnit: secondUnitObject})
    this.setState({ conversionFactor: DetConversionFactor(firstUnitObject, secondUnitObject)}, 
      function () {
        this.setState({ outputValue: this.state.inputValue * this.state.conversionFactor})
    })
  }  
  
  //when select unit box is used
  //sets unit based on selection
  //performs conversion factor determination and calculates outputValue
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
  //performs conversion factor determination and calculates outputValue
  handleInputChange = (event) => {
    const {name, value} = event.target
    this.setState({ [name]: value }, 
      function () {
        this.setState({ outputValue: this.state.inputValue * this.state.conversionFactor})
    })
  }

  //swap unit button
  //performs conversion factor determination and calculates outputValue
  handleSwapUnitButton = () => {
    const tempInputUnit = this.state.inputUnit
    const tempOutputUnit = this.state.outputUnit
    this.setState({ inputUnit: tempOutputUnit }, 
      function () {
        this.setState({ outputUnit: tempInputUnit },
          function() {
            this.setState({ conversionFactor: DetConversionFactor(this.state.inputUnit, this.state.outputUnit)},
              function () {
              this.setState({ outputValue: this.state.inputValue * this.state.conversionFactor})
              })
          })  
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
              handleSwapUnitButton={this.handleSwapUnitButton}
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

import React from 'react'
import {Row, Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import InputTextComponent from './InputTextComponent'
import InputUnitComponent from './InputUnitComponent'
import OutputTextComponent from './OutputTextComponent'
import OutputUnitComponent from './OutputUnitComponent'

// options can be added here
const options = [
  { value: 'meter [m]', label: 'Meter [m]' },
  { value: 'millimeter [mm]', label: 'Millimeter [mm]' },
  { value: 'inch [in]', label: 'Inch [in]' },
  { value: 'feet [ft]', label: 'Feet [ft]' },
  { value: 'mile [mi]', label: 'Mile [mi]' },
  { value: 'kilogram [kg]', label: 'Kilogram [kg]' },
  { value: 'pound [lb]', label: 'Pound [lb]' },
  { value: 'newton [N]', label: 'Newton [N]' },
  { value: 'kilonewton [kN]', label: 'Kilonewton [kN]' },
  { value: 'pound-force [lbf]', label: 'Pound-force [lbf]' },
  { value: 'celcius [\xB0C]', label: 'Celcius [\xB0C]' },
  { value: 'fahrenheit [\xB0F]', label: 'Fahrenheit [\xB0F]' }
];

// example to style react-select
// const customStyles = {
//   container: () => ({
//     display: "inline-block",
//     width: "100%"
//   }),
// }

//leaving this as a class component for future example
//on how to use state/props from a parent class component
class InputContainer extends React.Component {
 
  render() {
    return (
      //1 Row, 7 columns (with nested columns for input/output textboxes)
      <Row noGutters style={{justifyContent:"center", alignItems:"center"}}>
        <Col>
        </Col>
        <Col>
        </Col>
        {/* ### USER INPUT VALUE TO BE CONVERTED AND UNIT ###*/}
        <Col xs={12} sm={12} md={5} lg={4} style={{textAlign:"center"}}>
          <Col xs={8} sm={7} md={12} style={{display:"inline-block"}}>
            <InputTextComponent handleInputChange={this.props.handleInputChange} data={this.props.data}/>
            <InputUnitComponent handleChange={this.props.handleChange} data={this.props.data} options={options}/>
          </Col>
        </Col>

        {/* ### SWAP UNIT BUTTON ### */}
        <Col className="middle-button" xs={12}>
          <Button variant="primary" size="sm" onClick={this.props.handleSwapUnit}>&#x21CC;</Button>
        </Col>

        {/* ### OUTPUT TEXTBOT AND OUTPUT UNIT ### */}
        <Col xs={12} sm={12} md={5} lg={4} style={{textAlign:"center"}}>
          <Col xs={8} sm={7} md={12} style={{display:"inline-block"}} >
            <OutputTextComponent handleCopy={this.props.handleCopy} data={this.props.data}/>
            <OutputUnitComponent handleChange={this.props.handleChange} data={this.props.data} options={options}/>
          </Col>
        </Col>
        <Col>
        </Col>
        <Col>
        </Col>
      </Row>
    );
  }
}

export default InputContainer
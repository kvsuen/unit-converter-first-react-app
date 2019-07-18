import React from 'react'
import {Row, Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import InputTextComponent from './InputTextComponent'
import InputUnitComponent from './InputUnitComponent'
import OutputTextComponent from './OutputTextComponent'
import OutputUnitComponent from './OutputUnitComponent'

const options = [
  { value: 'meter [m]', label: 'Meter [m]' },
  { value: 'millimeter [mm]', label: 'Millimeter [mm]' },
  { value: 'inch [in]', label: 'Inch [in]' },
  { value: 'feet [ft]', label: 'Feet [ft]' },
  { value: 'mile [mi]', label: 'Mile [mi]' },
  { value: 'kilogram [kg]', label: 'Kilogram [kg]' },
  { value: 'newton [N]', label: 'Newton [N]' },
  { value: 'kilonewton [kN]', label: 'Kilonewton [kN]' },
  { value: 'pound [lb]', label: 'Pound [lb]' },
  { value: 'pound-force [lbf]', label: 'Pound-force [lbf]' },
];

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
        <Col xs={12} md={4} lg={3} style={{textAlign:"center"}}>
          <Col xs={8} sm={6} md={12} style={{display:"inline-block"}}>
            <InputTextComponent handleInputChange={this.props.handleInputChange} data={this.props.data}/>
            <InputUnitComponent handleChange={this.props.handleChange} data={this.props.data} options={options}/>
          </Col>
        </Col>

        {/* ### SWAP UNIT BUTTON ### */}
        <Col 
          xs={12} 
          style={{
            msFlex: "0 0 50px",
            flex: "0 0 50px",
            textAlign: "center"
          }}>
          <Button variant="primary" size="sm" onClick={this.props.handleSwapUnitButton}>&#x21CC;</Button>
        </Col>

        {/* ### OUTPUT TEXTBOT AND OUTPUT UNIT ### */}
        <Col xs={12} md={4} lg={3} style={{textAlign:"center"}}>
          <Col xs={8} sm={6} md={12} style={{display:"inline-block"}} >
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
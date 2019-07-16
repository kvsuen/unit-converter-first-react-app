import React from 'react'
import Select from 'react-select'
import {Row, Col} from 'react-bootstrap'

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

class InputConversion extends React.Component {
  state = {
    inputUnit: null,
    outputUnit: null,
  };

  handleChange = (selectedOption, event) => {
    const { name } = event
    console.log(event)
    this.setState({ [name]: selectedOption });
  };
  
  render() {
    const { inputUnit } = this.state;
    const { outputUnit } = this.state;

    return (
      <Row style={{textAlign:"center"}}>
        <Col>
        </Col>
        <Col>
        </Col>
        <Col xs={12} sm={4} lg={3}>
          <input
            className="inputs"
            placeholder="Enter value"
          />
          <Select
            name="inputUnit"
            value={inputUnit}
            onChange={this.handleChange}
            options={options}
            placeholder="Unit"
          />
        </Col>
        <Col xs={12} sm={4} lg={3}>
          <input
            className="inputs"
            placeholder="Output"
            readonly="readonly"
          />
          <Select
            name="outputUnit"
            value={outputUnit}
            onChange={this.handleChange}
            options={options}
            placeholder="Unit"
          />
        </Col>
        <Col>
        </Col>
        <Col>
        </Col>
      </Row>
    );
  }
}

export default InputConversion
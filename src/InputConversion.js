import React from 'react'
import Select from 'react-select'
import {Row, Col} from 'react-bootstrap'

const options = [
  { value: 'meter', label: 'Meter' },
  { value: 'millimeter', label: 'Millimeter' },
  { value: 'inch', label: 'Inch' },
  { value: 'feet', label: 'Feet' },
  { value: 'mile', label: 'Mile' },
  { value: 'kilogram', label: 'Kilogram' },
  { value: 'newton', label: 'Newton' },
  { value: 'kilonewton', label: 'Kilonewton' },
  { value: 'pound', label: 'Pound' },
  { value: 'pound-force', label: 'Pound-force' },
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
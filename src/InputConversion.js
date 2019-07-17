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

// const customStyles = {
//   container: () => ({
//     display: "inline-block",
//     width: "100%"
//   }),
// }

class InputConversion extends React.Component {
 
  render() {
    const { inputUnit } = this.props;
    const { outputUnit } = this.props;

    return (
      <Row noGutters>
        <Col>
        </Col>
        <Col>
        </Col>
        <Col xs={12} lg={2}>
          <input
            type="text"
            className="inputs"
            placeholder="Enter value"
          />
        </Col>
        <Col xs={12} lg={2}>
          <Select
            name="inputUnit"
            value={inputUnit}
            onChange={this.props.handleChange}
            options={options}
            placeholder="Unit"
          />
        </Col>
        <Col 
          xs={12} 
          style={{
            msFlex: "0 0 50px",
            flex: "0 0 50px",
          }}>
        </Col>
        <Col xs={12} lg={2}>
          <input
            type="text"
            className="inputs"
            placeholder="Output"
            readOnly="readOnly"
            style={{backgroundColor: "rgb(245, 245, 245)"}}
          />
        </Col>
        <Col xs={12} lg={2}>
          <Select
            name="outputUnit"
            value={outputUnit}
            onChange={this.props.handleChange}
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
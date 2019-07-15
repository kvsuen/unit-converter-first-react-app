import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
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

    const customStyles = {
      container: () => ({
        position: 'relative',
      }),
    }

    return (
      <div className="input-container">
        <input
          className="inputs"
          placeholder="Enter value"
        />

        <Select
          className="selects"
          name="inputUnit"
          value={inputUnit}
          onChange={this.handleChange}
          options={options}
          placeholder="Unit"
        />

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
      </div>
    );
  }
}

export default InputConversion
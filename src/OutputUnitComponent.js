import React from 'react';
import Select from 'react-select'

const OutputUnitComponent = (props) => {
  const { outputUnit } = props.data;

  return ( 
    <Select
      name="outputUnit"
      value={outputUnit}
      onChange={props.handleChange}
      options={props.options}
      placeholder="Unit"
    />
   );
}
 
export default OutputUnitComponent;